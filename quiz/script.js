document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    const STATE = {
        allQuestions: [],
        sessionQuestions: [],
        currentIndex: 0,
        userAnswers: {},
        isChecked: {},
        flagged: {},
        config: {
            mode: 'learn',
            count: 25,
            category: 'all',
            retryMistakes: false
        },
        stats: {
            mistakes: []
        }
    };

    // --- DOM Elements (Rational.Futur Split-Pane Mappings) ---
    const viewPairs = {
        start: {
            content: document.getElementById('start-content'),
            controls: document.getElementById('start-controls')
        },
        quiz: {
            content: document.getElementById('quiz-content-wrapper'),
            controls: document.getElementById('quiz-controls')
        },
        result: {
            content: document.getElementById('result-content'),
            controls: document.getElementById('result-controls')
        }
    };

    const dom = {
        // Start Screen
        startScreen: document.getElementById('start-screen'), // Updated ID
        modeBtns: document.querySelectorAll('.setting-btn[data-mode]'),
        countBtns: document.querySelectorAll('.setting-btn[data-count]'),
        catSelect: document.getElementById('category-select'), // Might be missing in new HTML, check if needed
        startBtn: document.getElementById('start-btn'),
        retryBtn: document.getElementById('retry-mistakes-btn'), // Might be missing
        mistakeCount: document.getElementById('mistake-count'),

        // Quiz Container
        quizControls: document.getElementById('quiz-controls'), // Might need update if merged
        quizCanvas: document.getElementById('quiz-canvas'), // This is fine
        quizContent: document.getElementById('quiz-content-wrapper'), // Added
        progressBar: document.getElementById('progress-bar'), // Progress Bar

        // Quiz Display
        currentQ: document.getElementById('current-q-disp'),
        headerCounter: document.getElementById('header-q-counter'), // NEW
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        explanationPanel: document.getElementById('explanation-panel'),
        explanationText: document.getElementById('explanation-text'),

        // Controls
        checkBtn: document.getElementById('check-btn'),
        nextBtn: document.getElementById('next-btn'),
        hintBtn: document.getElementById('hint-btn'),
        flagBtn: document.getElementById('flag-btn'),

        // Results
        finalScore: document.getElementById('final-score-display'),
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
    init();

    function init() {
        loadStats();
        fetch('questions.json')
            .then(res => res.json())
            .then(data => {
                STATE.allQuestions = data;
                setupStartConfig();
            })
            .catch(err => console.error("System Failure: " + err.message));
    }

    function loadStats() {
        try {
            const saved = localStorage.getItem('pt003_stats');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object' && Array.isArray(parsed.mistakes)) {
                    STATE.stats = parsed;
                }
            }
            if (!Array.isArray(STATE.stats.mistakes)) STATE.stats.mistakes = [];
        } catch (e) {
            console.warn("Stats corrupt, resetting");
            STATE.stats = { mistakes: [] };
        }
    }

    // --- Configuration Logic ---
    function setupStartConfig() {
        // Populate Categories (Defensive)
        if (dom.catSelect) {
            const categories = new Set();
            STATE.allQuestions.forEach(q => {
                const cat = q.category ? q.category.split('.')[0] + ".0" : "General";
                categories.add(cat);
            });

            dom.catSelect.innerHTML = '<option value="all">FULL COMPLIANCE</option>';
            Array.from(categories).sort().forEach(cat => {
                const opt = document.createElement('option');
                opt.value = cat;
                opt.textContent = `DOMAIN ${cat}`;
                dom.catSelect.appendChild(opt);
            });
        }

        // Config Listeners
        if (dom.modeBtns) {
            dom.modeBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    dom.modeBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    STATE.config.mode = btn.dataset.mode;
                });
            });
        }

        if (dom.countBtns) {
            dom.countBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    dom.countBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    STATE.config.count = btn.dataset.count;
                });
            });
        }

        if (dom.startBtn) {
            dom.startBtn.addEventListener('click', () => startSession(false));
        }

        if (dom.retryBtn && STATE.stats.mistakes.length > 0) {
            dom.retryBtn.classList.remove('hidden');
            dom.retryBtn.addEventListener('click', () => {
                STATE.config.retryMistakes = true;
                startSession(true);
            });
        }
    }

    // --- Session Logic ---
    function startSession(isRetry) {
        let pool = [...STATE.allQuestions];

        if (isRetry) {
            pool = pool.filter(q => STATE.stats.mistakes.includes(q.id));
        } else if (dom.catSelect && dom.catSelect.value !== 'all') {
            const cat = dom.catSelect.value;
            pool = pool.filter(q => (q.category && q.category.startsWith(cat.split('.')[0])));
        }

        // Shuffle
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        let limit = (STATE.config.count === 'all' || isRetry) ? pool.length : parseInt(STATE.config.count);
        STATE.sessionQuestions = pool.slice(0, limit);

        if (STATE.sessionQuestions.length === 0) {
            alert("No data available for this selection.");
            return;
        }

        STATE.currentIndex = 0;
        STATE.userAnswers = {};
        STATE.isChecked = {};
        STATE.flagged = {};

        startQuiz();
    }

    // --- Core Logic ---
    function startQuiz() {
        if (STATE.sessionQuestions.length === 0) {
            alert("System failure: No questions loaded.");
            return;
        }

        STATE.userAnswers = {};
        STATE.isChecked = {};

        // UI Transition (Modern Layout)
        if (dom.startScreen) dom.startScreen.classList.add('hidden');
        if (dom.quizControls) dom.quizControls.classList.remove('hidden');
        if (dom.quizContent) dom.quizContent.classList.remove('hidden');

        loadQuestion(0);
    }

    function loadQuestion(index) {
        STATE.currentIndex = index;
        const q = STATE.sessionQuestions[index];

        // Update Header Counter
        const currentNum = (index + 1).toString().padStart(2, '0');
        const totalNum = STATE.sessionQuestions.length.toString().padStart(2, '0');
        if (dom.headerCounter) dom.headerCounter.textContent = `Target ${currentNum} / ${totalNum}`;

        // Update Progress Bar
        const progressPct = ((index + 1) / STATE.sessionQuestions.length) * 100;
        if (dom.progressBar) dom.progressBar.style.width = `${progressPct}%`;

        // Update ID with leading zero
        dom.currentQ.textContent = currentNum;
        dom.questionText.textContent = q.question;

        dom.optionsContainer.innerHTML = '';
        dom.explanationPanel.classList.add('hidden');
        if (dom.flagBtn) dom.flagBtn.classList.toggle('flagged', !!STATE.flagged[q.id]);

        const savedAnswer = STATE.userAnswers[q.id];
        const isChecked = STATE.isChecked[q.id];

        // Button State Logic
        const hasSelection = !!savedAnswer;
        dom.nextBtn.disabled = !hasSelection;
        dom.nextBtn.textContent = (index === STATE.sessionQuestions.length - 1) ? "Finish Assessment" : "Continue to Next →";

        // Check Button Logic
        if (STATE.config.mode === 'learn') {
            dom.checkBtn.classList.toggle('hidden', !!isChecked);
            dom.checkBtn.disabled = !hasSelection;
        } else {
            dom.checkBtn.classList.add('hidden');
        }

        // Render Options
        const keys = Object.keys(q.options).sort();
        keys.forEach((key, idx) => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.dataset.key = key;

            const idxStr = key; // Use A, B, C, D
            btn.innerHTML = `
                <div class="option-index">${idxStr}</div>
                <div class="option-text">${escapeHtml(q.options[key])}</div>
            `;

            if (savedAnswer === key) btn.classList.add('selected');

            // Validation Styles
            if (isChecked && STATE.config.mode === 'learn') {
                if (key === q.answer) {
                    btn.classList.add('correct'); // Use new class
                }
                else if (key === savedAnswer) {
                    btn.classList.add('wrong'); // Use new class
                } else {
                    btn.style.opacity = "0.5";
                }
            }

            if (!isChecked) {
                btn.addEventListener('click', () => {
                    const saved = STATE.userAnswers[q.id];
                    if (saved === key) {
                        delete STATE.userAnswers[q.id];
                        btn.classList.remove('selected');
                    } else {
                        STATE.userAnswers[q.id] = key;
                        const container = btn.parentElement;
                        container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                    }

                    const hasSelection = !!STATE.userAnswers[q.id];
                    dom.nextBtn.disabled = !hasSelection;
                    if (dom.checkBtn) dom.checkBtn.disabled = !hasSelection;
                });
            }
            dom.optionsContainer.appendChild(btn);
        });

        if (isChecked && STATE.config.mode === 'learn') {
            dom.explanationText.textContent = q.explanation;
            dom.explanationPanel.classList.remove('hidden');
            dom.nextBtn.disabled = false;
        }
    }

    dom.checkBtn.addEventListener('click', () => {
        const q = STATE.sessionQuestions[STATE.currentIndex];
        const ans = STATE.userAnswers[q.id];
        if (!ans) return;

        STATE.isChecked[q.id] = true;
        if (ans !== q.answer) {
            if (!STATE.stats.mistakes.includes(q.id)) STATE.stats.mistakes.push(q.id);
        } else {
            // Remove from mistakes if correct
            STATE.stats.mistakes = STATE.stats.mistakes.filter(id => id !== q.id);
        }
        localStorage.setItem('pt003_stats', JSON.stringify(STATE.stats));

        loadQuestion(STATE.currentIndex); // Re-render
    });

    dom.nextBtn.addEventListener('click', () => {
        if (STATE.currentIndex < STATE.sessionQuestions.length - 1) {
            loadQuestion(STATE.currentIndex + 1);
        } else {
            finishSession();
        }
    });

    dom.flagBtn.addEventListener('click', () => {
        const id = STATE.sessionQuestions[STATE.currentIndex].id;
        STATE.flagged[id] = !STATE.flagged[id];
        dom.flagBtn.classList.toggle('flagged');
    });

    dom.hintBtn.addEventListener('click', () => {
        const q = STATE.sessionQuestions[STATE.currentIndex];
        const keys = Object.keys(q.options).filter(k => k !== q.answer);
        // Shuffle and take 2
        for (let i = keys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keys[i], keys[j]] = [keys[j], keys[i]];
        }
        keys.slice(0, 2).forEach(k => {
            const btn = dom.optionsContainer.querySelector(`.option-btn[data-key="${k}"]`);
            if (btn) {
                btn.classList.add('wrong');
                btn.style.opacity = '0.3';
                btn.style.pointerEvents = 'none';
            }
        });
        dom.hintBtn.disabled = true;
    });

    function finishSession() {
        switchView('result');
        let correct = 0;
        dom.questionLog.innerHTML = '';

        STATE.sessionQuestions.forEach((q, idx) => {
            const isCorrect = (STATE.userAnswers[q.id] === q.answer);
            if (isCorrect) correct++;

            const item = document.createElement('div');
            item.className = 'log-item';
            item.innerHTML = `<span style="color:${isCorrect ? 'var(--emerald-success)' : 'var(--rose-error)'}">${isCorrect ? '✔' : '✖'}</span> Q.${idx + 1}: ${escapeHtml(q.question.substring(0, 40))}...`;
            item.addEventListener('click', () => {
                dom.modalContent.innerHTML = `
                    <span class="close-modal">&times;</span>
                    <h3 style="color:var(--indigo-primary); margin-bottom:10px;">${escapeHtml(q.id)}</h3>
                    <p><strong>Q:</strong> ${escapeHtml(q.question)}</p>
                    <p><strong>A:</strong> ${escapeHtml(q.answer)}</p>
                    <div style="margin-top:10px; padding:10px; border-left:3px solid var(--indigo-primary); background:var(--bg-color)">
                        ${escapeHtml(q.explanation)}
                    </div>`;
                dom.modal.classList.remove('hidden');
                dom.modal.querySelector('.close-modal').onclick = () => dom.modal.classList.add('hidden');
            });
            dom.questionLog.appendChild(item);
        });

        endQuiz();
    }

    function endQuiz() {
        if (dom.quizContent) dom.quizContent.classList.add('hidden');
        if (dom.quizControls) dom.quizControls.classList.add('hidden');

        const resultScreen = document.getElementById('result-screen');
        if (resultScreen) resultScreen.classList.remove('hidden');

        const score = calculateScore();
        const total = STATE.sessionQuestions.length;
        const pct = Math.round((score / total) * 100);

        dom.finalScore.textContent = `${pct}%`;

        // Dynamic Ratings
        let rating = "NOVICE";
        if (pct >= 90) rating = "ELITE OPERATOR";
        else if (pct >= 75) rating = "QUALIFIED OPERATOR";
        else if (pct >= 50) rating = "FIELD TESTER";

        dom.finalRating.textContent = rating;
        dom.finalRating.style.color = pct >= 75 ? 'var(--emerald-success)' : 'var(--indigo-primary)';
    }

    function calculateScore() {
        let count = 0;
        STATE.sessionQuestions.forEach(q => {
            if (STATE.userAnswers[q.id] === q.answer) count++;
        });
        return count;
    }

    dom.restartBtn.addEventListener('click', () => {
        dom.modal.classList.add('hidden');
        if (dom.startScreen) dom.startScreen.classList.remove('hidden');
        if (dom.quizControls) dom.quizControls.classList.add('hidden');
        // Re-init? Just showing start screen allows reconfiguration
    });

    dom.homeBtn.addEventListener('click', () => {
        dom.modal.classList.add('hidden');
        if (dom.startScreen) dom.startScreen.classList.remove('hidden');
        if (dom.quizControls) dom.quizControls.classList.add('hidden');
    }); function switchView(viewName) {
        // Hide all
        Object.values(viewPairs).forEach(pair => {
            pair.content.classList.add('hidden');
            pair.content.classList.remove('fade-in');
            pair.controls.classList.add('hidden');
            pair.controls.classList.remove('fade-in');
        });

        // Show target
        const target = viewPairs[viewName];
        if (target) {
            target.content.classList.remove('hidden');
            target.content.classList.add('fade-in');
            target.controls.classList.remove('hidden');
            target.controls.classList.add('fade-in');
        }
    }

    // Utils
    function escapeHtml(text) {
        if (!text) return "";
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    // Modal Close
    dom.modal.addEventListener('click', (e) => {
        if (e.target === dom.modal) dom.modal.classList.add('hidden');
    });
});
