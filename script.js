const questions = [
    {
        question: "Sheeg caasimadda dalka Soomaaliya?",
        options: ["Hargeysa", "Muqdisho", "Kismaayo", "Boosaaso"],
        correct: 1
    },
    {
        question: "Maxay u taagan tahay xiddigta cad ee shanta gees leh ee calanka Soomaaliya?",
        options: ["5-ta tiir ee Islaamka", "5-ta beelood ee waaweyn", "5-ta dhul ee Soomaalidu degto", "5-ta sano ee halgankii xornimada"],
        correct: 2
    },
    {
        question: "Sanadkee ayay Jamhuuriyadda Soomaaliya xornimada qaadatay?",
        options: ["1950", "1960", "1970", "1980"],
        correct: 1
    },
    {
        question: "Waa maxay luuqadda labaad ee Soomaaliya?",
        options: ["Ingiriis", "Talanti", "Carabi", "Amxaari"],
        correct: 2
    },
    {
        question: "Soomaaliya waxay leedahay xeebta ugu dheer qaaradda Afrika. Qiyaasta dhererkeedu waa intee?",
        options: ["1,500 km", "2,300 km", "3,333 km", "4,500 km"],
        correct: 2
    },
    {
        question: "Maxay tahay lacagta rasmiga ah ee dalka Soomaaliya?",
        options: ["Doolar", "Shilin Soomaali", "Riyaal", "Diinaar"],
        correct: 1
    },
    {
        question: "Maxaa loogu naanaysaa Soomaaliya qaab-dhismeedka dhulkeeda awgeed?",
        options: ["Luulada Afrika", "Geeska Afrika", "Jasiiradda Nabadda", "Xeebta Dahabka"],
        correct: 1
    },
    {
        question: "Kee baa ka mid ah labada webi ee ugu waaweyn Soomaaliya?",
        options: ["Niil", "Zambezi", "Shabeelle", "Koongo"],
        correct: 2
    },
    {
        question: "Maxaa la yiraahdaa guriga dhaqanka ee dadka reer miyiga ah?",
        options: ["Aqal", "Manyatta", "Yurt", "Tipi"],
        correct: 0
    },
    {
        question: "Soomaaliya waa dalka ugu horreeya caalamka ee dhoofiya dhowr nooc oo foox ah, kee baa ugu caansan?",
        options: ["Canbar", "Beeyo/Lubaann", "Cinjir", "Xabagta geedka Pain-ka"],
        correct: 1
    },
    {
        question: "Goobta taariikhiga ah ee 'Laas Geel' waxay ku taal gobolkee?",
        options: ["Bari", "Somaliland", "Shabeellaha Hoose", "Gedo"],
        correct: 1
    },
    {
        question: "Kumaa ahaa hoggaamiyihii halyeyga ahaa ee dhaqdhaqaaqa Daraawiishta?",
        options: ["Aadan Cadde", "Siyaad Barre", "Sayid Maxamed Cabdulle Xasan", "Cabdiraashiid Cali Sharmaarke"],
        correct: 2
    },
    {
        question: "Sheeg buurta ugu dheer dalka Soomaaliya?",
        options: ["Buurta Kenya", "Buurta Shimbiris", "Buurta Kilimanjaro", "Buurta Elgon"],
        correct: 1
    },
    {
        question: "Sheeg magaalo ku taalla koonfurta Soomaaliya oo leh deked weyn?",
        options: ["Boosaaso", "Berbera", "Kismaayo", "Garoowe"],
        correct: 2
    },
    {
        question: "Maxaa la yiraahdaa quraacda caanka ah ee Soomaalida?",
        options: ["Canjeero", "Chapati", "Injera", "Mofollet"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const screens = [startScreen, quizScreen, resultScreen];

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const timerBar = document.getElementById('timer-bar') || createTimerBar();
const timerText = document.getElementById('timer-text') || createTimerText();
const questionCount = document.getElementById('question-count');
const currentScoreElement = document.getElementById('current-score');

const finalScoreElement = document.getElementById('final-score');
const totalScoreElement = document.getElementById('total-score');
const finalMessage = document.getElementById('final-message');

// Music Elements
const musicBtn = document.getElementById('music-toggle');
const scWidget = SC.Widget(document.getElementById('sc-widget'));
let isMusicPlaying = false;

// TO ADD YOUR OWN SOUNDCLOUD SONG:
// 1. Go to SoundCloud and copy the URL of the song
// 2. Open index.html
// 3. Find the <iframe> tag (around line 30)
// 4. Replace the URL after 'url=' in the src attribute
// Example: src="https://w.soundcloud.com/player/?url=YOUR_NEW_LINK_HERE&..."

function createTimerBar() {
    const bar = document.createElement('div');
    bar.id = 'timer-bar';
    bar.className = 'timer-bar';
    document.querySelector('.progress-container').after(bar);
    return bar;
}

function createTimerText() {
    const text = document.createElement('span');
    text.id = 'timer-text';
    text.className = 'timer-text';
    document.querySelector('.stats').appendChild(text);
    return text;
}

// Event Listeners
startBtn.addEventListener('click', () => {
    startQuiz();
    if (!isMusicPlaying) toggleMusic(); // Try to start music on first interaction
});

musicBtn.addEventListener('click', toggleMusic);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startQuiz);

// Functions

function toggleMusic() {
    if (isMusicPlaying) {
        scWidget.pause();
        musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        musicBtn.classList.remove('playing');
    } else {
        scWidget.play();
        musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        musicBtn.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
}

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    currentScoreElement.innerText = score;
    showScreen(quizScreen);
    loadQuestion();
}

function showScreen(screenToShow) {
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });

    screenToShow.classList.remove('hidden');
    // Small delay for animation
    setTimeout(() => {
        screenToShow.classList.add('active');
    }, 10);
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 20;
    updateTimerUI();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.innerText = `⏱ ${timeLeft}s`;
    const percentage = (timeLeft / 20) * 100;
    timerBar.style.width = `${percentage}%`;

    if (timeLeft <= 5) {
        timerBar.style.background = '#ef4444';
        timerText.style.color = '#ef4444';
    } else {
        timerBar.style.background = '#4189DD';
        timerText.style.color = '#6b7280';
    }
}

function handleTimeUp() {
    const correctIndex = questions[currentQuestionIndex].correct;
    const allOptions = optionsContainer.children;

    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add('disabled');
        if (i === correctIndex) {
            allOptions[i].classList.add('correct');
        }
    }

    nextBtn.classList.remove('hidden');
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Update UI
    questionText.innerText = currentQuestion.question;
    questionCount.innerText = `Su'aasha ${currentQuestionIndex + 1}/${questions.length}`;

    // Update Progress Bar
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Reset State
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';

    // Create Options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.style.animationDelay = `${index * 0.1}s`;
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function selectAnswer(selectedIndex, selectedButton) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    const allOptions = optionsContainer.children;

    // Disable all options
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add('disabled');
        allOptions[i].onclick = null;

        if (i === correctIndex) {
            allOptions[i].classList.add('correct');
        }
    }

    if (selectedIndex === correctIndex) {
        score++;
        currentScoreElement.innerText = score;
        selectedButton.classList.add('correct-choice');
        selectedButton.innerHTML += ' <i class="fas fa-check"></i>';
    } else {
        selectedButton.classList.add('incorrect');
        selectedButton.innerHTML += ' <i class="fas fa-times"></i>';
    }

    nextBtn.classList.remove('hidden');
}

function showResults() {
    clearInterval(timer);
    showScreen(resultScreen);

    finalScoreElement.innerText = score;
    totalScoreElement.innerText = questions.length;

    if (score === questions.length) {
        finalMessage.innerText = "Guul! You're a Somali Legend! 🇸🇴👑";
    } else if (score >= questions.length * 0.7) {
        finalMessage.innerText = "Excellent! You know Somalia very well! 🌟";
    } else if (score >= questions.length / 2) {
        finalMessage.innerText = "Good job! You're well on your way. 👍";
    } else {
        finalMessage.innerText = "Somalia has a deep history. Keep exploring! 📚";
    }
}
