document.addEventListener('DOMContentLoaded', () => {
    let questions = [];
    let currentIndex = 0;
    let userAnswers = {}; // Map question ID to user's selected option char
    let isChecked = {};   // Map question ID to boolean

    // Elements
    const dom = {
        currentQ: document.getElementById('current-q'),
        totalQ: document.getElementById('total-q'),
        progressBar: document.getElementById('progress-fill'),
        categoryBadge: document.getElementById('category-badge'),
        idBadge: document.getElementById('id-badge'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        explanationPanel: document.getElementById('explanation-panel'),
        explanationText: document.getElementById('explanation-text'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        checkBtn: document.getElementById('check-btn'),
        showExplBtn: document.getElementById('show-expl-btn')
    };

    // Initialize
    fetch('questions.json')
        .then(res => res.json())
        .then(data => {
            questions = data;
            dom.totalQ.textContent = questions.length;
            loadQuestion(currentIndex);
        })
        .catch(err => {
            dom.questionText.textContent = "Error loading questions. Please ensure questions.json exists.";
            console.error(err);
        });

    // Load Question
    function loadQuestion(index) {
        if (index < 0 || index >= questions.length) return;

        const q = questions[index];
        currentIndex = index;

        // Update UI
        dom.currentQ.textContent = index + 1;
        dom.progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;

        dom.categoryBadge.textContent = q.category || "General";
        dom.idBadge.textContent = q.id;
        dom.questionText.textContent = q.question;

        // Reset state for new question view
        dom.explanationPanel.classList.add('hidden');
        dom.showExplBtn.classList.add('hidden');
        dom.checkBtn.textContent = "Check Answer";
        dom.checkBtn.classList.remove('hidden');

        // Render Options
        dom.optionsContainer.innerHTML = '';
        const savedAnswer = userAnswers[q.id];
        const checked = isChecked[q.id];

        // Sort options A, B, C, D
        const sortedKeys = Object.keys(q.options).sort();

        sortedKeys.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.key = key;
            btn.innerHTML = `
                <span class="option-letter">${key}</span>
                <div class="option-content">${escapeHtml(q.options[key])}</div>
            `;

            // Restore selection
            if (savedAnswer === key) {
                btn.classList.add('selected');
            }

            // If already checked, apply validation styles immediately
            if (checked) {
                applyValidationStyles(btn, key, q.answer, savedAnswer);
            } else {
                // Add click listener if not checked
                btn.addEventListener('click', () => selectOption(key));
            }

            dom.optionsContainer.appendChild(btn);
        });

        // Restore explanation if checked
        if (checked) {
            dom.checkBtn.classList.add('hidden'); // Hide check button if already checked
            dom.showExplBtn.classList.remove('hidden');
            dom.explanationText.textContent = q.explanation || "No explanation provided.";
            // Optionally auto-show explanation or keep it hidden until requested?
            // Let's keep it hidden unless they clicked "Why?" before, but we don't track that state.
            // Just show the button.
        }

        // Button States
        dom.prevBtn.disabled = index === 0;
        dom.nextBtn.disabled = index === questions.length - 1;
    }

    function selectOption(key) {
        // Prevent changing selection if already checked
        if (isChecked[questions[currentIndex].id]) return;

        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(b => b.classList.remove('selected'));

        const selectedBtn = dom.optionsContainer.querySelector(`.option-btn[data-key="${key}"]`);
        if (selectedBtn) selectedBtn.classList.add('selected');

        userAnswers[questions[currentIndex].id] = key;
    }

    function checkAnswer() {
        const q = questions[currentIndex];
        const selected = userAnswers[q.id];

        if (!selected) {
            alert("Please select an option first!");
            return;
        }

        isChecked[q.id] = true;

        // Update UI
        const btns = dom.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(btn => {
            const key = btn.dataset.key;
            applyValidationStyles(btn, key, q.answer, selected);
        });

        dom.explanationText.textContent = q.explanation || "No explanation provided.";
        dom.explanationPanel.classList.remove('hidden'); // Auto show explanation on check

        dom.checkBtn.classList.add('hidden');
        dom.showExplBtn.classList.add('hidden'); // Hide "Why?" button since we auto-showed it
    }

    function applyValidationStyles(btn, key, correctKey, selectedKey) {
        // Clear old states
        btn.classList.remove('correct', 'wrong', 'selected');

        // Disable interaction
        btn.style.cursor = 'default';

        // Highlight logic
        if (key === correctKey) {
            btn.classList.add('correct');
        } else if (key === selectedKey && key !== correctKey) {
            btn.classList.add('wrong');
        } else if (key === selectedKey) {
            // Selected and correct (covered by first if, but adds selected class for clarity if needed)
            btn.classList.add('correct');
        }

        // Dim non-selected, non-correct options
        if (key !== correctKey && key !== selectedKey) {
            btn.style.opacity = '0.5';
        }
    }

    function toggleExplanation() {
        dom.explanationPanel.classList.toggle('hidden');
    }

    // Helpers
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
    dom.prevBtn.addEventListener('click', () => loadQuestion(currentIndex - 1));
    dom.nextBtn.addEventListener('click', () => loadQuestion(currentIndex + 1));
    dom.checkBtn.addEventListener('click', checkAnswer);
    dom.showExplBtn.addEventListener('click', toggleExplanation);

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') dom.nextBtn.click();
        if (e.key === 'ArrowLeft') dom.prevBtn.click();
    });
});
