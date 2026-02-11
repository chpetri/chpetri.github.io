document.addEventListener('DOMContentLoaded', () => {
    // State
    const CONFIG = {
        sessionLength: 25
    };

    let allQuestions = [];
    let sessionQuestions = [];
    let currentIndex = 0;
    let userAnswers = {}; // Map question ID -> selected key
    let isChecked = {};   // Map question ID -> boolean

    // Score tracking: { "1.0": { correct: 0, total: 0 }, ... }
    let categoryScores = {};

    // DOM Elements
    const dom = {
        currentQ: document.getElementById('current-q'),
        totalQ: document.getElementById('total-q'),
        categoryBadge: document.getElementById('category-badge'),
        idBadge: document.getElementById('id-badge'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        explanationPanel: document.getElementById('explanation-panel'),
        explanationText: document.getElementById('explanation-text'),
        nextBtn: document.getElementById('next-btn'),
        checkBtn: document.getElementById('check-btn'),
        hintBtn: document.getElementById('hint-btn'),
        scorePercentage: document.getElementById('score-percentage'),
        categoryList: document.getElementById('category-list')
    };

    // Initialize
    fetch('questions.json')
        .then(res => res.json())
        .then(data => {
            allQuestions = data;
            startSession();
        })
        .catch(err => {
            dom.questionText.textContent = "Error loading questions. Please reload.";
            console.error(err);
        });

    function startSession() {
        // 1. Shuffle and pick 25
        sessionQuestions = shuffleArray([...allQuestions]).slice(0, CONFIG.sessionLength);

        // 2. Initialize Categories
        initializeCategories(sessionQuestions);

        // 3. Reset State
        currentIndex = 0;
        userAnswers = {};
        isChecked = {};
        updateDashboard();

        // 4. Load First
        loadQuestion(currentIndex);
    }

    function initializeCategories(questions) {
        // Reset scores
        categoryScores = {};

        // Count totals for this session
        questions.forEach(q => {
            const cat = normalizeCategory(q.category);
            if (!categoryScores[cat]) {
                categoryScores[cat] = { correct: 0, total: 0, label: getCategoryLabel(cat) };
            }
            categoryScores[cat].total++;
        });

        renderDashboard();
    }

    function loadQuestion(index) {
        if (index < 0 || index >= sessionQuestions.length) return;

        const q = sessionQuestions[index];
        currentIndex = index;

        // Update Header
        dom.currentQ.textContent = index + 1;
        dom.totalQ.textContent = sessionQuestions.length;

        // Update Card
        dom.categoryBadge.textContent = getCategoryLabel(normalizeCategory(q.category));
        dom.idBadge.textContent = q.id;
        dom.questionText.textContent = q.question;

        // Reset Logic
        dom.explanationPanel.classList.add('hidden');
        dom.checkBtn.classList.remove('hidden');
        dom.checkBtn.textContent = "Check Answer";
        dom.nextBtn.classList.add('hidden'); // Hide Next until checked (optional flow, let's keep it usually hidden or disabled?)
        // Let's make Next always visible but maybe highlight Check first
        dom.nextBtn.classList.remove('hidden');
        dom.hintBtn.disabled = isChecked[q.id]; // Disable hint if already answered

        // Render Options
        dom.optionsContainer.innerHTML = '';
        const savedAnswer = userAnswers[q.id];
        const checked = isChecked[q.id];

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

            if (checked) {
                applyValidationStyles(btn, key, q.answer, savedAnswer);
            } else {
                btn.addEventListener('click', () => selectOption(key));
            }

            dom.optionsContainer.appendChild(btn);
        });

        if (checked) {
            showExplanation(q);
            dom.checkBtn.classList.add('hidden');
        }

        // Button State
        dom.nextBtn.textContent = index === sessionQuestions.length - 1 ? "Finish" : "Next Question ➝";
    }

    function selectOption(key) {
        if (isChecked[sessionQuestions[currentIndex].id]) return;

        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(b => b.classList.remove('selected'));

        const selectedBtn = dom.optionsContainer.querySelector(`.option-btn[data-key="${key}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');

        userAnswers[sessionQuestions[currentIndex].id] = key;
    }

    function checkAnswer() {
        const q = sessionQuestions[currentIndex];
        const selected = userAnswers[q.id];

        if (!selected) {
            alert("Please select an option first."); // Ideally a toast
            return;
        }

        if (isChecked[q.id]) return; // Already checked

        isChecked[q.id] = true;
        dom.hintBtn.disabled = true;

        // Update Score
        const cat = normalizeCategory(q.category);
        const isCorrect = selected === q.answer;

        if (isCorrect) {
            categoryScores[cat].correct++;
        }

        updateDashboard();

        // UI Updates
        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(btn => {
            const key = btn.dataset.key;
            applyValidationStyles(btn, key, q.answer, selected);
        });

        showExplanation(q);
        dom.checkBtn.classList.add('hidden');
    }

    function showHint() {
        // 50/50 Joker Logic
        const q = sessionQuestions[currentIndex];
        if (isChecked[q.id]) return;

        const correct = q.answer;
        const allOptions = Object.keys(q.options);
        const wrongOptions = allOptions.filter(k => k !== correct);

        // Randomly pick 2 wrong options to DISABLE/Remove
        // If there are less than 3 options, this might just remove 1
        const shuffledWrong = shuffleArray(wrongOptions);
        const toRemove = shuffledWrong.slice(0, 2);

        toRemove.forEach(key => {
            const btn = dom.optionsContainer.querySelector(`.option-btn[data-key="${key}"]`);
            if (btn) {
                btn.classList.add('disabled');
                btn.style.opacity = '0.3';
            }
        });

        // Disable hint button after use for this question
        dom.hintBtn.disabled = true;
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

    // --- Dashboard Logic ---

    function normalizeCategory(cat) {
        if (!cat) return "General";
        // Convert "3.1" -> "3.0"
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

    function renderDashboard() {
        dom.categoryList.innerHTML = '';
        // Sort keys
        const sortedCats = Object.keys(categoryScores).sort();

        sortedCats.forEach(cat => {
            const data = categoryScores[cat];
            const div = document.createElement('div');
            div.className = 'category-item';
            div.id = `cat-item-${cat.replace('.', '-')}`;
            div.innerHTML = `
                <div class="cat-header">
                    <span>${data.label}</span>
                    <span class="cat-stat">0/${data.total}</span>
                </div>
                <div class="cat-progress">
                    <div class="cat-fill" style="width: 0%"></div>
                </div>
            `;
            dom.categoryList.appendChild(div);
        });
        updateDashboard();
    }

    function updateDashboard() {
        // Calculate Total Accuracy
        let totalCorrect = 0;
        let totalAnswered = 0; // Or total possible so far? Let's do total correct of total possible in session?
        // User wants "Performance Hub".
        // Let's sum up correct answers
        Object.values(categoryScores).forEach(c => totalCorrect += c.correct);

        // Calculate percentage based on QUESTIONS ANSWERED so far? 
        // Or based on total session (25)? Usually session is better motivation.
        // Let's do: (Total Correct / 25) * 100 for overall Score?
        // Or (Total Correct / Questions Attempted)?
        // Let's stick to Total Correct / Session Total involved in dashboard (max score)

        // Wait, for the individual categories, we want progress bars.
        Object.keys(categoryScores).forEach(cat => {
            const data = categoryScores[cat];
            const el = document.getElementById(`cat-item-${cat.replace('.', '-')}`);
            if (el) {
                const statEl = el.querySelector('.cat-stat');
                const fillEl = el.querySelector('.cat-fill');

                statEl.textContent = `${data.correct}/${data.total}`;
                // Percentage for width
                const pct = (data.correct / data.total) * 100;
                fillEl.style.width = `${pct}%`;
            }
        });

        // Main Score
        const overallPct = Math.round((totalCorrect / CONFIG.sessionLength) * 100);
        dom.scorePercentage.textContent = `${overallPct}%`;
    }

    // --- Utilities ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function escapeHtml(text) {
        if (!text) return "";
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Event Listeners
    dom.nextBtn.addEventListener('click', () => {
        if (currentIndex < sessionQuestions.length - 1) {
            loadQuestion(currentIndex + 1);
        } else {
            alert("Session Complete! Great job.");
            // Optionally restart
        }
    });

    dom.checkBtn.addEventListener('click', checkAnswer);

    dom.hintBtn.addEventListener('click', showHint);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        // Only allow Right Arrow if next is valid
        if (e.key === 'ArrowRight') dom.nextBtn.click();
    });
});
