// ===== 問題データベースの統合 =====
// 既存の questions.js (questionDatabase) に他のファイルの問題を統合
let mergedDatabase = [...(typeof questionDatabase !== 'undefined' ? questionDatabase : [])];
if (typeof ethicsQuestions2 !== 'undefined') mergedDatabase = mergedDatabase.concat(ethicsQuestions2);
if (typeof politicsQuestions !== 'undefined') mergedDatabase = mergedDatabase.concat(politicsQuestions);
if (typeof economicsQuestions !== 'undefined') mergedDatabase = mergedDatabase.concat(economicsQuestions);
if (typeof internationalQuestions !== 'undefined') mergedDatabase = mergedDatabase.concat(internationalQuestions);
if (typeof video1Questions !== 'undefined') mergedDatabase = mergedDatabase.concat(video1Questions);
if (typeof video2Questions !== 'undefined') mergedDatabase = mergedDatabase.concat(video2Questions);

// アプリ内では mergedDatabase を使用するように変更
const finalQuestionDatabase = mergedDatabase;

// ===== アプリケーション状態 =====
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let currentStreak = 0;
let maxStreak = 0;
let wrongQuestions = [];
let isAnswered = false;

// ===== ローカルストレージのキー =====
const STORAGE_KEYS = {
    HISTORY: 'koukyou_history',
    STATS: 'koukyou_stats',
    WRONG_QUESTIONS: 'koukyou_wrong',
    PERSONAL_BESTS: 'koukyou_bests',
    RECENT_RECORDS: 'koukyou_records'
};

// ===== 画面切り替え =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== ローカルストレージ管理 =====
function getStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStats() {
    return getStorage(STORAGE_KEYS.STATS) || {
        ethics: { total: 0, correct: 0 },
        politics: { total: 0, correct: 0 },
        economics: { total: 0, correct: 0 },
        international: { total: 0, correct: 0 }
    };
}

function updateStats(category, isCorrect) {
    const stats = getStats();
    if (stats[category]) {
        stats[category].total++;
        if (isCorrect) stats[category].correct++;
        setStorage(STORAGE_KEYS.STATS, stats);
    }
}

function getWrongQuestions() {
    return getStorage(STORAGE_KEYS.WRONG_QUESTIONS) || [];
}

function addWrongQuestion(questionId) {
    let wrong = getWrongQuestions();
    if (!wrong.includes(questionId)) {
        wrong.push(questionId);
        setStorage(STORAGE_KEYS.WRONG_QUESTIONS, wrong);
    }
}

function removeWrongQuestion(questionId) {
    let wrong = getWrongQuestions();
    wrong = wrong.filter(id => id !== questionId);
    setStorage(STORAGE_KEYS.WRONG_QUESTIONS, wrong);
}

// ===== 進捗表示更新 =====
function updateProgress() {
    const stats = getStats();

    // ホーム画面の進捗率更新
    Object.keys(stats).forEach(category => {
        const data = stats[category];
        const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const elem = document.getElementById(`${category}-progress`);
        if (elem) elem.textContent = `${percentage}%`;
    });

    // 全体進捗
    let totalQuestions = 0;
    let totalCorrect = 0;
    Object.values(stats).forEach(data => {
        totalQuestions += data.total;
        totalCorrect += data.correct;
    });
    const overallPercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const overallElem = document.getElementById('all-progress');
    if (overallElem) overallElem.textContent = `${overallPercentage}%`;

    // 復習問題数
    const wrongCount = getWrongQuestions().length;
    const reviewElem = document.getElementById('review-count');
    if (reviewElem) reviewElem.textContent = `${wrongCount}問`;
}

// ===== クイズ開始 =====
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    correctCount = 0;
    currentStreak = 0;
    maxStreak = 0;
    wrongQuestions = [];
    isAnswered = false;

    // 問題を選択
    if (category === 'all') {
        currentQuestions = shuffleArray([...finalQuestionDatabase]).slice(0, 20);
    } else if (category === 'review') {
        const wrongIds = getWrongQuestions();
        currentQuestions = finalQuestionDatabase.filter(q => wrongIds.includes(q.id));
        if (currentQuestions.length === 0) {
            alert('復習する問題がありません！');
            return;
        }
        currentQuestions = shuffleArray(currentQuestions).slice(0, Math.min(20, currentQuestions.length));
    } else {
        currentQuestions = shuffleArray(finalQuestionDatabase.filter(q => q.category === category)).slice(0, 20);
    }

    if (currentQuestions.length === 0) {
        alert('この分野の問題がまだ用意されていません。');
        return;
    }

    showScreen('quiz-screen');
    displayQuestion();
    updateQuizProgress();
}

// ===== 配列シャッフル =====
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ===== 問題表示 =====
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    isAnswered = false;
    const question = currentQuestions[currentQuestionIndex];

    // カテゴリバッジ
    const categoryNames = {
        ethics: '倫理',
        politics: '政治',
        economics: '経済',
        international: '国際'
    };
    document.getElementById('current-category').textContent = categoryNames[question.category] || '';

    // 問題番号
    document.getElementById('question-counter').textContent =
        `${currentQuestionIndex + 1}/${currentQuestions.length}`;

    // 問題文
    document.getElementById('question-text').textContent = question.question;

    // 選択肢
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(button);
    });

    // スコア表示
    document.getElementById('current-score').textContent = `${correctCount}/${currentQuestionIndex}`;
    document.getElementById('streak-count').textContent = `${currentStreak}連続`;

    updateQuizProgress();
}

// ===== 進捗バー更新 =====
function updateQuizProgress() {
    const percentage = (currentQuestionIndex / currentQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = percentage + '%';
}

// ===== 回答選択 =====
function selectAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;

    // 選択肢のボタンを更新
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // 統計更新
    updateStats(question.category, isCorrect);

    if (isCorrect) {
        correctCount++;
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
        removeWrongQuestion(question.id);
    } else {
        currentStreak = 0;
        wrongQuestions.push(question.id);
        addWrongQuestion(question.id);
    }

    // 解説モーダル表示
    setTimeout(() => {
        showExplanation(isCorrect, question);
    }, 500);
}

// ===== 解説モーダル表示 =====
function showExplanation(isCorrect, question) {
    const modal = document.getElementById('explanation-modal');
    const indicator = document.getElementById('result-indicator');
    const icon = document.getElementById('result-icon');
    const text = document.getElementById('result-text');
    const correctAnswer = document.getElementById('correct-answer');
    const explanation = document.getElementById('explanation-text');

    // 正誤表示
    indicator.className = 'result-indicator ' + (isCorrect ? 'correct' : 'incorrect');
    icon.textContent = isCorrect ? '✅' : '❌';
    text.textContent = isCorrect ? '正解！' : '不正解';

    // 正解表示
    correctAnswer.textContent = `正解: ${question.choices[question.correctIndex]}`;

    // 解説
    explanation.textContent = question.explanation;

    modal.classList.add('active');
}

// ===== 次の問題へ =====
function nextQuestion() {
    document.getElementById('explanation-modal').classList.remove('active');
    currentQuestionIndex++;
    displayQuestion();
}

// ===== 結果画面表示 =====
function showResults() {
    const totalQuestions = currentQuestions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const score = calculateScore(correctCount, totalQuestions, maxStreak);

    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
    document.getElementById('max-streak').textContent = `${maxStreak}問`;

    // 自己ベスト確認
    checkPersonalBest(score, correctCount, totalQuestions);

    // 記録を保存
    saveRecord(score, correctCount, totalQuestions);

    showScreen('result-screen');
}

// ===== スコア計算 =====
function calculateScore(correct, total, maxStreak) {
    const baseScore = (correct / total) * 100;
    const streakBonus = maxStreak * 2;
    return Math.round(baseScore + streakBonus);
}

// ===== 自己ベスト確認 =====
function checkPersonalBest(score, correct, total) {
    let bests = getStorage(STORAGE_KEYS.PERSONAL_BESTS) || {
        overall: { score: 0, date: null, correct: 0, total: 0 },
        ethics: { score: 0, date: null },
        politics: { score: 0, date: null },
        economics: { score: 0, date: null },
        international: { score: 0, date: null }
    };

    let isNewBest = false;
    const messageElem = document.getElementById('personal-best-message');

    // 全体のベスト
    if (score > bests.overall.score) {
        bests.overall = { score, date: new Date().toISOString(), correct, total };
        isNewBest = true;
    }

    // 分野別のベスト
    if (currentCategory && currentCategory !== 'all' && currentCategory !== 'review') {
        if (score > (bests[currentCategory]?.score || 0)) {
            bests[currentCategory] = { score, date: new Date().toISOString() };
            isNewBest = true;
        }
    }

    if (isNewBest) {
        messageElem.textContent = '🎉 自己ベストを更新しました！ 🎉';
        messageElem.style.display = 'block';
        setStorage(STORAGE_KEYS.PERSONAL_BESTS, bests);
    } else {
        messageElem.style.display = 'none';
    }
}

// ===== 記録を保存 =====
function saveRecord(score, correct, total) {
    let records = getStorage(STORAGE_KEYS.RECENT_RECORDS) || [];
    const categoryNames = {
        ethics: '倫理',
        politics: '政治',
        economics: '経済',
        international: '国際',
        all: '総合',
        review: '復習'
    };

    records.unshift({
        date: new Date().toISOString(),
        category: categoryNames[currentCategory] || '総合',
        score,
        correct,
        total
    });

    // 最新50件のみ保持
    records = records.slice(0, 50);
    setStorage(STORAGE_KEYS.RECENT_RECORDS, records);
}

// ===== 進捗管理画面表示 =====
function showStatsScreen() {
    const stats = getStats();

    Object.keys(stats).forEach(category => {
        const data = stats[category];
        const percentage = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

        const meterElem = document.getElementById(`${category}-meter`);
        const textElem = document.getElementById(`${category}-stat`);

        if (meterElem) meterElem.style.width = percentage + '%';
        if (textElem) textElem.textContent = `${data.correct}問正解 / ${data.total}問中`;
    });

    showScreen('stats-screen');
}

// ===== 自己記録画面表示 =====
function showRecordsScreen() {
    const bests = getStorage(STORAGE_KEYS.PERSONAL_BESTS) || {};

    // ベストスコア表示
    document.getElementById('best-overall').textContent = bests.overall?.score || '---';
    document.getElementById('best-ethics').textContent = bests.ethics?.score || '---';
    document.getElementById('best-politics').textContent = bests.politics?.score || '---';
    document.getElementById('best-economics').textContent = bests.economics?.score || '---';

    // 最近の記録
    const records = getStorage(STORAGE_KEYS.RECENT_RECORDS) || [];
    const listElem = document.getElementById('recent-records-list');

    if (records.length === 0) {
        listElem.innerHTML = '<p class="no-records">まだ記録がありません</p>';
    } else {
        listElem.innerHTML = records.map(record => {
            const date = new Date(record.date).toLocaleDateString('ja-JP');
            return `
                <div class="record-item">
                    <div class="record-info">
                        <div class="record-date">${date}</div>
                        <div class="record-category">${record.category}</div>
                    </div>
                    <div class="record-score">${record.score}点</div>
                </div>
            `;
        }).join('');
    }

    showScreen('records-screen');
}

// ===== データリセット =====
function resetStats() {
    if (confirm('すべての進捗データをリセットしますか？この操作は取り消せません。')) {
        localStorage.removeItem(STORAGE_KEYS.STATS);
        localStorage.removeItem(STORAGE_KEYS.WRONG_QUESTIONS);
        alert('進捗データをリセットしました。');
        updateProgress();
        showScreen('home-screen');
    }
}

function resetRecords() {
    if (confirm('すべての記録をリセットしますか？この操作は取り消せません。')) {
        localStorage.removeItem(STORAGE_KEYS.PERSONAL_BESTS);
        localStorage.removeItem(STORAGE_KEYS.RECENT_RECORDS);
        alert('記録をリセットしました。');
        showScreen('home-screen');
    }
}

// ===== イベントリスナー設定 =====
document.addEventListener('DOMContentLoaded', () => {
    // 分野選択カード
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            startQuiz(category);
        });
    });

    // 自己記録ボタン
    document.getElementById('records-btn').addEventListener('click', showRecordsScreen);

    // 進捗管理ボタン
    document.getElementById('stats-btn').addEventListener('click', showStatsScreen);

    // クイズ終了ボタン
    document.getElementById('quit-quiz').addEventListener('click', () => {
        if (confirm('クイズを終了しますか？')) {
            showScreen('home-screen');
        }
    });

    // 次の問題ボタン
    document.getElementById('next-question').addEventListener('click', nextQuestion);

    // 結果画面のボタン
    document.getElementById('retry-btn').addEventListener('click', () => {
        startQuiz(currentCategory);
    });

    document.getElementById('home-btn').addEventListener('click', () => {
        showScreen('home-screen');
    });

    document.getElementById('review-wrong-btn').addEventListener('click', () => {
        if (wrongQuestions.length > 0) {
            startQuiz('review');
        } else {
            alert('復習する問題がありません！');
        }
    });

    // 進捗管理画面の戻るボタン
    document.getElementById('stats-back').addEventListener('click', () => {
        showScreen('home-screen');
    });

    document.getElementById('reset-stats').addEventListener('click', resetStats);

    // 自己記録画面の戻るボタン
    document.getElementById('records-back').addEventListener('click', () => {
        showScreen('home-screen');
    });

    document.getElementById('reset-records').addEventListener('click', resetRecords);

    // 初期化
    updateProgress();
});
