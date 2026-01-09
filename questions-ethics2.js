// 倫理分野の問題（現代思想・日本思想）
const ethicsQuestions2 = [
    { id: 41, category: "ethics", subcategory: "現代思想", question: "ニーチェの「神は死んだ」の意味は？", choices: ["神が実際に死んだ", "絶対的価値観が失われた時代", "宗教を否定する", "無神論を主張する"], correctIndex: 1, explanation: "ニーチェは、絶対的な価値基準が失われた近代を「神は死んだ」と表現しました。" },
    { id: 42, category: "ethics", subcategory: "現代思想", question: "ニーチェが説いた「超人」とは？", choices: ["肉体的に強い人", "新しい価値を創造する人", "権力者", "知識人"], correctIndex: 1, explanation: "超人とは、既存の価値観を超えて自ら新しい価値を創造する人間のことです。" },
    { id: 43, category: "ethics", subcategory: "現代思想", question: "キルケゴールが重視した生き方は？", choices: ["美的実存", "倫理的実存", "宗教的実存", "政治的実存"], correctIndex: 2, explanation: "キルケゴールは、神の前に立つ単独者としての宗教的実存を最高の段階としました。" },
    { id: 44, category: "ethics", subcategory: "現代思想", question: "サルトルの「実存は本質に先立つ」の意味は？", choices: ["本質が先に存在する", "人間は自由に自己を形成する", "運命は決まっている", "本質は存在しない"], correctIndex: 1, explanation: "サルトルは、人間には予め決まった本質はなく、自由な選択によって自己を形成すると説きました。" },
    { id: 45, category: "ethics", subcategory: "現代思想", question: "ハイデガーの「世界内存在」とは？", choices: ["世界から独立した存在", "世界と関わりながら存在する人間", "世界を支配する存在", "世界を観察する存在"], correctIndex: 1, explanation: "ハイデガーは、人間を世界と切り離せない「世界内存在」として捉えました。" },
    { id: 46, category: "ethics", subcategory: "現代思想", question: "マルクスの唯物史観の特徴は？", choices: ["精神が歴史を動かす", "経済的土台が上部構造を規定する", "歴史は偶然である", "個人の意志が重要"], correctIndex: 1, explanation: "マルクスは、経済的な生産関係（下部構造）が政治・思想（上部構造）を規定すると考えました。" },
    { id: 47, category: "ethics", subcategory: "現代思想", question: "プラグマティズムの基本思想は？", choices: ["観念を重視する", "実際的な結果で真理を判断する", "理論のみを重視する", "伝統を守る"], correctIndex: 1, explanation: "プラグマティズムは、思想や理論の真理性を実際的な有用性や結果で判断します。" },
    { id: 48, category: "ethics", subcategory: "現代思想", question: "フロイトの無意識の役割は？", choices: ["意識的な思考のみが重要", "無意識が人間の行動に大きく影響する", "無意識は存在しない", "無意識は制御可能"], correctIndex: 1, explanation: "フロイトは、意識されない無意識的な欲求が人間の行動に大きく影響すると考えました。" },
    { id: 49, category: "ethics", subcategory: "現代思想", question: "レヴィナスが重視した倫理の根源は？", choices: ["自己の確立", "他者の顔", "理性", "快楽"], correctIndex: 1, explanation: "レヴィナスは、他者の顔との出会いが倫理の根源であり、他者への無限の責任を説きました。" },
    { id: 50, category: "ethics", subcategory: "現代思想", question: "フーコーが分析した権力の特徴は？", choices: ["国家のみが持つ", "あらゆる関係に遍在する", "目に見える力", "暴力的なもの"], correctIndex: 1, explanation: "フーコーは、権力は知識や言説を通じてあらゆる社会関係に遍在すると分析しました。" },
    { id: 51, category: "ethics", subcategory: "日本思想", question: "聖徳太子の十七条憲法で重視されたものは？", choices: ["武力", "和（調和）", "競争", "個人主義"], correctIndex: 1, explanation: "十七条憲法の第一条「和を以て貴しと為す」は、調和を重視する日本思想の基礎となりました。" },
    { id: 52, category: "ethics", subcategory: "日本思想", question: "最澄が開いた仏教の宗派は？", choices: ["真言宗", "天台宗", "浄土宗", "禅宗"], correctIndex: 1, explanation: "最澄は比叡山延暦寺を開き、天台宗を日本に広めました。" },
    { id: 53, category: "ethics", subcategory: "日本思想", question: "空海が開いた仏教の宗派は？", choices: ["天台宗", "真言宗", "浄土宗", "日蓮宗"], correctIndex: 1, explanation: "空海は高野山金剛峯寺を開き、真言宗（密教）を日本に広めました。" },
    { id: 54, category: "ethics", subcategory: "日本思想", question: "法然が説いた浄土宗の教えは？", choices: ["座禅", "念仏", "題目", "加持祈祷"], correctIndex: 1, explanation: "法然は「南無阿弥陀仏」の念仏を唱えることで誰でも救われる専修念仏を説きました。" },
    { id: 55, category: "ethics", subcategory: "日本思想", question: "親鸞の教えの特徴は？", choices: ["自力本願", "他力本願", "座禅", "加持祈祷"], correctIndex: 1, explanation: "親鸞は、阿弥陀仏の本願力による救済（他力本願）を強調し、悪人正機説を説きました。" },
    { id: 56, category: "ethics", subcategory: "日本思想", question: "道元が重視した修行法は？", choices: ["念仏", "題目", "只管打坐（座禅）", "祈祷"], correctIndex: 2, explanation: "道元は曹洞宗を開き、ただひたすら座禅する「只管打坐」を重視しました。" },
    { id: 57, category: "ethics", subcategory: "日本思想", question: "日蓮が唱えた題目は？", choices: ["南無阿弥陀仏", "南無妙法蓮華経", "般若心経", "観音経"], correctIndex: 1, explanation: "日蓮は法華経を最高の経典とし、「南無妙法蓮華経」の題目を唱えることを説きました。" },
    { id: 58, category: "ethics", subcategory: "日本思想", question: "本居宣長が主張した「もののあわれ」とは？", choices: ["悲しみのみ", "物事に感動する心", "理性的判断", "道徳的教訓"], correctIndex: 1, explanation: "本居宣長は、人間の自然な感情、特に物事に感動する「もののあわれ」を重視しました。" },
    { id: 59, category: "ethics", subcategory: "日本思想", question: "福沢諭吉の主張は？", choices: ["儒教の復興", "西洋文明の導入と独立自尊", "鎖国の継続", "武士道の強化"], correctIndex: 1, explanation: "福沢諭吉は『学問のすゝめ』で、西洋の文明を学び、独立自尊の精神を説きました。" },
    { id: 60, category: "ethics", subcategory: "日本思想", question: "和辻哲郎の人間観は？", choices: ["個人が独立した存在", "人間は間柄的存在", "人間は孤独な存在", "人間は理性的存在のみ"], correctIndex: 1, explanation: "和辻哲郎は、人間を他者との関係性の中で成り立つ「間柄的存在」として捉えました。" }
];
