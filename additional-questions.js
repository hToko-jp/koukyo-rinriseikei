// 追加の問題データベース（政治・経済・国際社会）
// このファイルをquestions.jsにマージしてください

const additionalQuestions = [
    // === 倫理：現代思想 (10問) ===
    { id: 41, category: "ethics", subcategory: "現代思想", question: "ニーチェの「神は死んだ」の意味は？", choices: ["神が実際に死んだ", "絶対的価値観が失われた時代", "宗教を否定する", "無神論を主張する"], correctIndex: 1, explanation: "ニーチェは、絶対的な価値基準が失われた近代を「神は死んだ」と表現しました。" },
    { id: 42, category: "ethics", subcategory: "現代思想", question: "ニーチェが説いた「超人」とは？", choices: ["肉体的に強い人", "新しい価値を創造する人", "権力者", "知識人"], correctIndex: 1, explanation: "超人とは、既存の価値観を超えて自ら新しい価値を創造する人間のことです。" },
    { id: 43, category: "ethics", subcategory: "現代思想", question: "キルケゴールが重視した生き方は？", choices: ["美的実存", "倫理的実存", "宗教的実存", "政治的実存"], correctIndex: 2, explanation: "キルケゴールは、神の前に立つ単独者としての宗教的実存を最高の段階としました。" },
    { id: 44, category: "ethics", subcategory: "現代思想", question: "サルトルの「実存は本質に先立つ」の意味は？", choices: ["本質が先に存在する", "人間は自由に自己を形成する", "運命は決まっている", "本質は存在しない"], correctIndex: 1, explanation: "サルトルは、人間には予め決まった本質はなく、自由な選択によって自己を形成すると説きました。" },
    { id: 45, category: "ethics", subcategory: "現代思想", question: "ハイデガーの「世界内存在」とは？", choices: ["世界から独立した存在", "世界と関わりながら存在する人間", "世界を支配する存在", "世界を観察する存在"], correctIndex: 1, explanation: "ハイデガーは、人間を世界と切り離せない「世界内存在」として捉えました。" },
    { id: 46, category: "ethics", subcategory: "現代思想", question: "マルクスの唯物史観の特徴は？", choices: ["精神が歴史を動かす", "経済的土台が上部構造を規定する", "歴史は偶然である", "個人の意志が重要"], correctIndex: 1, explanation: "マルクスは、経済的な生産関係（下部構造）が政治・思想（上部構造）を規定すると考えました。" },
    { id: 47, category: "ethics", subcategory: "現代思想", question: "プラグマティズムの基本思想は？", choices: ["観念を重視する", "実際的な結果で真理を判断する", "理論のみを重視する", "伝統を守る"], correctIndex: 1, explanation: "プラグマティズムは、思想や理論の真理性を実際的な有用性や結果で判断します。" },
    { id: 48, category: "ethics", subcategory: "現代思想", question: "フロイトの精神分析における無意識の役割は？", choices: ["意識的な思考のみが重要", "無意識が人間の行動に大きく影響する", "無意識は存在しない", "無意識は制御可能"], correctIndex: 1, explanation: "フロイトは、意識されない無意識的な欲求や葛藤が人間の行動に大きく影響すると考えました。" },
    { id: 49, category: "ethics", subcategory: "現代思想", question: "レヴィナスが重視した倫理の根源は？", choices: ["自己の確立", "他者の顔", "理性", "快楽"], correctIndex: 1, explanation: "レヴィナスは、他者の顔との出会いが倫理の根源であり、他者への無限の責任を説きました。" },
    { id: 50, category: "ethics", subcategory: "現代思想", question: "フーコーが分析した権力の特徴は？", choices: ["国家のみが持つ", "あらゆる関係に遍在する", "目に見える力", "暴力的なもの"], correctIndex: 1, explanation: "フーコーは、権力は国家だけでなく、知識や言説を通じてあらゆる社会関係に遍在すると分析しました。" }
];

// questions.jsの配列に追加する方法：
// questionDatabase = questionDatabase.concat(additionalQuestions);
