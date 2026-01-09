// 問題データベース
const questionDatabase = [
    // === 倫理：古代ギリシア思想 (15問) ===
    {
        id: 1,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ソクラテスが重視した「無知の知」の意味として最も適切なものはどれか？",
        choices: [
            "自分が何も知らないことを知っている",
            "知識を持たないことが美徳である",
            "知識は不要である",
            "他人の無知を指摘すること"
        ],
        correctIndex: 0,
        explanation: "「無知の知」とは、自分が本当は何も知らないということを自覚することです。ソクラテスは、真の知恵とは自分の無知を知ることから始まると考えました。"
    },
    {
        id: 2,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "プラトンのイデア論について正しい説明はどれか？",
        choices: [
            "現実の世界が真の実在であり、イデアは幻想である",
            "イデアは完全な真実の世界であり、現実は影にすぎない",
            "イデアと現実は同一である",
            "イデアは人間が作り出した概念である"
        ],
        correctIndex: 1,
        explanation: "プラトンのイデア論では、現実世界は不完全な影であり、イデア界こそが真の実在とされます。洞窟の比喩で有名です。"
    },
    {
        id: 3,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "アリストテレスが説いた「中庸」の徳とは何か？",
        choices: [
            "常に極端を避けること",
            "過度と不足の間の適度な状態",
            "平均的であること",
            "何事も控えめにすること"
        ],
        correctIndex: 1,
        explanation: "アリストテレスの中庸の徳は、過度と不足の両極端を避け、状況に応じた適度な状態を保つことを意味します。"
    },
    {
        id: 4,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ストア派の基本思想として正しいものはどれか？",
        choices: [
            "快楽を追求すべきである",
            "運命に従い、感情に動じない心を保つ",
            "知識を最も重視する",
            "神の存在を否定する"
        ],
        correctIndex: 1,
        explanation: "ストア派は、運命を受け入れ、感情に左右されない不動心（アパテイア）を理想としました。"
    },
    {
        id: 5,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "エピクロス派が説く「快楽」の本質は何か？",
        choices: [
            "肉体的快楽を最大限追求すること",
            "心の平静（アタラクシア）を得ること",
            "富と名声を得ること",
            "権力を手にすること"
        ],
        correctIndex: 1,
        explanation: "エピクロス派の快楽は、肉体的快楽ではなく、心の平静（アタラクシア）を意味します。"
    },
    {
        id: 6,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ソクラテスの対話法（問答法）の目的は何か？",
        choices: [
            "相手を論破すること",
            "知識を教え込むこと",
            "相手自身に真理を発見させること",
            "議論に勝つこと"
        ],
        correctIndex: 2,
        explanation: "ソクラテスの対話法は、相手に質問を重ねることで、相手自身が真理に気づくよう導く方法です。"
    },
    {
        id: 7,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "プラトンが理想とした国家の統治者は誰か？",
        choices: [
            "民衆",
            "哲学者",
            "軍人",
            "商人"
        ],
        correctIndex: 1,
        explanation: "プラトンは『国家』で、哲人王（哲学者による統治）を理想としました。"
    },
    {
        id: 8,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "アリストテレスが人間の本質として説いたものは何か？",
        choices: [
            "理性的動物",
            "政治的動物",
            "社会的動物",
            "経済的動物"
        ],
        correctIndex: 1,
        explanation: "アリストテレスは人間を「ポリス的動物（政治的動物）」と定義し、共同体の中で生きる存在としました。"
    },
    {
        id: 9,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ソフィストの特徴として正しいものはどれか？",
        choices: [
            "絶対的真理を追求した",
            "弁論術を教え、相対主義的立場を取った",
            "無償で教育を行った",
            "プラトンの師である"
        ],
        correctIndex: 1,
        explanation: "ソフィストは報酬を得て弁論術を教え、「人間は万物の尺度」という相対主義的立場を取りました。"
    },
    {
        id: 10,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "プラトンの「魂の三分説」で理性が支配すべきとした理由は？",
        choices: [
            "理性が最も強力だから",
            "理性が真理を認識できるから",
            "理性が快楽をもたらすから",
            "理性が本能だから"
        ],
        correctIndex: 1,
        explanation: "プラトンは、理性・気概・欲望の三つからなる魂において、理性がイデアを認識できるため支配すべきとしました。"
    },
    {
        id: 11,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "アリストテレスの「エウダイモニア」とは何を意味するか？",
        choices: [
            "快楽",
            "幸福・至福",
            "名誉",
            "富"
        ],
        correctIndex: 1,
        explanation: "エウダイモニアは「幸福」や「至福」を意味し、アリストテレスは理性的活動による幸福を最高善としました。"
    },
    {
        id: 12,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ピタゴラス派が重視したものは何か？",
        choices: [
            "数と調和",
            "物質",
            "権力",
            "快楽"
        ],
        correctIndex: 0,
        explanation: "ピタゴラス派は、万物の根源は数であるとし、数学的調和を重視しました。"
    },
    {
        id: 13,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "ヘラクレイトスの「万物は流転する」の意味は？",
        choices: [
            "すべては変化し続ける",
            "すべては不変である",
            "すべては消滅する",
            "すべては循環する"
        ],
        correctIndex: 0,
        explanation: "ヘラクレイトスは「同じ川に二度入ることはできない」と述べ、万物の絶え間ない変化を説きました。"
    },
    {
        id: 14,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "デモクリトスが提唱した原子論の特徴は？",
        choices: [
            "万物は分割不可能な原子からなる",
            "万物は水からなる",
            "万物は火からなる",
            "万物は精神からなる"
        ],
        correctIndex: 0,
        explanation: "デモクリトスは、万物は不可分の原子（アトム）と空虚から構成されると考えました。"
    },
    {
        id: 15,
        category: "ethics",
        subcategory: "古代ギリシア思想",
        question: "キュニコス派（犬儒派）の代表的人物と思想は？",
        choices: [
            "ディオゲネス、自然に従い欲望を最小限にする",
            "エピクロス、快楽を追求する",
            "ゼノン、運命に従う",
            "プラトン、イデアを追求する"
        ],
        correctIndex: 0,
        explanation: "ディオゲネスに代表されるキュニコス派は、社会的慣習を拒否し、自然に従い欲望を最小限にする生活を説きました。"
    },

    // === 倫理：中国思想 (10問) ===
    {
        id: 16,
        category: "ethics",
        subcategory: "中国思想",
        question: "孔子が最も重視した徳目は何か？",
        choices: [
            "仁（思いやり）",
            "義（正しさ）",
            "礼（礼儀）",
            "智（知恵）"
        ],
        correctIndex: 0,
        explanation: "孔子は「仁」を最高の徳目とし、他者への思いやりと愛を重視しました。"
    },
    {
        id: 17,
        category: "ethics",
        subcategory: "中国思想",
        question: "孟子の性善説の内容として正しいものは？",
        choices: [
            "人間の本性は悪である",
            "人間の本性は善であり、後天的に悪化する",
            "人間の本性は中立である",
            "人間に本性は存在しない"
        ],
        correctIndex: 1,
        explanation: "孟子は、人間の本性は生まれつき善であり、環境によって悪化すると説きました。"
    },
    {
        id: 18,
        category: "ethics",
        subcategory: "中国思想",
        question: "荀子の性悪説の主張として正しいものは？",
        choices: [
            "人間は生まれつき善である",
            "人間は生まれつき悪であり、礼によって矯正される",
            "人間の本性は変わらない",
            "人間に善悪はない"
        ],
        correctIndex: 1,
        explanation: "荀子は、人間の本性は悪であるが、教育と礼によって善に導かれると考えました。"
    },
    {
        id: 19,
        category: "ethics",
        subcategory: "中国思想",
        question: "老子の思想の中心概念は何か？",
        choices: [
            "仁",
            "道（タオ）",
            "法",
            "礼"
        ],
        correctIndex: 1,
        explanation: "老子は「道（タオ）」を万物の根源とし、自然に従う無為自然の生き方を説きました。"
    },
    {
        id: 20,
        category: "ethics",
        subcategory: "中国思想",
        question: "荘子の「万物斉同」の意味は？",
        choices: [
            "すべてのものは平等である",
            "すべてのものに優劣がある",
            "すべてのものは異なる",
            "すべてのものは無価値である"
        ],
        correctIndex: 0,
        explanation: "荘子は、あらゆる価値判断や区別を超えて、万物は本質的に平等であると説きました。"
    },
    {
        id: 21,
        category: "ethics",
        subcategory: "中国思想",
        question: "墨子が説いた「兼愛」とは何か？",
        choices: [
            "親族だけを愛すること",
            "すべての人を平等に愛すること",
            "自分だけを愛すること",
            "愛さないこと"
        ],
        correctIndex: 1,
        explanation: "墨子は、差別のない平等な愛である「兼愛」を主張し、儒家の親族中心主義を批判しました。"
    },
    {
        id: 22,
        category: "ethics",
        subcategory: "中国思想",
        question: "韓非子が主張した法家思想の特徴は？",
        choices: [
            "道徳による統治",
            "厳格な法による統治",
            "無為自然",
            "兼愛"
        ],
        correctIndex: 1,
        explanation: "韓非子は、明確な法と刑罰による統治を主張し、儒家の徳治主義を批判しました。"
    },
    {
        id: 23,
        category: "ethics",
        subcategory: "中国思想",
        question: "朱子（朱熹）の理気二元論において「理」とは何か？",
        choices: [
            "物質的要素",
            "万物の根本原理",
            "感情",
            "欲望"
        ],
        correctIndex: 1,
        explanation: "朱子学では「理」は万物の根本原理・法則であり、「気」は物質的要素とされます。"
    },
    {
        id: 24,
        category: "ethics",
        subcategory: "中国思想",
        question: "王陽明の「知行合一」の意味は？",
        choices: [
            "知識と行動は別物である",
            "知識と行動は一体である",
            "知識より行動が重要である",
            "行動より知識が重要である"
        ],
        correctIndex: 1,
        explanation: "王陽明は、真の知識は必ず実践を伴うとし、知識と行動は一体不可分であると説きました。"
    },
    {
        id: 25,
        category: "ethics",
        subcategory: "中国思想",
        question: "孔子の「君子」と「小人」の違いは何か？",
        choices: [
            "身分の違い",
            "徳の有無の違い",
            "知識量の違い",
            "財産の違い"
        ],
        correctIndex: 1,
        explanation: "孔子において君子は徳のある人、小人は徳のない人を指し、身分とは無関係です。"
    },

    // === 倫理：近代思想 (15問) ===
    {
        id: 26,
        category: "ethics",
        subcategory: "近代思想",
        question: "カントの「定言命法」とは何か？",
        choices: [
            "条件付きの道徳命令",
            "無条件に従うべき道徳法則",
            "状況に応じて変わる命令",
            "快楽を求める命令"
        ],
        correctIndex: 1,
        explanation: "カントの定言命法は、いかなる条件にも依存せず、無条件に従うべき道徳法則です。"
    },
    {
        id: 27,
        category: "ethics",
        subcategory: "近代思想",
        question: "ロックの社会契約論の特徴は？",
        choices: [
            "絶対王政を支持する",
            "自然権を守るために政府を作る",
            "民主主義を否定する",
            "革命を禁止する"
        ],
        correctIndex: 1,
        explanation: "ロックは、生命・自由・財産の自然権を守るために人々が契約して政府を作ると説きました。"
    },
    {
        id: 28,
        category: "ethics",
        subcategory: "近代思想",
        question: "ルソーの「一般意志」とは何か？",
        choices: [
            "個人の意志の総和",
            "共同体全体の利益を目指す意志",
            "支配者の意志",
            "多数決の結果"
        ],
        correctIndex: 1,
        explanation: "ルソーの一般意志は、共同体全体の共通利益を目指す意志であり、単なる個人意志の総和ではありません。"
    },
    {
        id: 29,
        category: "ethics",
        subcategory: "近代思想",
        question: "デカルトの「我思う、ゆえに我あり」の意味は？",
        choices: [
            "思考することで存在が証明される",
            "存在することで思考できる",
            "思考は不要である",
            "存在は疑わしい"
        ],
        correctIndex: 0,
        explanation: "デカルトは、すべてを疑っても疑っている自分の存在だけは疑えないとしました。"
    },
    {
        id: 30,
        category: "ethics",
        subcategory: "近代思想",
        question: "ベンサムの功利主義の原理は？",
        choices: [
            "最大多数の最小幸福",
            "最大多数の最大幸福",
            "少数の最大幸福",
            "個人の幸福のみ"
        ],
        correctIndex: 1,
        explanation: "ベンサムは「最大多数の最大幸福」を道徳の基準としました。"
    },
    {
        id: 31,
        category: "ethics",
        subcategory: "近代思想",
        question: "ミルが区別した快楽の種類は？",
        choices: [
            "肉体的快楽のみ",
            "精神的快楽のみ",
            "質の高い快楽と質の低い快楽",
            "すべての快楽は同じ"
        ],
        correctIndex: 2,
        explanation: "ミルは快楽に質的な違いがあり、精神的快楽の方が肉体的快楽より優れているとしました。"
    },
    {
        id: 32,
        category: "ethics",
        subcategory: "近代思想",
        question: "ホッブズの自然状態の特徴は？",
        choices: [
            "平和で協調的",
            "万人の万人に対する闘争",
            "理想的な状態",
            "政府が存在する"
        ],
        correctIndex: 1,
        explanation: "ホッブズは自然状態を「万人の万人に対する闘争」と表現し、社会契約の必要性を説きました。"
    },
    {
        id: 33,
        category: "ethics",
        subcategory: "近代思想",
        question: "スピノザの「神即自然」の意味は？",
        choices: [
            "神と自然は別物である",
            "神と自然は同一である",
            "神は自然を超越する",
            "自然に神は存在しない"
        ],
        correctIndex: 1,
        explanation: "スピノザは、神と自然を同一視し、すべては一つの実体の異なる現れとしました。"
    },
    {
        id: 34,
        category: "ethics",
        subcategory: "近代思想",
        question: "ヒュームの経験論の特徴は？",
        choices: [
            "生得観念を重視する",
            "すべての知識は経験に由来する",
            "理性のみで真理に到達できる",
            "経験は不要である"
        ],
        correctIndex: 1,
        explanation: "ヒュームは、人間の知識はすべて感覚経験から得られるとする経験論を展開しました。"
    },
    {
        id: 35,
        category: "ethics",
        subcategory: "近代思想",
        question: "カントの「人間は目的それ自体」の意味は？",
        choices: [
            "人間を手段として扱ってよい",
            "人間を決して単なる手段として扱ってはならない",
            "人間は道具である",
            "目的は人間以外にある"
        ],
        correctIndex: 1,
        explanation: "カントは、人間の尊厳を重視し、人間を単なる手段ではなく目的として扱うべきだとしました。"
    },
    {
        id: 36,
        category: "ethics",
        subcategory: "近代思想",
        question: "ベーコンの「知は力なり」の意味は？",
        choices: [
            "知識は権力である",
            "知識は自然を支配する力となる",
            "知識は無力である",
            "力は知識より重要である"
        ],
        correctIndex: 1,
        explanation: "ベーコンは、科学的知識によって自然を支配し、人間生活を改善できると考えました。"
    },
    {
        id: 37,
        category: "ethics",
        subcategory: "近代思想",
        question: "パスカルの「人間は考える葦」の意味は？",
        choices: [
            "人間は弱いだけである",
            "人間は強いだけである",
            "人間は弱いが思考によって尊厳を持つ",
            "人間は考える必要がない"
        ],
        correctIndex: 2,
        explanation: "パスカルは、人間は自然界では弱い存在だが、思考する能力によって尊厳を持つとしました。"
    },
    {
        id: 38,
        category: "ethics",
        subcategory: "近代思想",
        question: "モンテスキューが提唱した権力分立の目的は？",
        choices: [
            "権力を集中させる",
            "専制を防ぎ自由を守る",
            "王権を強化する",
            "民主主義を否定する"
        ],
        correctIndex: 1,
        explanation: "モンテスキューは、立法・行政・司法の三権を分立させることで専制を防ぐと考えました。"
    },
    {
        id: 39,
        category: "ethics",
        subcategory: "近代思想",
        question: "アダム・スミスの「見えざる手」とは？",
        choices: [
            "政府の経済統制",
            "市場の自動調節機能",
            "神の介入",
            "労働者の団結"
        ],
        correctIndex: 1,
        explanation: "アダム・スミスは、個人が自己利益を追求することで、市場が自動的に調整されると説きました。"
    },
    {
        id: 40,
        category: "ethics",
        subcategory: "近代思想",
        question: "ライプニッツの「予定調和」の考え方は？",
        choices: [
            "世界は偶然に支配される",
            "神が世界を調和するように創造した",
            "世界に調和はない",
            "人間が世界を調和させる"
        ],
        correctIndex: 1,
        explanation: "ライプニッツは、神が予め世界を最善の形で調和するように創造したと考えました。"
    }
];
