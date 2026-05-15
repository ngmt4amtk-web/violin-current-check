(function () {
  const data = window.VIOLIN_CHECK_DATA;
  const app = document.getElementById("app");
  const storageKey = "violin-current-check-v1";

  const answerMeta = {
    yes: { label: "○ できた", short: "○", score: 1, className: "yes" },
    almost: { label: "△ もう少し", short: "△", score: 0.5, className: "almost" },
    notYet: { label: "× まだ", short: "×", score: 0, className: "notYet" },
    later: { label: "？ あとで確認", short: "？", score: null, className: "later" }
  };

  let state = loadState();
  let clearArmed = false;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const allowedViews = ["stages", "question", "result", "history"];
      const savedView = saved.view === "home" ? "stages" : saved.view;
      return {
        view: allowedViews.includes(savedView) ? savedView : "stages",
        stageId: saved.stageId || data.stages[0].id,
        questionIndex: Number.isInteger(saved.questionIndex) ? saved.questionIndex : 0,
        answers: saved.answers || {},
        history: saved.history || {}
      };
    } catch (_error) {
      return {
        view: "stages",
        stageId: data.stages[0].id,
        questionIndex: 0,
        answers: {},
        history: {}
      };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function setView(view, options = {}) {
    state.view = view;
    if (options.stageId) state.stageId = options.stageId;
    if (Number.isInteger(options.questionIndex)) state.questionIndex = options.questionIndex;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getStage(stageId = state.stageId) {
    return data.stages.find((stage) => stage.id === stageId) || data.stages[0];
  }

  function getAnswers(stageId) {
    return state.answers[stageId] || {};
  }

  function scoreValue(answer) {
    return answerMeta[answer] ? answerMeta[answer].score : null;
  }

  function calculate(stage, answers) {
    const counts = { yes: 0, almost: 0, notYet: 0, later: 0, blank: 0 };
    const categoryMap = new Map();
    const importantBlocks = [];
    let answeredCount = 0;
    let points = 0;

    stage.questions.forEach((question) => {
      const answer = answers[question.id];
      if (!answer) {
        counts.blank += 1;
        return;
      }
      counts[answer] += 1;
      if (answer === "later") return;

      const score = scoreValue(answer);
      answeredCount += 1;
      points += score;

      const current = categoryMap.get(question.category) || { points: 0, total: 0, yes: 0, almost: 0, notYet: 0 };
      current.points += score;
      current.total += 1;
      current[answer] += 1;
      categoryMap.set(question.category, current);

      if (question.important && answer === "notYet") {
        importantBlocks.push(question);
      }
    });

    const completion = answeredCount ? Math.round((points / answeredCount) * 100) : 0;
    const categories = Array.from(categoryMap.entries()).map(([name, stats]) => ({
      name,
      average: stats.total ? stats.points / stats.total : 0,
      ...stats
    }));
    categories.sort((a, b) => a.average - b.average || b.total - a.total);

    return {
      counts,
      answeredCount,
      unconfirmed: counts.later + counts.blank,
      completion,
      categories,
      weakCategory: categories[0] || null,
      strongCategory: categories.slice().sort((a, b) => b.average - a.average || b.yes - a.yes)[0] || null,
      importantBlocks
    };
  }

  function latestEntry(stageId) {
    const entries = state.history[stageId] || [];
    return entries[entries.length - 1] || null;
  }

  function previousEntry(stageId) {
    const entries = state.history[stageId] || [];
    return entries[entries.length - 2] || null;
  }

  function answerSnapshot(stageId) {
    return JSON.stringify(getAnswers(stageId));
  }

  function saveHistoryIfChanged(stage) {
    const answers = getAnswers(stage.id);
    const result = calculate(stage, answers);
    if (!result.answeredCount && !result.counts.later) return;

    const snapshot = answerSnapshot(stage.id);
    const latest = latestEntry(stage.id);
    if (latest && latest.snapshot === snapshot) return;

    const entry = {
      id: String(Date.now()),
      date: new Date().toISOString(),
      completion: result.completion,
      counts: result.counts,
      unconfirmed: result.unconfirmed,
      weakCategory: result.weakCategory ? result.weakCategory.name : "",
      importantBlocks: result.importantBlocks.map((question) => question.id),
      answers: { ...answers },
      snapshot
    };

    state.history[stage.id] = [...(state.history[stage.id] || []), entry].slice(-12);
    saveState();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDate(iso) {
    if (!iso) return "記録なし";
    return new Intl.DateTimeFormat("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(iso));
  }

  function unique(items) {
    return [...new Set(items.filter(Boolean))];
  }

  function buildPractice(stage, answers) {
    const urgent = [];
    const notYet = [];
    const almost = [];

    stage.questions.forEach((question) => {
      const answer = answers[question.id];
      if (question.important && answer === "notYet") urgent.push(...question.practiceWhenNotYet);
      if (answer === "notYet") notYet.push(...question.practiceWhenNotYet);
      if (answer === "almost") almost.push(...question.practiceWhenAlmost);
    });

    return unique([...urgent, ...notYet, ...almost, ...stage.defaultPractice]).slice(0, 3);
  }

  function buildTeacherFocus(stage, answers, result) {
    const target =
      result.importantBlocks[0] ||
      stage.questions.find((question) => answers[question.id] === "notYet") ||
      stage.questions.find((question) => answers[question.id] === "almost");

    if (target && target.teacherFocus) return target.teacherFocus;
    return "今日できたことと迷ったことを1つずつ先生に見せましょう。";
  }

  function buildSummaryText(result) {
    const done = result.strongCategory && result.strongCategory.average >= 0.75
      ? `${result.strongCategory.name}は安定してきています。`
      : "できていることは、次の記録でさらに見えやすくなります。";
    const weak = result.importantBlocks.length
      ? "完成度は高くても、先に直すべき項目があります。"
      : result.weakCategory
        ? `${result.weakCategory.name}が今の止まりやすいところです。`
        : "まだ判断材料が足りません。";
    return { done, weak };
  }

  function renderTopbar(title = data.appName, action = "") {
    return `
      <div class="topbar">
        <h1 class="brand">${escapeHtml(title)}</h1>
        ${action}
      </div>
    `;
  }

  function renderNav(active) {
    return `
      <nav class="nav" aria-label="主要画面">
        <button class="${active === "stages" ? "active" : ""}" data-action="view" data-view="stages">段階</button>
        <button class="${active === "history" ? "active" : ""}" data-action="view" data-view="history">履歴</button>
      </nav>
    `;
  }

  function renderStageRow(stage, options = {}) {
    const answers = getAnswers(stage.id);
    const result = calculate(stage, answers);
    const latest = latestEntry(stage.id);
    const completion = latest ? latest.completion : result.completion;
    const unconfirmed = latest ? latest.unconfirmed : result.unconfirmed;
    const label = options.buttonLabel || (result.answeredCount || result.counts.later ? "続きから" : "始める");

    return `
      <button class="stage-row" data-action="${options.action || "start-stage"}" data-stage-id="${stage.id}">
        <span class="stage-number">${stage.order}</span>
        <span>
          <span class="stage-name">${escapeHtml(stage.name)}</span>
          <span class="stage-purpose">${escapeHtml(stage.purpose)}</span>
        </span>
        <span class="stage-stats">
          <span class="completion">${completion}点</span>
          <span>未確認 ${unconfirmed}</span>
          <span>${label}</span>
        </span>
      </button>
    `;
  }

  function renderStages() {
    app.innerHTML = `
      <section class="screen">
        ${renderTopbar("段階を選ぶ")}
        <p class="eyebrow">できること地図</p>
        <h2 class="title">今日見る場所を選ぶ</h2>
        <p class="subtitle">完成度は、回答済み項目だけで計算します。あとで確認にした項目は未確認として残ります。</p>
        <section class="section stack">
          ${data.stages.map((stage) => renderStageRow(stage)).join("")}
        </section>
        ${renderNav("stages")}
      </section>
    `;
  }

  function renderQuestion() {
    const stage = getStage();
    const answers = getAnswers(stage.id);
    const index = Math.max(0, Math.min(state.questionIndex, stage.questions.length - 1));
    state.questionIndex = index;
    const question = stage.questions[index];
    const answered = Object.keys(answers).filter((id) => answers[id]).length;
    const progress = Math.round(((index + 1) / stage.questions.length) * 100);
    const currentAnswer = answers[question.id];

    app.innerHTML = `
      <section class="screen question-screen">
        ${renderTopbar(stage.name, `
          <div class="top-actions">
            <button class="plain-button" data-action="view" data-view="stages">最初に戻る</button>
            <button class="plain-button" data-action="result" data-stage-id="${stage.id}">結果を見る</button>
          </div>
        `)}
        <div class="progress-line">
          <div class="bar" aria-hidden="true"><span style="width:${progress}%"></span></div>
          <span class="pill">${index + 1}/${stage.questions.length}</span>
        </div>

        <article class="question-card">
          <div>
            <p class="eyebrow">${escapeHtml(question.category)}${question.important ? " / 大事な項目" : ""}</p>
            <h2 class="question-text">${escapeHtml(question.text)}</h2>
          </div>
          <div class="criterion">
            <h2>できたと言える目安</h2>
            <p>${escapeHtml(question.criterion)}</p>
          </div>
          <div class="button-row">
            <button class="ghost-button" data-action="move-question" data-direction="-1" ${index === 0 ? "disabled" : ""}>戻る</button>
            <button class="ghost-button" data-action="move-question" data-direction="1" ${index === stage.questions.length - 1 ? "disabled" : ""}>次の質問</button>
          </div>
          <p class="small-text">回答済み ${answered}/${stage.questions.length}</p>
        </article>

        <div class="question-actions">
          ${Object.entries(answerMeta).map(([value, meta]) => `
            <button class="answer-button ${meta.className} ${currentAnswer === value ? "selected" : ""}" data-action="answer" data-answer="${value}">
              ${meta.label}
            </button>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderResult(commit = true) {
    const stage = getStage();
    if (commit) saveHistoryIfChanged(stage);
    const answers = getAnswers(stage.id);
    const result = calculate(stage, answers);
    const summary = buildSummaryText(result);
    const practice = buildPractice(stage, answers);
    const teacherFocus = buildTeacherFocus(stage, answers, result);
    const donutValue = Math.round((result.completion / 100) * 360);
    const answerRows = stage.questions.map((question, index) => {
      const answer = answers[question.id];
      const meta = answerMeta[answer] || { label: "未回答", className: "blank" };
      return `
        <li class="answer-row">
          <div>
            <p class="answer-question">${index + 1}. ${escapeHtml(question.text)}</p>
            <p class="answer-criterion">${escapeHtml(question.criterion)}</p>
          </div>
          <span class="answer-badge ${meta.className}">${escapeHtml(meta.label)}</span>
        </li>
      `;
    }).join("");

    app.innerHTML = `
      <section class="screen">
        ${renderTopbar(stage.name, `<button class="plain-button" data-action="start-stage" data-stage-id="${stage.id}">見直す</button>`)}
        <h2 class="title">完成度 ${result.completion}点</h2>

        <div class="summary-hero">
          <div class="donut" style="--value:${donutValue}deg" data-value="${result.completion}点" aria-label="完成度 ${result.completion}点"></div>
          <div class="stack">
            <span class="pill ${result.importantBlocks.length ? "bad" : "good"}">
              ${result.importantBlocks.length ? "先に直す項目あり" : "次へ進む目安を確認"}
            </span>
            <p class="subtitle">${escapeHtml(stage.nextGuide)}</p>
          </div>
        </div>

        <section class="section count-grid" aria-label="回答数">
          <div class="count-cell"><strong>${result.counts.yes}</strong><span>できた</span></div>
          <div class="count-cell"><strong>${result.counts.almost}</strong><span>もう少し</span></div>
          <div class="count-cell"><strong>${result.counts.notYet}</strong><span>まだ</span></div>
          <div class="count-cell"><strong>${result.unconfirmed}</strong><span>未確認</span></div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">回答一覧</h2>
            <span class="pill">${stage.questions.length}問</span>
          </div>
          <ol class="answer-list">
            ${answerRows}
          </ol>
        </section>

        <section class="section stack">
          <div class="card">
            <h2 class="section-title">できていること</h2>
            <p class="subtitle">${escapeHtml(summary.done)}</p>
          </div>
          <div class="card">
            <h2 class="section-title">まだ弱いこと</h2>
            <p class="subtitle">${escapeHtml(summary.weak)}</p>
          </div>
        </section>

        <section class="section">
          <div class="section-head">
            <h2 class="section-title">今日やること</h2>
            <span class="pill">3つまで</span>
          </div>
          <ol class="card list">
            ${practice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ol>
        </section>

        <section class="section">
          <div class="card">
            <h2 class="section-title">先生に見せること</h2>
            <p class="subtitle">${escapeHtml(teacherFocus)}</p>
          </div>
        </section>

        <section class="section button-row">
          <button class="primary-button" data-action="view" data-view="stages">別の段階を見る</button>
          <button class="ghost-button" data-action="view" data-view="history">履歴を見る</button>
        </section>
        ${renderNav("stages")}
      </section>
    `;
  }

  function changedQuestions(stage, latest, previous, direction) {
    if (!latest || !previous) return [];
    return stage.questions.filter((question) => {
      const before = scoreValue(previous.answers[question.id]);
      const after = scoreValue(latest.answers[question.id]);
      if (before === null || after === null || before === undefined || after === undefined) return false;
      return direction === "up" ? after > before : after < before;
    }).slice(0, 3);
  }

  function repeatedQuestions(stage, entries, answerValue) {
    const recent = entries.slice(-3);
    if (recent.length < 2) return [];
    return stage.questions.filter((question) => {
      const count = recent.filter((entry) => entry.answers[question.id] === answerValue).length;
      return count >= 2;
    }).slice(0, 3);
  }

  function renderHistory() {
    const rows = data.stages.map((stage) => {
      const entries = state.history[stage.id] || [];
      const latest = entries[entries.length - 1];
      const previous = entries[entries.length - 2];
      const delta = latest && previous ? latest.completion - previous.completion : null;
      const improved = changedQuestions(stage, latest, previous, "up");
      const repeatedAlmost = repeatedQuestions(stage, entries, "almost");
      const repeatedNotYet = repeatedQuestions(stage, entries, "notYet");

      if (!latest) {
        return `
          <div class="card history-item">
            <h2 class="section-title">${stage.order}. ${escapeHtml(stage.name)}</h2>
            <p class="empty">まだ記録がありません。</p>
            <button class="ghost-button" data-action="start-stage" data-stage-id="${stage.id}">始める</button>
          </div>
        `;
      }

      return `
        <div class="card history-item">
          <div class="section-head">
            <h2 class="section-title">${stage.order}. ${escapeHtml(stage.name)}</h2>
            <span class="pill ${delta === null ? "" : delta >= 0 ? "good" : "warn"}">
              ${delta === null ? "初回" : `${delta >= 0 ? "+" : ""}${delta}点`}
            </span>
          </div>
          <div class="history-meta">${formatDate(latest.date)} / 完成度 ${latest.completion}点 / 未確認 ${latest.unconfirmed}</div>
          <div>
            <p class="eyebrow">前回より良くなった項目</p>
            ${improved.length ? `<ul class="list">${improved.map((question) => `<li>${escapeHtml(question.text)}</li>`).join("")}</ul>` : `<p class="empty">まだ比較できる変化はありません。</p>`}
          </div>
          <div>
            <p class="eyebrow">何度も△の項目</p>
            ${repeatedAlmost.length ? `<ul class="list">${repeatedAlmost.map((question) => `<li>${escapeHtml(question.text)}</li>`).join("")}</ul>` : `<p class="empty">続いている項目はありません。</p>`}
          </div>
          <div>
            <p class="eyebrow">何度も×の項目</p>
            ${repeatedNotYet.length ? `<ul class="list">${repeatedNotYet.map((question) => `<li>${escapeHtml(question.text)}</li>`).join("")}</ul>` : `<p class="empty">続いている項目はありません。</p>`}
          </div>
          <div class="button-row">
            <button class="ghost-button" data-action="result" data-stage-id="${stage.id}">結果を見る</button>
            <button class="ghost-button" data-action="start-stage" data-stage-id="${stage.id}">答え直す</button>
          </div>
        </div>
      `;
    }).join("");

    app.innerHTML = `
      <section class="screen">
        ${renderTopbar("履歴")}
        <p class="eyebrow">前回との比較</p>
        <h2 class="title">変わっていない場所を見る</h2>
        <p class="subtitle">何週間も同じ△や×が続く項目ほど、先生に見せる価値があります。</p>
        <section class="section stack">
          ${rows}
        </section>
        <section class="section">
          <button class="ghost-button" data-action="clear-records">${clearArmed ? "もう一度押して消す" : "この端末の記録を消す"}</button>
        </section>
        ${renderNav("history")}
      </section>
    `;
  }

  function answerCurrentQuestion(answer) {
    const stage = getStage();
    const question = stage.questions[state.questionIndex];
    state.answers[stage.id] = {
      ...(state.answers[stage.id] || {}),
      [question.id]: answer
    };

    if (state.questionIndex < stage.questions.length - 1) {
      state.questionIndex += 1;
      saveState();
      renderQuestion();
      return;
    }

    saveState();
    setView("result", { stageId: stage.id });
  }

  function moveQuestion(direction) {
    const stage = getStage();
    state.questionIndex = Math.max(0, Math.min(stage.questions.length - 1, state.questionIndex + direction));
    saveState();
    renderQuestion();
  }

  function handleClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    if (action === "view") {
      setView(target.dataset.view);
      return;
    }

    if (action === "start-stage") {
      const stage = getStage(target.dataset.stageId);
      const answers = getAnswers(stage.id);
      const firstBlank = stage.questions.findIndex((question) => !answers[question.id]);
      setView("question", {
        stageId: stage.id,
        questionIndex: firstBlank === -1 ? 0 : firstBlank
      });
      return;
    }

    if (action === "answer") {
      answerCurrentQuestion(target.dataset.answer);
      return;
    }

    if (action === "move-question") {
      moveQuestion(Number(target.dataset.direction));
      return;
    }

    if (action === "result") {
      setView("result", { stageId: target.dataset.stageId });
      return;
    }

    if (action === "clear-records") {
      if (!clearArmed) {
        clearArmed = true;
        renderHistory();
        return;
      }
      state = {
        view: "stages",
        stageId: data.stages[0].id,
        questionIndex: 0,
        answers: {},
        history: {}
      };
      clearArmed = false;
      localStorage.removeItem(storageKey);
      render();
    }
  }

  function render() {
    if (state.view === "stages") renderStages();
    else if (state.view === "question") renderQuestion();
    else if (state.view === "result") renderResult(true);
    else if (state.view === "history") renderHistory();
    else renderStages();
  }

  app.addEventListener("click", handleClick);
  render();
})();
