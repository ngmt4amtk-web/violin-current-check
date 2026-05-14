window.VIOLIN_CHECK_DATA = {
  appName: "バイオリン現在地チェック",
  stages: [
    {
      id: "body",
      order: 1,
      name: "からだと楽器の準備",
      purpose: "楽器を無理なく構え、力みを減らす段階です。",
      nextGuide: "80点以上。ただし痛みや強い挟み込みがある場合は、先に直しましょう。",
      defaultPractice: [
        "鏡の前で10回構え直し、毎回同じ場所に来るか見る",
        "楽器を持ったまま30秒だけ肩を下げて呼吸する",
        "弓を持って指を1本ずつ軽く動かす"
      ],
      questions: [
        {
          id: "body-01",
          text: "肩を上げずに、楽器を1分持っていられますか？",
          criterion: "首や肩が固まらず、左手で強く支えなくても楽器が安定している。",
          category: "構え",
          important: true,
          practiceWhenAlmost: ["30秒だけ楽器を持ち、息を止めていないか確認する", "肩を一度上げてから落とし、その位置で構える"],
          practiceWhenNotYet: ["楽器なしで首と肩をゆるめる", "先生に肩当てとあご当ての高さを見てもらう"],
          teacherFocus: "正面と横から撮り、肩が上がる瞬間を先生に見せましょう。"
        },
        {
          id: "body-02",
          text: "左手を離しても、楽器がすぐ落ちそうになりませんか？",
          criterion: "左手を軽く離しても、楽器が鎖骨と頭の重さで短く安定している。",
          category: "構え",
          important: true,
          practiceWhenAlmost: ["左手を1秒だけ離して戻す練習を5回する", "鏡で楽器の角度が下がらないか見る"],
          practiceWhenNotYet: ["肩当ての位置を少しずつ変えて安定する場所を探す", "楽器を置いて、あごだけで強く挟んでいないか確認する"],
          teacherFocus: "左手を離した瞬間の楽器の角度を先生に見せましょう。"
        },
        {
          id: "body-03",
          text: "楽器を10回構えても、毎回だいたい同じ場所に来ますか？",
          criterion: "楽器の高さ、向き、あごの置き場所が毎回大きく変わらない。",
          category: "構え",
          important: false,
          practiceWhenAlmost: ["鏡の前で5回だけゆっくり構え直す", "構えたあとに肩と首の力を抜く"],
          practiceWhenNotYet: ["楽器を持つ前の足の位置を決める", "1回ごとに楽器を完全に下ろして構え直す"],
          teacherFocus: "10回構えた動画を早送りで見せ、場所のずれを確認してもらいましょう。"
        },
        {
          id: "body-04",
          text: "楽器を顎で強く挟まずに構えられますか？",
          criterion: "あごや首に強い押しつけがなく、口や首まわりが固まっていない。",
          category: "構え",
          important: true,
          practiceWhenAlmost: ["構えたまま口を軽く開け閉めして力みを探す", "10秒だけ小さく呼吸しながら楽器を保つ"],
          practiceWhenNotYet: ["楽器を置き、首を回して力みを抜く", "あご当ての当たる場所を先生に確認してもらう"],
          teacherFocus: "首元が見える角度で撮り、挟み込みの強さを先生に見せましょう。"
        },
        {
          id: "body-05",
          text: "弓を持つ手の親指が反り返っていませんか？",
          criterion: "親指が軽く曲がり、弓を支える場所で固まっていない。",
          category: "弓の持ち方",
          important: false,
          practiceWhenAlmost: ["鉛筆で弓の持ち方を作り、親指を軽く曲げる", "弓を持ったまま指を少しだけ上下に動かす"],
          practiceWhenNotYet: ["弓を置いて、親指だけ軽く曲げる練習をする", "鏡で親指の形を確認してから弓を持つ"],
          teacherFocus: "弓を持つ手元を近くから撮って先生に見せましょう。"
        },
        {
          id: "body-06",
          text: "弓を持ったまま、手がガチガチになっていませんか？",
          criterion: "指が白くなるほど握らず、手首と指に少し動く余裕がある。",
          category: "弓の持ち方",
          important: false,
          practiceWhenAlmost: ["弓を持ったまま小さく上下に揺らす", "指先の力を半分にして持ち直す"],
          practiceWhenNotYet: ["弓を机に置いて、手を乗せるだけの形を作る", "10秒持って10秒休む練習にする"],
          teacherFocus: "手首と指が動くか、手元だけを撮って先生に見せましょう。"
        },
        {
          id: "body-07",
          text: "足の重さが、左右どちらかに寄りすぎていませんか？",
          criterion: "両足で床を感じ、膝や腰が固まりすぎていない。",
          category: "姿勢",
          important: false,
          practiceWhenAlmost: ["足の幅を少し変え、楽に立てる場所を探す", "弾く前に膝を一度ゆるめる"],
          practiceWhenNotYet: ["楽器なしで30秒立ち、重さの偏りを見る", "鏡で体が傾いていないか確認する"],
          teacherFocus: "全身が入る動画で、立ち方を先生に見せましょう。"
        },
        {
          id: "body-08",
          text: "構えたまま、息を止めずにいられますか？",
          criterion: "音を出す前から呼吸が止まらず、肩や顔が固まっていない。",
          category: "呼吸",
          important: false,
          practiceWhenAlmost: ["弾く前に1回息を吐いてから構える", "4拍数えながら呼吸を続ける"],
          practiceWhenNotYet: ["楽器を持たずに4拍吸って4拍吐く", "楽器を持つ時間を10秒に短くする"],
          teacherFocus: "弾く直前の顔と肩を先生に見せましょう。"
        },
        {
          id: "body-09",
          text: "構えたあと、左手の親指を軽く動かせますか？",
          criterion: "親指が楽器を強く握りこまず、少し離したり戻したりできる。",
          category: "左手",
          important: true,
          practiceWhenAlmost: ["親指を軽く触れるだけにして3秒保つ", "親指を小さく上下に動かして力みを探す"],
          practiceWhenNotYet: ["左手を使わずに楽器を安定させる練習に戻る", "親指の位置を先生に確認してもらう"],
          teacherFocus: "左手親指が見える角度で、構えた直後を先生に見せましょう。"
        },
        {
          id: "body-10",
          text: "構えたあと、首・肩・左手に痛みが出ていませんか？",
          criterion: "短い練習後にも痛みがなく、違和感が強く残らない。",
          category: "からだ",
          important: true,
          practiceWhenAlmost: ["練習を短く区切り、痛みが出る前に休む", "痛みが出る動きをメモする"],
          practiceWhenNotYet: ["痛みがある状態で続けない", "肩当て、あご当て、構えを先生に見てもらう"],
          teacherFocus: "痛みが出る場所とタイミングを先生に伝えましょう。"
        }
      ]
    },
    {
      id: "bow-open",
      order: 2,
      name: "弓と開放弦",
      purpose: "まっすぐ弓を動かし、開放弦で安定した音を出す段階です。",
      nextGuide: "80点以上。ただし弓を押し込む癖がある場合は、先に直しましょう。",
      defaultPractice: [
        "A線だけで、弓を4拍かけて下げる",
        "弓の真ん中だけで、音量を変えずに4回弾く",
        "10秒だけ録画して、弓が斜めに流れていないか見る"
      ],
      questions: [
        {
          id: "bow-01",
          text: "開放弦を4本とも、きれいな音で鳴らせますか？",
          criterion: "音がつぶれず、途中で急に弱くならず、弓が大きく曲がらない。",
          category: "音色",
          important: false,
          practiceWhenAlmost: ["1本の弦だけを4回続けて弾く", "音量を変えずに2拍ずつ弾く"],
          practiceWhenNotYet: ["弓の真ん中だけで短く弾く", "音がつぶれない速さまで弓を遅くする"],
          teacherFocus: "4本の開放弦を1回ずつ録音して先生に聞いてもらいましょう。"
        },
        {
          id: "bow-02",
          text: "弓を端から端まで使っても、音が急に弱くなりませんか？",
          criterion: "弓先でも弓元でも音量が大きく崩れず、音が途中で消えない。",
          category: "弓の配分",
          important: false,
          practiceWhenAlmost: ["全弓を4拍で下げ、4拍で上げる", "弓先だけを1拍長く保つ"],
          practiceWhenNotYet: ["半弓だけで音量をそろえる", "弓を使う長さに印をつけて弾く"],
          teacherFocus: "全弓で弾いた横からの動画を先生に見せましょう。"
        },
        {
          id: "bow-03",
          text: "弓が指板側に流れすぎていませんか？",
          criterion: "弓が駒と指板の間を通り、音を出す場所が大きくずれない。",
          category: "弓の通り道",
          important: false,
          practiceWhenAlmost: ["鏡を見ながらA線を4回弾く", "弓の真ん中だけでまっすぐ動かす"],
          practiceWhenNotYet: ["開放弦を10秒録画して弓の通り道を見る", "短い弓で場所を固定して弾く"],
          teacherFocus: "駒と弓の位置が見える横動画を先生に見せましょう。"
        },
        {
          id: "bow-04",
          text: "A線からD線へ移るとき、音がつぶれませんか？",
          criterion: "弦を移る瞬間に弓を押し込まず、次の弦もすぐ鳴る。",
          category: "移弦",
          important: false,
          practiceWhenAlmost: ["A線とD線を2拍ずつ交互に弾く", "移る前に右ひじの高さを準備する"],
          practiceWhenNotYet: ["弓を止めて、腕の高さだけを変える", "短い弓でA線D線を1回ずつ弾く"],
          teacherFocus: "移弦の瞬間だけを近くから撮って先生に見せましょう。"
        },
        {
          id: "bow-05",
          text: "弓の上半分、下半分、真ん中だけを使い分けられますか？",
          criterion: "指定した場所だけで弾けて、弓の長さが毎回大きく変わらない。",
          category: "弓の配分",
          important: false,
          practiceWhenAlmost: ["弓の場所を声に出してから弾く", "真ん中だけで4回同じ音量で弾く"],
          practiceWhenNotYet: ["弓に目印をつけ、使う場所を短くする", "上半分だけ、下半分だけを別々に練習する"],
          teacherFocus: "指定した弓の場所が守れているか先生に見せましょう。"
        },
        {
          id: "bow-06",
          text: "弓を人差し指で押し込まずに音を出せますか？",
          criterion: "音を大きくしようとして指で押さえつけず、音が硬くつぶれない。",
          category: "弓圧",
          important: true,
          practiceWhenAlmost: ["小さい音で4回弾き、音がつぶれない力を探す", "人差し指の力を半分にして同じ弦を弾く"],
          practiceWhenNotYet: ["弓を弦に置くだけで音を出さずに重さを感じる", "弓の真ん中だけで軽く短く弾く"],
          teacherFocus: "音がつぶれる瞬間の手元を先生に見せましょう。"
        },
        {
          id: "bow-07",
          text: "弓を返すところで、音が急に途切れませんか？",
          criterion: "下げ弓から上げ弓に変わる瞬間も、音が乱れすぎない。",
          category: "弓返し",
          important: false,
          practiceWhenAlmost: ["弓先で2回、弓元で2回だけ返す練習をする", "返す直前に力を抜く"],
          practiceWhenNotYet: ["短い弓で返す場所を真ん中にする", "返す瞬間をゆっくりにして音を聞く"],
          teacherFocus: "弓返しの瞬間を録音して先生に聞いてもらいましょう。"
        },
        {
          id: "bow-08",
          text: "4拍の長い音を、最後まで同じ速さで弾けますか？",
          criterion: "途中で弓が急に速くなったり、最後に足りなくなったりしない。",
          category: "弓の配分",
          important: false,
          practiceWhenAlmost: ["弓を4つの場所に分けて1拍ずつ使う", "声で4拍数えながら開放弦を弾く"],
          practiceWhenNotYet: ["2拍の長さから始める", "弓の使う範囲を半分にする"],
          teacherFocus: "4拍で弓がどこまで進むか、横から先生に見せましょう。"
        },
        {
          id: "bow-09",
          text: "同じ弦を4回弾いて、音量を大きく変えずにいられますか？",
          criterion: "4回の音がばらばらにならず、最初だけ強い音にならない。",
          category: "音色",
          important: false,
          practiceWhenAlmost: ["4回すべて小さめの音で弾く", "最初の音だけ強くならないように弓を置いてから弾く"],
          practiceWhenNotYet: ["1回弾くごとに弓を置き直す", "録音して4回の音量差を聞く"],
          teacherFocus: "4回連続の録音を先生に聞いてもらいましょう。"
        },
        {
          id: "bow-10",
          text: "隣の弦を余計に鳴らさず、1本の弦だけを弾けますか？",
          criterion: "弾きたい弦だけが鳴り、隣の弦が何度も混ざらない。",
          category: "移弦",
          important: false,
          practiceWhenAlmost: ["右ひじの高さを決めてから弓を動かす", "短い弓で1本ずつ音を確認する"],
          practiceWhenNotYet: ["弓を止めて、弦ごとの腕の高さだけを練習する", "D線だけ、A線だけを交互にゆっくり弾く"],
          teacherFocus: "右腕の高さが見える正面動画を先生に見せましょう。"
        },
        {
          id: "bow-11",
          text: "弓元で手首や指が固まりすぎていませんか？",
          criterion: "弓元に来ても手首が少し動き、音が急につぶれない。",
          category: "弓の持ち方",
          important: false,
          practiceWhenAlmost: ["弓元だけで小さく上下に動かす", "弓元に来たら指を少し柔らかくする"],
          practiceWhenNotYet: ["弓を持つ手の形だけを作り直す", "弓元を使わず、真ん中から始める"],
          teacherFocus: "弓元での手首と指を近くから先生に見せましょう。"
        },
        {
          id: "bow-12",
          text: "開放弦を弾く前に、弓を静かに弦へ置けますか？",
          criterion: "弓を空中からぶつけず、弦に置いてから音を出せる。",
          category: "音の出だし",
          important: false,
          practiceWhenAlmost: ["弓を置く、息を吐く、弾くの順で4回行う", "弓を置いたまま1秒待ってから弾く"],
          practiceWhenNotYet: ["音を出さず、弓を弦へ置く動きだけを5回する", "弓の重さだけを感じてから短く弾く"],
          teacherFocus: "音の出だしだけを録音して先生に聞いてもらいましょう。"
        }
      ]
    },
    {
      id: "left-basic",
      order: 3,
      name: "左手の基本の場所",
      purpose: "第1ポジションの指と音程を作る段階です。",
      nextGuide: "80点以上。ただし左手親指の力みがある場合は、先に直しましょう。",
      defaultPractice: [
        "A線で1・2・3の指をゆっくり置く",
        "指を置く前に、親指の力を抜く",
        "開放弦と一緒に響く音を1つ探す"
      ],
      questions: [
        {
          id: "left-01",
          text: "1・2・3・4の指を、順番に置けますか？",
          criterion: "指を置く順番が混乱せず、置いた指がすぐ大きく崩れない。",
          category: "指の場所",
          important: false,
          practiceWhenAlmost: ["A線だけで1・2・3・4をゆっくり置く", "置いた指をすぐ離さず、形を見てから進む"],
          practiceWhenNotYet: ["1と2だけに減らして練習する", "楽器なしで指番号を声に出す"],
          teacherFocus: "左手の指が見える角度で順番に置く動画を先生に見せましょう。"
        },
        {
          id: "left-02",
          text: "指を置くとき、左手の親指で強く握っていませんか？",
          criterion: "親指が固まらず、指を置いても首まわりや手首に強い力みがない。",
          category: "左手親指",
          important: true,
          practiceWhenAlmost: ["1本置くたびに親指を軽く動かす", "親指の力を半分にして同じ音を弾く"],
          practiceWhenNotYet: ["左手を離して楽器を持つ練習に戻る", "親指の位置と高さを先生に確認してもらう"],
          teacherFocus: "左手親指が見える角度で、指を置く瞬間を先生に見せましょう。"
        },
        {
          id: "left-03",
          text: "高い2の指と低い2の指の違いがわかりますか？",
          criterion: "2の指を置く場所が1つだけだと思わず、曲に合わせて高低を変えられる。",
          category: "半音と全音",
          important: false,
          practiceWhenAlmost: ["1と2を近づける形、2と3を近づける形を比べる", "A線で低い2と高い2を別々に弾く"],
          practiceWhenNotYet: ["指を置かずに、先生の音を聞いて高低をまねる", "鍵盤やチューナーで半音の幅を確認する"],
          teacherFocus: "低い2と高い2を続けて弾き、先生に音程差を聞いてもらいましょう。"
        },
        {
          id: "left-04",
          text: "G線、D線、A線、E線の音名を言えますか？",
          criterion: "4本の開放弦の名前を、低い方からでも高い方からでも言える。",
          category: "音名",
          important: false,
          practiceWhenAlmost: ["弦を指差して音名を声に出す", "低い弦から順番に毎日1回言う"],
          practiceWhenNotYet: ["4本の弦名を書いたメモを楽器ケースに入れる", "1本ずつ弾いて名前を言う"],
          teacherFocus: "音名が曖昧な弦を先生に確認しましょう。"
        },
        {
          id: "left-05",
          text: "1オクターブの音階を、ゆっくり正しい音程で弾けますか？",
          criterion: "急がずに弾き、明らかに高すぎる音や低すぎる音を直そうとできる。",
          category: "音程",
          important: false,
          practiceWhenAlmost: ["音階を半分の速さで弾く", "外れた音だけを3回取り出す"],
          practiceWhenNotYet: ["3音だけの並びに減らす", "開放弦と近い音だけを確認する"],
          teacherFocus: "音階を録音し、外れやすい音を先生に聞いてもらいましょう。"
        },
        {
          id: "left-06",
          text: "A線の1の指を置いたとき、開放弦と一緒に響く感じがありますか？",
          criterion: "音が低すぎたり高すぎたりせず、響きが暗く濁りすぎない。",
          category: "音程",
          important: false,
          practiceWhenAlmost: ["1の指だけを置いて、音を長く聞く", "少し高い場合と低い場合を比べる"],
          practiceWhenNotYet: ["開放弦を先に鳴らしてから1の指を置く", "指を置く場所に目印をつける"],
          teacherFocus: "A線1の指だけを数回弾いて、先生に音程を聞いてもらいましょう。"
        },
        {
          id: "left-07",
          text: "指を置いたあと、手首が楽器の下に折れすぎていませんか？",
          criterion: "手首が大きく曲がらず、指先が上から弦に届いている。",
          category: "左手の形",
          important: false,
          practiceWhenAlmost: ["鏡で手首の角度を見ながら1の指を置く", "手首を少し戻してから同じ音を弾く"],
          practiceWhenNotYet: ["楽器なしで左手の丸い形を作る", "指を置く数を1本だけにする"],
          teacherFocus: "左手首が見える正面動画を先生に見せましょう。"
        },
        {
          id: "left-08",
          text: "指を置くとき、他の指まで一緒に固まっていませんか？",
          criterion: "使っていない指も少し浮かせられ、手全体で握りこまない。",
          category: "指の独立",
          important: false,
          practiceWhenAlmost: ["1の指だけ置いて、2・3・4を軽く動かす", "指を置いたらすぐ力を抜く"],
          practiceWhenNotYet: ["楽器なしで指を1本ずつ上げる", "1と2だけにしてゆっくり動かす"],
          teacherFocus: "使っていない指の力みを先生に見てもらいましょう。"
        },
        {
          id: "left-09",
          text: "4の指を置いても、左手全体がつぶれませんか？",
          criterion: "4の指を置いたときに親指や手首が強く固まらず、音が短くつぶれない。",
          category: "指の場所",
          important: false,
          practiceWhenAlmost: ["3から4へゆっくり置く", "4の指を置いたらすぐ親指をゆるめる"],
          practiceWhenNotYet: ["4の指だけを短く置いてすぐ離す", "4の指を無理に伸ばさず、左手の形を先生に見てもらう"],
          teacherFocus: "4の指を置く瞬間の左手全体を先生に見せましょう。"
        },
        {
          id: "left-10",
          text: "音程が外れたとき、高いか低いかを少し判断できますか？",
          criterion: "外れたことだけで止まらず、上げるか下げるかを試せる。",
          category: "音程",
          important: false,
          practiceWhenAlmost: ["わざと少し高く弾き、次に少し低く弾く", "先生の音と自分の音を交互に聞く"],
          practiceWhenNotYet: ["1音だけを長く弾いて、響きの変化を聞く", "録音して、あとから高低を先生に聞く"],
          teacherFocus: "迷った音を1つ選び、高いか低いか先生に確認しましょう。"
        },
        {
          id: "left-11",
          text: "弾き終わった指を、必要以上に高く跳ね上げていませんか？",
          criterion: "指を離しても手の形が崩れず、次の音に戻りやすい高さにいる。",
          category: "指の独立",
          important: false,
          practiceWhenAlmost: ["指を離す高さを小さくして4回弾く", "離した指を弦の近くに待たせる"],
          practiceWhenNotYet: ["音を出さず、指を置く離すだけをゆっくり行う", "1本の指だけで低く離す練習をする"],
          teacherFocus: "指が跳ねる高さを横から先生に見せましょう。"
        },
        {
          id: "left-12",
          text: "左手だけに気を取られて、弓の音が乱れすぎていませんか？",
          criterion: "指を置いても弓が止まりすぎず、音が毎回つぶれない。",
          category: "両手",
          important: false,
          practiceWhenAlmost: ["指を1つだけ使って弓を安定させる", "左手をゆっくりにして、弓は同じ速さにする"],
          practiceWhenNotYet: ["開放弦に戻って弓の音を確認する", "左手の音を2つだけに減らす"],
          teacherFocus: "左手を使ったときの音の乱れを録音して先生に聞いてもらいましょう。"
        }
      ]
    },
    {
      id: "music-reading",
      order: 4,
      name: "両手で曲と楽譜",
      purpose: "簡単な曲を読み、両手を合わせて弾く段階です。",
      nextGuide: "80点以上。ただし曲の途中で止まる原因が毎回同じ場合は、先に整理しましょう。",
      defaultPractice: [
        "4小節だけ選び、ゆっくり止まらずに弾く",
        "手拍子でリズムを言ってから弾く",
        "間違えたら次の小節から戻る練習をする"
      ],
      questions: [
        {
          id: "music-01",
          text: "簡単な1ページの曲を、止まりすぎずに読めますか？",
          criterion: "毎小節で止まらず、音名や指を考えながら最後まで進める。",
          category: "読譜",
          important: false,
          practiceWhenAlmost: ["4小節だけを先に音名で読む", "ゆっくりでも最後まで止まらずに進む"],
          practiceWhenNotYet: ["2小節だけに分けて読む", "音を出さずに指だけ確認する"],
          teacherFocus: "止まりやすい小節に印をつけて先生に見せましょう。"
        },
        {
          id: "music-02",
          text: "4分音符と8分音符の違いを、弾いて表せますか？",
          criterion: "長い音と短い音が同じ長さにならず、拍の中で区別できる。",
          category: "リズム",
          important: false,
          practiceWhenAlmost: ["手拍子でリズムを言ってから弾く", "同じ音でリズムだけを弾く"],
          practiceWhenNotYet: ["音符の名前を声に出して読む", "1小節だけを手拍子にする"],
          teacherFocus: "手拍子と演奏を両方先生に見せましょう。"
        },
        {
          id: "music-03",
          text: "メトロノームに合わせて、音階を弾けますか？",
          criterion: "速くなったり遅くなったりしても、途中で拍に戻ろうとできる。",
          category: "テンポ",
          important: false,
          practiceWhenAlmost: ["遅い速さで1音ずつ弾く", "拍を声に出しながら音階を弾く"],
          practiceWhenNotYet: ["弾かずに拍だけ数える", "2音だけをメトロノームに合わせる"],
          teacherFocus: "メトロノームの音が入るように録音して先生に聞いてもらいましょう。"
        },
        {
          id: "music-04",
          text: "2つの音をひと弓でなめらかに弾けますか？",
          criterion: "弓の途中で音が切れず、2音目だけ急に弱くならない。",
          category: "スラー",
          important: false,
          practiceWhenAlmost: ["開放弦で2音をひと弓にする", "弓を半分ずつ使って2音を弾く"],
          practiceWhenNotYet: ["同じ音を2つ、ひと弓で弾く", "左手なしで弓の配分だけ練習する"],
          teacherFocus: "2音目の音量が落ちるか先生に聞いてもらいましょう。"
        },
        {
          id: "music-05",
          text: "曲の途中で間違えても、次の小節から戻れますか？",
          criterion: "最初から弾き直すだけでなく、途中の場所から再開できる。",
          category: "戻る力",
          important: false,
          practiceWhenAlmost: ["2小節目、4小節目など途中から始める", "間違えても次の小節の頭を探す"],
          practiceWhenNotYet: ["小節番号をつける", "1段を2つに分けて始める場所を決める"],
          teacherFocus: "戻れない場所に印をつけて先生に見せましょう。"
        },
        {
          id: "music-06",
          text: "音名を読んでから、指の番号に置き換えられますか？",
          criterion: "楽譜の音を見て、どの弦のどの指かを少し考えられる。",
          category: "読譜",
          important: false,
          practiceWhenAlmost: ["4小節だけ音名を書き込む", "音名を言ってから指番号を言う"],
          practiceWhenNotYet: ["開放弦の音名だけを先に探す", "1つの弦だけで出る音に絞る"],
          teacherFocus: "音名から指番号に迷う音を先生に確認しましょう。"
        },
        {
          id: "music-07",
          text: "調号を見て、高い2か低い2かを考えられますか？",
          criterion: "曲の中で2の指の場所が変わる理由を、少し説明できる。",
          category: "読譜",
          important: false,
          practiceWhenAlmost: ["曲の前に2の指の場所だけ確認する", "高い2と低い2が出る小節に印をつける"],
          practiceWhenNotYet: ["先生と一緒に調号を1つだけ確認する", "2の指を使う音だけ取り出す"],
          teacherFocus: "2の指の場所が曖昧な小節を先生に見せましょう。"
        },
        {
          id: "music-08",
          text: "曲の中で、弓を使う長さを少し考えられますか？",
          criterion: "長い音では弓を多めに使い、短い音では使いすぎないようにできる。",
          category: "ボーイング",
          important: false,
          practiceWhenAlmost: ["長い音に丸をつけ、弓を多めに使う", "短い音だけを小さい弓で弾く"],
          practiceWhenNotYet: ["開放弦で長い音と短い音を分ける", "1小節だけ弓の長さを決める"],
          teacherFocus: "弓が足りなくなる場所を先生に見せましょう。"
        },
        {
          id: "music-09",
          text: "音が多い場所でも、右手が急に強くなりすぎませんか？",
          criterion: "難しい場所で弓を押し込みすぎず、音色が急に荒れない。",
          category: "両手",
          important: true,
          practiceWhenAlmost: ["難しい場所を小さい音で弾く", "左手だけ確認してから弓を軽くする"],
          practiceWhenNotYet: ["音を半分に減らして弾く", "弓だけ開放弦で同じリズムを練習する"],
          teacherFocus: "音が荒れる小節を録音して先生に聞いてもらいましょう。"
        },
        {
          id: "music-10",
          text: "耳で覚えた曲でも、楽譜のどこを弾いているか追えますか？",
          criterion: "暗記だけに頼らず、今の場所を楽譜で見つけられる。",
          category: "読譜",
          important: false,
          practiceWhenAlmost: ["弾く前に小節を指で追う", "1段だけ楽譜を見ながら弾く"],
          practiceWhenNotYet: ["録音を聞きながら楽譜を指で追う", "曲を短く分けて場所を確認する"],
          teacherFocus: "楽譜上で見失う場所を先生に伝えましょう。"
        },
        {
          id: "music-11",
          text: "強い音と弱い音を、少し弾き分けられますか？",
          criterion: "全部同じ音量ではなく、弓の速さや量で変化をつけられる。",
          category: "表現",
          important: false,
          practiceWhenAlmost: ["同じ音を強く、次に弱く弾く", "強くする場所を1つだけ決める"],
          practiceWhenNotYet: ["開放弦で音量を2種類だけ作る", "弓を速くする、遅くする違いを聞く"],
          teacherFocus: "音量を変えたい場所を先生に相談しましょう。"
        },
        {
          id: "music-12",
          text: "1曲を弾いたあと、止まった原因を1つ言えますか？",
          criterion: "音程、リズム、弓、読譜のどれで止まったかを少し分けられる。",
          category: "振り返り",
          important: false,
          practiceWhenAlmost: ["止まった場所に印をつけ、原因を1語で書く", "録音を聞いて原因を1つ選ぶ"],
          practiceWhenNotYet: ["先生と一緒に原因を分類する", "止まった回数だけを数える"],
          teacherFocus: "止まった場所と自分の原因メモを先生に見せましょう。"
        }
      ]
    },
    {
      id: "shift-entry",
      order: 5,
      name: "左手の移動の入口",
      purpose: "第1の場所から第3の場所へ、無理なく移動する段階です。",
      nextGuide: "80点以上。ただし親指の固まりや音程のごまかしがある場合は、先に直しましょう。",
      defaultPractice: [
        "音を出さずに第1から第3の場所へ同じ指で動く",
        "移動先の音を歌ってから弾く",
        "開放弦との響きで着いた音を確認する"
      ],
      questions: [
        {
          id: "shift-01",
          text: "第1の場所から第3の場所へ、同じ指で移動できますか？",
          criterion: "移動中に手の形が崩れすぎず、着いた場所で音を出せる。",
          category: "ポジション移動",
          important: false,
          practiceWhenAlmost: ["1の指だけでゆっくり移動する", "移動先で1秒止まってから弾く"],
          practiceWhenNotYet: ["音を出さずに左手だけ動かす", "楽器本体に触れる場所を目印にする"],
          teacherFocus: "同じ指で移動する左手の動きを先生に見せましょう。"
        },
        {
          id: "shift-02",
          text: "移動するとき、親指が固まっていませんか？",
          criterion: "親指が置いていかれず、手全体と一緒に軽く動く。",
          category: "左手親指",
          important: true,
          practiceWhenAlmost: ["親指を軽く動かしてから移動する", "移動中に親指の力を半分にする"],
          practiceWhenNotYet: ["音を出さず、親指だけ滑らせる練習をする", "親指の場所を先生に確認してもらう"],
          teacherFocus: "親指が見える角度で移動を撮り、先生に見せましょう。"
        },
        {
          id: "shift-03",
          text: "移動先の音を、弾く前に頭の中で思い浮かべられますか？",
          criterion: "動いてから探すだけでなく、着く音を先に歌ったり想像したりできる。",
          category: "音程準備",
          important: false,
          practiceWhenAlmost: ["移動先の音を声に出してから弾く", "先生の音を聞いてから同じ音へ移動する"],
          practiceWhenNotYet: ["移動先の音だけを先に弾いて覚える", "歌える高さまでゆっくり確認する"],
          teacherFocus: "移動先の音を歌ってから弾く様子を先生に見せましょう。"
        },
        {
          id: "shift-04",
          text: "移動したあと、開放弦との響きで音程を確認できますか？",
          criterion: "着いた音が高すぎるか低すぎるかを、響きで少し直せる。",
          category: "音程確認",
          important: false,
          practiceWhenAlmost: ["移動先の音を長く伸ばして響きを聞く", "開放弦を先に鳴らしてから移動する"],
          practiceWhenNotYet: ["移動せず、着地点の音だけを確認する", "先生に一緒に響きを聞いてもらう"],
          teacherFocus: "移動後の長い音を録音して先生に聞いてもらいましょう。"
        },
        {
          id: "shift-05",
          text: "移動の音をごまかすために、ビブラートで揺らしていませんか？",
          criterion: "音程が曖昧なまま揺らさず、まず止まった音として確認できる。",
          category: "音程確認",
          important: true,
          practiceWhenAlmost: ["ビブラートなしで移動先の音を2秒伸ばす", "揺らす前に音程を確認する"],
          practiceWhenNotYet: ["ビブラートを使わず、移動だけを練習する", "着いた音を先生に聞いてもらう"],
          teacherFocus: "ビブラートなしの移動音を先生に聞いてもらいましょう。"
        },
        {
          id: "shift-06",
          text: "音を出さずに、移動だけを静かに練習できますか？",
          criterion: "弓でごまかさず、左手の動きだけをゆっくり確認できる。",
          category: "準備練習",
          important: false,
          practiceWhenAlmost: ["音を出さずに3回動いてから1回弾く", "鏡で手の形を見ながら動く"],
          practiceWhenNotYet: ["楽器を構えたまま指を置かずに手だけ動かす", "移動距離を短くして試す"],
          teacherFocus: "音なしの移動を先生に見せ、手の通り道を確認してもらいましょう。"
        },
        {
          id: "shift-07",
          text: "移動する前に、次の指の形を準備できますか？",
          criterion: "移動してから慌てて指を探すのではなく、着く形を先に考えられる。",
          category: "準備",
          important: false,
          practiceWhenAlmost: ["移動前に指番号を声に出す", "着いた場所で指を置く前に1秒止まる"],
          practiceWhenNotYet: ["移動先の形だけを先に作る", "使う指を1つに減らす"],
          teacherFocus: "移動前に何を準備するか先生に説明してみましょう。"
        },
        {
          id: "shift-08",
          text: "第3の場所で、手のひら側の触れる感覚を目印にできますか？",
          criterion: "楽器本体に近づく感覚を使い、毎回大きく行きすぎたり戻りすぎたりしない。",
          category: "目印",
          important: false,
          practiceWhenAlmost: ["第3の場所で一度止まり、触れる感覚を覚える", "目を閉じてゆっくり移動する"],
          practiceWhenNotYet: ["先生に触れてよい場所を確認してもらう", "第3の場所に着くだけの練習をする"],
          teacherFocus: "第3の場所でどこが触れているか先生に確認してもらいましょう。"
        },
        {
          id: "shift-09",
          text: "移動の前後で、弓の音が急に乱れませんか？",
          criterion: "左手が動いても弓を押し込まず、音色が大きく荒れない。",
          category: "両手",
          important: false,
          practiceWhenAlmost: ["移動前後を小さい音で弾く", "弓を短くして左手の移動に集中する"],
          practiceWhenNotYet: ["左手だけで移動し、あとから弓を加える", "開放弦で同じ弓の動きを練習する"],
          teacherFocus: "移動の瞬間の音色を録音して先生に聞いてもらいましょう。"
        },
        {
          id: "shift-10",
          text: "移動したあと、音が外れたら止まって直せますか？",
          criterion: "外れたまま進まず、着地点を少し上げ下げして確認できる。",
          category: "修正",
          important: false,
          practiceWhenAlmost: ["外れたら1回止まり、指を少し動かして直す", "移動後の音を長く伸ばす"],
          practiceWhenNotYet: ["移動先だけを先に練習する", "先生に高いか低いかを聞いてもらう"],
          teacherFocus: "外れた音を直す過程を先生に見せましょう。"
        },
        {
          id: "shift-11",
          text: "短いフレーズの中で、第1と第3の場所を行き来できますか？",
          criterion: "単発の移動だけでなく、短い音の並びの中で戻ってこられる。",
          category: "曲への入口",
          important: false,
          practiceWhenAlmost: ["2小節だけを選んで移動を練習する", "行きと戻りを別々に練習する"],
          practiceWhenNotYet: ["移動がある音だけを抜き出す", "リズムをなくして音だけで練習する"],
          teacherFocus: "行きはできるか、戻りで崩れるかを先生に見てもらいましょう。"
        },
        {
          id: "shift-12",
          text: "移動が怖くて、音が小さくなりすぎていませんか？",
          criterion: "不安な場所でも弓が止まりすぎず、音を聞きながら移動できる。",
          category: "心理",
          important: false,
          practiceWhenAlmost: ["移動だけをゆっくり大きめの音で弾く", "成功した速さまでテンポを落とす"],
          practiceWhenNotYet: ["音を出さずに動きだけ慣れる", "移動距離を短くして成功回数を増やす"],
          teacherFocus: "怖くなる場所を先生に伝え、準備の仕方を決めましょう。"
        }
      ]
    },
    {
      id: "shift-music",
      order: 6,
      name: "位置移動を曲で使う",
      purpose: "中級曲の中で位置移動を使い、音楽として扱う段階です。",
      nextGuide: "80点以上。ただし音程をごまかす癖がある場合は、先に直しましょう。",
      defaultPractice: [
        "移動がある2小節だけを選び、着地点を先に歌う",
        "聞かせる移動と目立たせない移動を同じ音で比べる",
        "自分で決めた指づかいを楽譜に書き、理由を説明する"
      ],
      questions: [
        {
          id: "shiftmusic-01",
          text: "第1から第3、第1から第5へ、曲の中で移動できますか？",
          criterion: "移動だけならできる状態から進み、フレーズの流れの中でも使える。",
          category: "ポジション移動",
          important: false,
          practiceWhenAlmost: ["移動がある2小節だけを遅く弾く", "第1から第3だけ、第1から第5だけに分ける"],
          practiceWhenNotYet: ["曲から離れて同じ指の移動だけ練習する", "着地点の音だけを先に確認する"],
          teacherFocus: "曲の中で移動が崩れる場所を先生に見せましょう。"
        },
        {
          id: "shiftmusic-02",
          text: "移動の音を「聞かせる」「目立たせない」で使い分けられますか？",
          criterion: "すべて同じ移動音にならず、曲の感じに合わせて変えようとできる。",
          category: "表現",
          important: false,
          practiceWhenAlmost: ["同じ移動を、聞かせる弾き方と静かな弾き方で比べる", "移動音を短くする場所を1つ決める"],
          practiceWhenNotYet: ["まず音程を止めて確認する", "先生の弾き方を聞いてまねる"],
          teacherFocus: "2種類の移動音を録音して先生に聞いてもらいましょう。"
        },
        {
          id: "shiftmusic-03",
          text: "新しい曲を見たとき、自分で指づかいを考えられますか？",
          criterion: "全部を先生任せにせず、弾きやすさや音色を考えて候補を出せる。",
          category: "指づかい",
          important: false,
          practiceWhenAlmost: ["移動が必要そうな場所に印をつける", "2通りの指づかいを試して比べる"],
          practiceWhenNotYet: ["先生が書いた指づかいの理由を聞く", "1小節だけ自分で候補を考える"],
          teacherFocus: "自分で考えた指づかいと迷った理由を先生に見せましょう。"
        },
        {
          id: "shiftmusic-04",
          text: "位置移動がある初見の楽譜を、怖がらずに読めますか？",
          criterion: "完璧でなくても、移動があると分かった時点で止まりすぎず試せる。",
          category: "初見",
          important: false,
          practiceWhenAlmost: ["移動がある場所だけ先に探す", "テンポを落として最後まで進む"],
          practiceWhenNotYet: ["音を出さずに左手の場所だけ読む", "1段だけ初見で試す"],
          teacherFocus: "初見で怖くなる記号や音域を先生に確認しましょう。"
        },
        {
          id: "shiftmusic-05",
          text: "バッハやモーツァルトの中級曲で、移動を音楽として使えますか？",
          criterion: "移動が単なる移動練習で終わらず、フレーズの方向や音色とつながっている。",
          category: "曲",
          important: false,
          practiceWhenAlmost: ["移動の前後を歌ってから弾く", "移動先の音をフレーズの頂点として考える"],
          practiceWhenNotYet: ["移動のある2音だけを取り出す", "曲から離れて同じ音型を練習する"],
          teacherFocus: "移動が音楽的に聞こえるか、先生にフレーズで聞いてもらいましょう。"
        },
        {
          id: "shiftmusic-06",
          text: "移動先の音程が外れたとき、すぐ修正できますか？",
          criterion: "外れたまま弾き進めず、高いか低いかを判断して直せる。",
          category: "修正",
          important: false,
          practiceWhenAlmost: ["移動先の音を2秒伸ばして直す", "外れた場合に指を動かす方向を決める"],
          practiceWhenNotYet: ["着地点の音だけを先に弾く", "録音して高低を先生に確認する"],
          teacherFocus: "修正前と修正後の音を先生に聞いてもらいましょう。"
        },
        {
          id: "shiftmusic-07",
          text: "複数の場所を使っても、左手親指が固まりませんか？",
          criterion: "第3や第5へ行っても親指が置いていかれず、戻るときも力みが残らない。",
          category: "左手親指",
          important: true,
          practiceWhenAlmost: ["移動ごとに親指を軽く動かす", "戻る動きだけをゆっくり練習する"],
          practiceWhenNotYet: ["音を出さず、親指の移動だけ確認する", "先生に親指の通り道を見てもらう"],
          teacherFocus: "複数の場所を移動する左手親指を先生に見せましょう。"
        },
        {
          id: "shiftmusic-08",
          text: "高い場所でも、弓を強く押し込みすぎていませんか？",
          criterion: "左手が高い場所に行っても、右手が不安で硬くなりすぎない。",
          category: "両手",
          important: true,
          practiceWhenAlmost: ["高い場所を小さい音で弾く", "弓の速さを一定にして移動する"],
          practiceWhenNotYet: ["左手なしで同じ弓だけ練習する", "高い場所の音だけを軽く弾く"],
          teacherFocus: "高い場所で音が硬くなる瞬間を先生に聞いてもらいましょう。"
        },
        {
          id: "shiftmusic-09",
          text: "音程をビブラートでごまかさず、まず止まった音で確認できますか？",
          criterion: "揺らす前に中心の音程を確認し、外れた音を広く揺らして隠さない。",
          category: "音程確認",
          important: true,
          practiceWhenAlmost: ["ビブラートなしで移動先を2秒伸ばす", "揺らす前にチューナーではなく耳で確認する"],
          practiceWhenNotYet: ["ビブラートを外して移動だけ練習する", "先生に中心の音程を聞いてもらう"],
          teacherFocus: "ビブラートなしの音程確認を先生に聞いてもらいましょう。"
        },
        {
          id: "shiftmusic-10",
          text: "移動を含むフレーズでも、拍の流れを保てますか？",
          criterion: "移動の直前だけ極端に遅くならず、拍の中で準備できる。",
          category: "テンポ",
          important: false,
          practiceWhenAlmost: ["メトロノームを遅くして移動だけ合わせる", "移動前の拍を声に出す"],
          practiceWhenNotYet: ["リズムをなくして音だけ確認する", "移動の前後1拍だけを取り出す"],
          teacherFocus: "移動前にテンポが崩れる場所を先生に見せましょう。"
        },
        {
          id: "shiftmusic-11",
          text: "曲の中で、あえて同じ弦に残る指づかいを選べますか？",
          criterion: "音色やつながりを考え、開放弦に逃げるだけでなく選択できる。",
          category: "指づかい",
          important: false,
          practiceWhenAlmost: ["開放弦を使う場合と使わない場合を比べる", "同じ弦に残る理由を1つ書く"],
          practiceWhenNotYet: ["先生の指づかいを写して理由を聞く", "2小節だけ同じ弦で弾く選択を試す"],
          teacherFocus: "開放弦を使うか迷う場所を先生に相談しましょう。"
        },
        {
          id: "shiftmusic-12",
          text: "自分の録音を聞いて、移動の問題を1つ言えますか？",
          criterion: "音程、移動音、テンポ、音色のどれが問題かを少し分けられる。",
          category: "振り返り",
          important: false,
          practiceWhenAlmost: ["録音を1回だけ聞き、気になる場所を1つメモする", "問題を音程か弓かに分ける"],
          practiceWhenNotYet: ["先生と一緒に録音を聞く", "移動のある2小節だけ録音する"],
          teacherFocus: "自分で選んだ問題点を先生に伝え、確認してもらいましょう。"
        }
      ]
    }
  ]
};
