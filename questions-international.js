// 国際社会分野の問題（20問）
const internationalQuestions = [
    { id: 121, category: "international", subcategory: "国際機関", question: "国際連合の主要機関に含まれないものはどれか？", choices: ["総会", "安全保障理事会", "国際司法裁判所", "世界銀行"], correctIndex: 3, explanation: "世界銀行は国連の専門機関であり、主要機関ではありません。" },
    { id: 122, category: "international", subcategory: "国際機関", question: "安全保障理事会の常任理事国の数はいくつか？", choices: ["3", "5", "10", "15"], correctIndex: 1, explanation: "常任理事国は米・英・仏・露・中の5か国です。" },
    { id: 123, category: "international", subcategory: "国際機関", question: "安全保障理事会の拒否権を持つのは誰か？", choices: ["すべての理事国", "常任理事国のみ", "非常任理事国のみ", "事務総長"], correctIndex: 1, explanation: "常任理事国のみが拒否権を持ち、重要事項の決定を阻止できます。" },
    { id: 124, category: "international", subcategory: "国際機関", question: "IMF（国際通貨基金）の主な役割は？", choices: ["国際貿易の促進", "為替の安定と国際収支の調整支援", "環境保護", "労働条件の改善"], correctIndex: 1, explanation: "IMFは為替相場の安定と国際収支の調整を支援する国際機関です。" },
    { id: 125, category: "international", subcategory: "国際機関", question: "WTO（世界貿易機関）の主な目的は？", choices: ["自由貿易の促進", "環境保護", "人権保護", "軍縮"], correctIndex: 0, explanation: "WTOは自由貿易を促進し、貿易紛争を解決する国際機関です。" },
    { id: 126, category: "international", subcategory: "国際機関", question: "ILO（国際労働機関）が目指すものは？", choices: ["環境保護", "労働条件の改善と労働者の権利保護", "貿易の自由化", "軍縮"], correctIndex: 1, explanation: "ILOは労働条件の改善と労働者の権利保護を目的とする国際機関です。" },
    { id: 127, category: "international", subcategory: "国際機関", question: "UNESCO（国連教育科学文化機関）の活動に含まれないものはどれか？", choices: ["世界遺産の登録", "教育支援", "文化交流", " 通貨管理"], correctIndex: 3, explanation: "UNESCOは教育・科学・文化の分野で活動し、通貨管理はIMFの役割です。" },
    { id: 128, category: "international", subcategory: "国際機関", question: "UNHCR（国連難民高等弁務官事務所）の役割は？", choices: ["貿易の促進", "難民の保護と支援", "環境保護", "軍縮"], correctIndex: 1, explanation: "UNHCRは難民の保護と支援を行う国際機関です。" },
    { id: 129, category: "international", subcategory: "国際機関", question: "WHO（世界保健機関）の目的は？", choices: ["世界の健康水準の向上", "貿易の促進", "軍縮", "教育支援"], correctIndex: 0, explanation: "WHOはすべての人々が最高水準の健康を享受できることを目的としています。" },
    { id: 130, category: "international", subcategory: "国際機関", question: "PKO（国連平和維持活動）の原則に含まれないものはどれか？", choices: ["当事者の同意", "中立性", "武力行使の最小化", "強制的な介入"], correctIndex: 3, explanation: "PKOは当事者の同意、中立性、武力行使の最小化を原則とし、強制介入は行いません。" },
    { id: 131, category: "international", subcategory: "環境問題", question: "京都議定書で削減対象となった温室効果ガスに含まれないものはどれか？", choices: ["二酸化炭素", "メタン", "フロン", "窒素"], correctIndex: 3, explanation: "京都議定書では二酸化炭素、メタン、フロンなど6種類の温室効果ガスが対象です。" },
    { id: 132, category: "international", subcategory: "環境問題", question: "パリ協定の目標として正しいものはどれか？", choices: ["平均気温上昇を2度未満に抑える", "二酸化炭素排出を直ちにゼロにする", "すべての原子力発電を停止する", "森林伐採を完全に禁止する"], correctIndex: 0, explanation: "パリ協定は世界の平均気温上昇を産業革命前から2度未満に抑えることを目標としています。" },
    { id: 133, category: "international", subcategory: "環境問題", question: "持続可能な開発目標（SDGs）が採択されたのはいつか？", choices: ["2000年", "2010年", "2015年", "2020年"], correctIndex: 2, explanation: "SDGsは2015年の国連サミットで採択され、2030年までの達成を目指しています。" },
    { id: 134, category: "international", subcategory: "環境問題", question: "オゾン層破壊の主な原因物質は？", choices: ["二酸化炭素", "メタン", "フロン", "窒素酸化物"], correctIndex: 2, explanation: "フロンがオゾン層を破壊する主な原因物質です。" },
    { id: 135, category: "international", subcategory: "環境問題", question: "酸性雨の主な原因は？", choices: ["二酸化炭素", "硫黄酸化物と窒素酸化物", "メタン", "フロン"], correctIndex: 1, explanation: "化石燃料の燃焼で発生する硫黄酸化物と窒素酸化物が酸性雨の主な原因です。" },
    { id: 136, category: "international", subcategory: "環境問題", question: "生物多様性条約の目的に含まれないものはどれか？", choices: ["生物多様性の保全", "持続可能な利用", "遺伝資源の公正な配分", "すべての開発の禁止"], correctIndex: 3, explanation: "生物多様性条約は保全・利用・配分を目的とし、開発の全面禁止ではありません。" },
    { id: 137, category: "international", subcategory: "人権", question: "世界人権宣言が採択されたのはいつか？", choices: ["1945年", "1948年", "1951年", "1956年"], correctIndex: 1, explanation: "世界人権宣言は1948年に国連総会で採択されました。" },
    { id: 138, category: "international", subcategory: "人権", question: "国際人権規約は何つの規約からなるか？", choices: ["1つ", "2つ", "3つ", "4つ"], correctIndex: 1, explanation: "国際人権規約は、社会権規約と自由権規約の2つの規約からなります。" },
    { id: 139, category: "international", subcategory: "人権", question: "子どもの権利条約が定める子どもの権利に含まれないものはどれか？", choices: ["生きる権利", "育つ権利", "守られる権利", "労働する権利"], correctIndex: 3, explanation: "子どもの権利条約は、生きる・育つ・守られる・参加するの4つを柱としています。" },
    { id: 140, category: "international", subcategory: "人権", question: "女性差別撤廃条約の目的は？", choices: ["女性にのみ権利を与える", "男女の完全な平等を実現する", "女性の労働を禁止する", "男性の権利を制限する"], correctIndex: 1, explanation: "女性差別撤廃条約は、あらゆる分野における男女の完全な平等を目指しています。" }
];
