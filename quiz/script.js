document.addEventListener('DOMContentLoaded', () => {
    // --- State & Config ---
    const STATE = {
        allQuestions: [],
        sessionQuestions: [],
        currentIndex: 0,
        userAnswers: {}, // Map q.id -> key
        isChecked: {},   // Map q.id -> boolean
        flagged: {},     // Map q.id -> boolean
        timerInterval: null,
        timeRemaining: 0,
        config: {
            mode: 'learn', // 'learn' | 'exam'
            count: 25,
            category: 'all',
            retryMistakes: false
        },
        stats: {
            totalCorrect: 0,
            totalAnswered: 0,
            mistakes: [] // Array of question IDs
        }
    };

    // --- DOM Elements ---
    const screens = {
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    const dom = {
        // Start Screen
        modeBtns: document.querySelectorAll('.mode-btn'),
        countBtns: document.querySelectorAll('.count-btn'),
        catSelect: document.getElementById('category-select'),
        startBtn: document.getElementById('start-btn'),
        retryBtn: document.getElementById('retry-mistakes-btn'),
        mistakeCount: document.getElementById('mistake-count'),

        // Header
        timerDisplay: document.getElementById('timer-display'),
        timeRemaining: document.getElementById('time-remaining'),
        sessionInfo: document.getElementById('session-info'),
        currentQ: document.getElementById('current-q'),
        totalQ: document.getElementById('total-q'),

        // Quiz Card
        categoryBadge: document.getElementById('category-badge'),
        idBadge: document.getElementById('id-badge'),
        flagBtn: document.getElementById('flag-btn'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        explanationPanel: document.getElementById('explanation-panel'),
        explanationText: document.getElementById('explanation-text'),

        // Controls
        nextBtn: document.getElementById('next-btn'),
        checkBtn: document.getElementById('check-btn'),
        hintBtn: document.getElementById('hint-btn'),

        // Sidebar
        scorePercentage: document.getElementById('score-percentage'),
        categoryList: document.getElementById('category-list'),

        // Results
        finalScore: document.getElementById('final-score'),
        finalRating: document.getElementById('final-rating'),
        questionLog: document.getElementById('question-log'),
        homeBtn: document.getElementById('home-btn'),
        restartBtn: document.getElementById('restart-btn'),

        // Modal
        modal: document.getElementById('review-modal'),
        modalContent: document.getElementById('review-content'),
        closeModal: document.querySelector('.close-modal')
    };

    // --- Initialization ---
    try {
        init();
    } catch (e) {
        alert("Critical Init Error: " + e.message);
    }

    function init() {
        loadStats();

        // Debug check
        if (dom.modeBtns.length === 0) alert("Error: Mode buttons not found in DOM");
        if (!dom.startBtn) alert("Error: Start button not found in DOM");

        fetch('questions.json')
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON: " + res.statusText);
                return res.json();
            })
            .then(data => {
                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error("Invalid or empty questions data");
                }
                STATE.allQuestions = data;
                try {
                    setupStartScreen();
                } catch (e) {
                    alert("Error in setupStartScreen: " + e.message);
                    console.error(e);
                }
            })
            .catch(err => {
                alert("Fetch Error: " + err.message);
                console.error(err);
            });
    }

    // --- LocalStorage Logic ---
    function loadStats() {
        const saved = localStorage.getItem('pt003_stats');
        if (saved) {
            try {
                STATE.stats = JSON.parse(saved);
                // Schema check
                if (!Array.isArray(STATE.stats.mistakes)) STATE.stats.mistakes = [];
            } catch (e) {
                console.warn("Corrupt stats, resetting.");
            }
        }
    }

    function saveStats() {
        localStorage.setItem('pt003_stats', JSON.stringify(STATE.stats));
    }

    function recordMistake(qid) {
        if (!STATE.stats.mistakes.includes(qid)) {
            STATE.stats.mistakes.push(qid);
        }
        saveStats();
    }

    function clearMistake(qid) {
        STATE.stats.mistakes = STATE.stats.mistakes.filter(id => id !== qid);
        saveStats();
    }

    // --- Start Screen Logic ---
    function setupStartScreen() {
        // Populate Categories
        const categories = new Set();
        STATE.allQuestions.forEach(q => {
            const cat = normalizeCategory(q.category);
            const label = getCategoryLabel(cat);
            categories.add(JSON.stringify({ code: cat, label: label }));
        });

        // Convert back to objects and sort
        const sortedCats = Array.from(categories)
            .map(s => JSON.parse(s))
            .sort((a, b) => a.code.localeCompare(b.code));

        sortedCats.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat.code;
            opt.textContent = cat.label;
            dom.catSelect.appendChild(opt);
        });

        // Retry Mistakes Button
        if (STATE.stats.mistakes && STATE.stats.mistakes.length > 0) {
            dom.retryBtn.classList.remove('hidden');
            dom.mistakeCount.textContent = STATE.stats.mistakes.length;
        } else {
            dom.retryBtn.classList.add('hidden');
        }

        setupConfigListeners();
    }

    function setupConfigListeners() {
        // Mode Selection
        dom.modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                dom.modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                STATE.config.mode = btn.dataset.mode;
            });
        });

        // Count Selection
        dom.countBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                dom.countBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                STATE.config.count = btn.dataset.count;
            });
        });

        // Start Button
        dom.startBtn.addEventListener('click', () => startSession(false));

        // Retry Button
        dom.retryBtn.addEventListener('click', () => {
            STATE.config.retryMistakes = true;
            startSession(true);
        });
    }

    // --- Session Logic ---
    function startSession(isRetry) {
        // 1. Filter Questions
        let pool = [...STATE.allQuestions];

        if (isRetry) {
            pool = pool.filter(q => STATE.stats.mistakes.includes(q.id));
        } else if (dom.catSelect.value !== 'all') {
            const selectedCat = dom.catSelect.value; // e.g., "3.0"
            pool = pool.filter(q => normalizeCategory(q.category) === selectedCat);
        }

        // 2. Shuffle & Slice
        shuffleArray(pool);

        let count = STATE.config.count === 'all' ? pool.length : parseInt(STATE.config.count);
        if (isRetry) count = pool.length; // Retry all mistakes

        if (pool.length === 0) {
            alert("No questions found for this selection.");
            return;
        }

        STATE.sessionQuestions = pool.slice(0, count);

        // 3. Reset Session State
        STATE.currentIndex = 0;
        STATE.userAnswers = {};
        STATE.isChecked = {};
        STATE.flagged = {};

        // 4. Setup UI
        showScreen('quiz');
        renderDashboard(); // Reset dashboard bars
        dom.sessionInfo.classList.remove('hidden');

        // Timer Logic
        clearInterval(STATE.timerInterval);
        dom.timerDisplay.classList.add('hidden');
        dom.timerDisplay.classList.remove('warning');

        if (STATE.config.mode === 'exam') {
            // 90 seconds per question
            STATE.timeRemaining = STATE.sessionQuestions.length * 90;
            dom.timerDisplay.classList.remove('hidden');
            startTimer();
        }

        loadQuestion(0);
    }

    function startTimer() {
        updateTimerDisplay();
        STATE.timerInterval = setInterval(() => {
            STATE.timeRemaining--;
            updateTimerDisplay();

            if (STATE.timeRemaining <= 0) {
                clearInterval(STATE.timerInterval);
                finishSession();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const m = Math.floor(STATE.timeRemaining / 60);
        const s = STATE.timeRemaining % 60;
        dom.timeRemaining.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        if (STATE.timeRemaining < 60) {
            dom.timerDisplay.classList.add('warning');
        }
    }

    function loadQuestion(index) {
        try {
            STATE.currentIndex = index;
            const q = STATE.sessionQuestions[index];

            if (!q) throw new Error(`Question at index ${index} is undefined. Session Length: ${STATE.sessionQuestions.length}`);

            // Update Header & Meta
            if (dom.currentQ) dom.currentQ.textContent = index + 1;
            if (dom.totalQ) dom.totalQ.textContent = STATE.sessionQuestions.length;

            if (dom.categoryBadge) dom.categoryBadge.textContent = getCategoryLabel(normalizeCategory(q.category));
            if (dom.idBadge) dom.idBadge.textContent = q.id;

            if (dom.questionText) dom.questionText.textContent = q.question;

            // Reset Panels for new question
            if (dom.explanationPanel) dom.explanationPanel.classList.add('hidden');
            if (dom.optionsContainer) dom.optionsContainer.innerHTML = '';
            if (dom.flagBtn) dom.flagBtn.classList.toggle('flagged', !!STATE.flagged[q.id]);

            // Determine State (Answered? Checked?)
            const savedAnswer = STATE.userAnswers[q.id];
            const isChecked = STATE.isChecked[q.id];

            // --- Mode Logic ---
            if (STATE.config.mode === 'learn') {
                if (dom.checkBtn) dom.checkBtn.classList.toggle('hidden', !!isChecked);
                if (dom.nextBtn) dom.nextBtn.textContent = (index === STATE.sessionQuestions.length - 1) ? "Finish" : "Next ➝";
                if (dom.hintBtn) dom.hintBtn.disabled = !!isChecked;
            } else {
                // Exam
                if (dom.checkBtn) dom.checkBtn.classList.add('hidden');
                if (dom.hintBtn) dom.hintBtn.disabled = true;
                if (dom.nextBtn) dom.nextBtn.textContent = (index === STATE.sessionQuestions.length - 1) ? "Submit Exam" : "Next ➝";
            }

            // Render Options
            const sortedKeys = Object.keys(q.options).sort();
            sortedKeys.forEach(key => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.dataset.key = key;
                btn.innerHTML = `
                    <span class="option-letter">${key}</span>
                    <div class="option-content">${escapeHtml(q.options[key])}</div>
                `;

                if (savedAnswer === key) btn.classList.add('selected');

                // Click Handler
                if (!isChecked && (STATE.config.mode === 'learn' || STATE.config.mode === 'exam')) {
                    btn.addEventListener('click', () => selectOption(key));
                }

                // Applying Styles (Only in Learning Mode if Checked)
                if (STATE.config.mode === 'learn' && isChecked) {
                    applyValidationStyles(btn, key, q.answer, savedAnswer);
                }

                if (dom.optionsContainer) dom.optionsContainer.appendChild(btn);
            });

            // Show Explanation if Learning Mode & Checked
            if (STATE.config.mode === 'learn' && isChecked) {
                showExplanation(q);
            }
        } catch (e) {
            alert("Error in loadQuestion: " + e.message + "\nStack: " + e.stack);
            console.error(e);
        }
    }

    // Render Options
    const sortedKeys = Object.keys(q.options).sort();
    sortedKeys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.key = key;
        btn.innerHTML = `
                <span class="option-letter">${key}</span>
                <div class="option-content">${escapeHtml(q.options[key])}</div>
            `;

        if (savedAnswer === key) btn.classList.add('selected');

        // Click Handler
        if (!isChecked && (STATE.config.mode === 'learn' || STATE.config.mode === 'exam')) {
            btn.addEventListener('click', () => selectOption(key));
        }

        // Applying Styles (Only in Learning Mode if Checked)
        if (STATE.config.mode === 'learn' && isChecked) {
            applyValidationStyles(btn, key, q.answer, savedAnswer);
        }

        dom.optionsContainer.appendChild(btn);
    });

    // Show Explanation if Learning Mode & Checked
    if (STATE.config.mode === 'learn' && isChecked) {
        showExplanation(q);
    }
}

    function selectOption(key) {
        // Prevent changing answer if already checked (in learn mode)
        // In exam mode, you can change answer until you submit (which happens at end)
        if (STATE.config.mode === 'learn' && STATE.isChecked[STATE.sessionQuestions[STATE.currentIndex].id]) return;

        const qid = STATE.sessionQuestions[STATE.currentIndex].id;
        STATE.userAnswers[qid] = key;

        // Visual update
        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(b => b.classList.remove('selected'));

        const selectedBtn = dom.optionsContainer.querySelector(`.option-btn[data-key="${key}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');
    }

    function handleCheck() {
        const q = STATE.sessionQuestions[STATE.currentIndex];
        const selected = STATE.userAnswers[q.id];

        if (!selected) {
            alert("Please select an option.");
            return;
        }

        STATE.isChecked[q.id] = true;

        // Visual Feedback
        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(btn => {
            const key = btn.dataset.key;
            applyValidationStyles(btn, key, q.answer, selected);
        });

        // Update Stats
        if (selected === q.answer) {
            clearMistake(q.id); // Remove from mistakes list if correct
        } else {
            recordMistake(q.id); // Add to mistakes list
        }

        showExplanation(q);
        dom.checkBtn.classList.add('hidden');
        updateDashboard();
    }

    function handleNext() {
        // If Exam Mode, check if last question
        if (STATE.config.mode === 'exam') {
            const q = STATE.sessionQuestions[STATE.currentIndex];
            if (!STATE.userAnswers[q.id]) {
                // Warning if skipping? Or just allow?
                // Let's allow skipping but visual hint?
            }
        }

        if (STATE.currentIndex < STATE.sessionQuestions.length - 1) {
            loadQuestion(STATE.currentIndex + 1);
        } else {
            finishSession();
        }
    }

    function finishSession() {
        clearInterval(STATE.timerInterval);
        showScreen('result');
        calculateResults();
    }

    // --- Results Logic ---
    function calculateResults() {
        let correctCount = 0;
        dom.questionLog.innerHTML = '';

        STATE.sessionQuestions.forEach((q, index) => {
            const userAns = STATE.userAnswers[q.id];
            const isCorrect = (userAns === q.answer);
            const isFlagged = STATE.flagged[q.id];

            if (isCorrect) correctCount++;

            // Mistake updates for Exam mode (Learning updates immediately)
            if (STATE.config.mode === 'exam') {
                if (isCorrect) clearMistake(q.id);
                else recordMistake(q.id);
            }

            // Render Log Item
            const logItem = document.createElement('div');
            logItem.className = `log-item ${isCorrect ? 'pass' : 'fail'}`;
            logItem.innerHTML = `
                <span class="status-icon">${isCorrect ? '✅' : '❌'}</span>
                <div style="flex:1">
                    <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                        <span style="font-weight:bold; font-family:'JetBrains Mono';">#${index + 1}</span>
                        ${isFlagged ? '<span>🚩</span>' : ''}
                    </div>
                    <span class="q-snippet">${escapeHtml(q.question.substring(0, 80))}...</span>
                </div>
            `;
            logItem.addEventListener('click', () => openReviewModal(q, userAns));
            dom.questionLog.appendChild(logItem);
        });

        // Score
        const pct = Math.round((correctCount / STATE.sessionQuestions.length) * 100);
        dom.finalScore.textContent = `${pct}%`;

        let rating = "NOVICE";
        let color = "var(--danger)";
        if (pct >= 90) { rating = "MASTER"; color = "var(--success)"; }
        else if (pct >= 80) { rating = "EXPERT"; color = "var(--primary)"; }
        else if (pct >= 70) { rating = "PROFICIENT"; color = "var(--warning)"; }
        else if (pct >= 50) { rating = "APPRENTICE"; color = "var(--warning)"; }

        dom.finalRating.textContent = rating;
        dom.finalRating.style.backgroundColor = color;
        dom.finalRating.style.color = (pct >= 90 || pct < 50) ? "#000" : "#000";
    }

    function openReviewModal(q, userAns) {
        const isCorrect = userAns === q.answer;
        const html = `
            <h3 style="margin-bottom:15px; color:var(--primary);">${q.id}</h3>
            <p style="font-size:1.1rem; margin-bottom:20px; font-weight:bold;">${escapeHtml(q.question)}</p>
            
            <div style="margin-bottom:20px;">
                <p>Your Answer: <span style="color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight:bold;">${userAns || 'None'}</span></p>
                <p>Correct Answer: <span style="color:var(--success); font-weight:bold;">${q.answer}</span></p>
            </div>

            <div class="explanation-panel" style="display:block;">
                <h3><span class="icon">💡</span> Analysis</h3>
                <div class="explanation-content">${escapeHtml(q.explanation)}</div>
            </div>
        `;
        dom.modalContent.innerHTML = `<span class="close-modal">&times;</span>` + html;
        dom.modal.classList.remove('hidden');

        // Re-attach close listener
        dom.modal.querySelector('.close-modal').addEventListener('click', () => {
            dom.modal.classList.add('hidden');
        });
    }

    // --- Helpers ---
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.add('hidden'));
        screens[name].classList.remove('hidden');

        if (name === 'start') {
            dom.sessionInfo.classList.add('hidden');
            dom.timerDisplay.classList.add('hidden');
        }
    }

    function updateDashboard() {
        // Calculate session stats for sidebar (Learning Mode mainly)
        if (STATE.config.mode === 'exam') return; // Don't show live stats in exam? Or maybe minimal.

        // Simple accuracy based on checked answers
        let correct = 0, total = 0;
        Object.keys(STATE.isChecked).forEach(qid => {
            const q = STATE.sessionQuestions.find(sq => sq.id === qid);
            if (q) {
                total++;
                if (STATE.userAnswers[qid] === q.answer) correct++;
            }
        });

        const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
        dom.scorePercentage.textContent = `${pct}%`;

        // We can update categories like before if we map them
        // Re-using the previous logic for categories if wanted, 
        // but let's keep it simple for this "Full Upgrade" focused on flow.
        dom.categoryList.innerHTML = '';
        // Group by category
        const cats = {};
        STATE.sessionQuestions.forEach(q => {
            const c = normalizeCategory(q.category);
            if (!cats[c]) cats[c] = { total: 0, correct: 0, label: getCategoryLabel(c) };
            cats[c].total++;
            if (STATE.isChecked[q.id] && STATE.userAnswers[q.id] === q.answer) {
                cats[c].correct++;
            }
        });

        Object.keys(cats).sort().forEach(c => {
            const data = cats[c];
            const d = document.createElement('div');
            d.className = 'category-item';
            const cpct = (data.correct / data.total) * 100;
            d.innerHTML = `
                <div class="cat-header"><span>${data.label}</span><span>${data.correct}/${data.total}</span></div>
                <div class="cat-progress"><div class="cat-fill" style="width:${cpct}%"></div></div>
             `;
            dom.categoryList.appendChild(d);
        });
    }

    function showExplanation(q) {
        dom.explanationText.textContent = q.explanation || "No explanation provided.";
        dom.explanationPanel.classList.remove('hidden');
    }

    function applyValidationStyles(btn, key, correctKey, selectedKey) {
        btn.classList.remove('correct', 'wrong', 'selected');
        btn.style.cursor = 'default';

        if (key === correctKey) {
            btn.classList.add('correct');
        } else if (key === selectedKey) {
            btn.classList.add('wrong');
        } else {
            btn.style.opacity = '0.5';
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function normalizeCategory(cat) {
        if (!cat) return "General";
        return cat.split('.')[0] + ".0";
    }

    function getCategoryLabel(catCode) {
        const labels = {
            "1.0": "Planning & Scoping",
            "2.0": "Info Gather & Vuln Scan",
            "3.0": "Attacks & Exploits",
            "4.0": "Reporting & Communication",
            "5.0": "Tools & Code Analysis",
            "General": "General Knowledge"
        };
        return labels[catCode] || catCode;
    }

    function escapeHtml(text) {
        if (!text) return "";
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    // --- Events ---
    dom.checkBtn.addEventListener('click', handleCheck);
dom.nextBtn.addEventListener('click', handleNext);

dom.flagBtn.addEventListener('click', () => {
    const qid = STATE.sessionQuestions[STATE.currentIndex].id;
    STATE.flagged[qid] = !STATE.flagged[qid];
    dom.flagBtn.classList.toggle('flagged');
});

dom.hintBtn.addEventListener('click', () => {
    // 50/50 Logic
    const q = STATE.sessionQuestions[STATE.currentIndex];
    const correct = q.answer;
    const keys = Object.keys(q.options).filter(k => k !== correct);
    shuffleArray(keys);
    keys.slice(0, 2).forEach(k => {
        const btn = dom.optionsContainer.querySelector(`.option-btn[data-key="${k}"]`);
        if (btn) btn.classList.add('disabled');
    });
    dom.hintBtn.disabled = true;
});

// Navigation Buttons
dom.homeBtn.addEventListener('click', () => {
    showScreen('start');
    setupStartScreen(); // Refresh stat counts
});

dom.restartBtn.addEventListener('click', () => {
    startSession(STATE.config.retryMistakes);
});

// Modal
dom.modal.addEventListener('click', (e) => {
    if (e.target === dom.modal) dom.modal.classList.add('hidden');
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (dom.quiz.classList.contains('hidden')) return;

    const key = e.key.toUpperCase();
    // Options 1-4 or A-D
    const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };

    if (map[key]) {
        selectOption(map[key]);
    }

    if (e.key === 'Enter') {
        // Logic: If check is visible, click check. Else click next.
        if (!dom.checkBtn.classList.contains('hidden')) {
            handleCheck();
        } else {
            handleNext();
        }
    }
});

});
