const normalQuestions = [
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

const hardQuestions = [
    { question: "Sanadkee ayaa la dhisay ururka dhalinyarada Soomaaliyeed ee SYL?", options: ["1941", "1943", "1945", "1948"], correct: 1 },
    { question: "Waa kuwee labada wadan ee Soomaaliya xuduudka la leh dhinaca galbeed?", options: ["Kenya & Itoobiya", "Itoobiya & Jabuuti", "Kenya & Jabuuti", "Itoobiya & Suudaan"], correct: 1 },
    { question: "Magaca calanka Soomaaliya waxaa bixiyay halyeygii la oron jiray?", options: ["Aadan Cadde", "Maxamed Cawaale Liibaan", "Cabdullaahi Ciise", "Siyaad Barre"], correct: 1 },
    { question: "Gobolka ugu bedka (size) weyn dalka Soomaaliya waa gobolkee?", options: ["Gedo", "Bari", "Mudug", "Sool"], correct: 1 },
    { question: "Sanadkee ayuu geeriyooday Sayid Maxamed Cabdulle Xasan?", options: ["1910", "1915", "1920", "1925"], correct: 2 },
    { question: "Caasimadii hore ee Boqortooyadii Adal waxay ahayd?", options: ["Muqdisho", "Saylac", "Hargeysa", "Harar"], correct: 1 },
    { question: "Boqortooyadii Ajuuraan waxay caan ku ahayd nidaamka maxay?", options: ["Nidaamka Beeraha", "Nidaamka Biyaha iyo Ceelasha", "Nidaamka Ganacsiga", "Nidaamka Ciidanka"], correct: 1 },
    { question: "Sanadkee ayay Soomaaliya ku biirtay Jaamacadda Carabta?", options: ["1960", "1970", "1974", "1980"], correct: 2 },
    { question: "Magaca webiga mara magaalada Luuq ee gobolka Gedo?", options: ["Shabeelle", "Juba", "Niil", "Tana"], correct: 1 },
    { question: "Goobta taariikhiga ah ee 'Laas Geel' maxay caan ku tahay?", options: ["Dagaaladii hore", "Farshaxanka dhagaxa qadiimiga ah", "Dhismaha daaraha", "Ganacsiga fooxa"], correct: 1 },
    { question: "Sanadkee ayay Jabuuti xornimada ka qaadatay Faransiiska?", options: ["1960", "1970", "1977", "1980"], correct: 2 },
    { question: "Magaca gumeystihii gacanta ku hayay koonfurta Soomaaliya ka hor 1960?", options: ["Ingiriis", "Fransiis", "Talyaaniga", "Portugal"], correct: 2 },
    { question: "Muxuu ahaa magacii hore ee caasimadda Mogadishu?", options: ["Hamar", "Banaadir", "Saylac", "Berbera"], correct: 0 },
    { question: "Goobta 'Dallo' oo caan ku ah dhirta iyo qabowga waxay ku taal gobolkee?", options: ["Bari", "Sanaag", "Sool", "Woqooyi Galbeed"], correct: 1 },
    { question: "Sanadkee ayaa si rasmi ah loo qoray far Soomaaliga?", options: ["1960", "1969", "1972", "1975"], correct: 2 },
    { question: "Magaca boqorkii xukumayey Majeerteenia ee la dagaalamay Talyaaniga?", options: ["Boqor Cismaan Maxamuud", "Garaad Faarax", "Ugaas Nuur", "Suldaan Timacadde"], correct: 0 },
    { question: "Sanadkee ayaa la dilay Madaxweyne Cabdirashiid Cali Sharmaarke?", options: ["1960", "1964", "1969", "1972"], correct: 2 },
    { question: "Magaca xeebta u dhexaysa Berbera iyo Boosaaso waxaa loo yaqaan?", options: ["Guban", "Oogo", "Haud", "Nugaal"], correct: 0 },
    { question: "Sanadkee ayuu dhacay dagaalkii weynaa ee u dhexeeyay Soomaaliya iyo Itoobiya?", options: ["1964", "1977", "1982", "1991"], correct: 1 },
    { question: "Magaca jaziiradaha ku yaal koonfurta Soomaaliya?", options: ["Bajuni", "Suqadara", "Zanzibar", "Seychelles"], correct: 0 },
    { question: "Halkee ayuu ku dhashay Madaxweynihii ugu horeeyay ee Soomaaliya Aadan Cadde?", options: ["Muqdisho", "Beletweyne", "Kismaayo", "Baydhabo"], correct: 1 },
    { question: "Muxuu ahaa magaca calankii Soomaaliya ka hor intaan kan hadda la qaadan?", options: ["Calankii SYL", "Calankii Talyaaniga", "Calan guduudan", "Calan madow"], correct: 0 },
    { question: "Dekedda labaad ee ugu weyn dalka Soomaaliya waa dekedda?", options: ["Kismaayo", "Boosaaso", "Berbera", "Muqdisho"], correct: 2 },
    { question: "Waa maxay magaca xafiiska lagu kaydiyo taariikhda qaranka?", options: ["Maktabada", "Kaydka Qaranka", "Matxafka", "Wasaaradda"], correct: 2 },
    { question: "Geesigii Sheekh Xasan Barsane wuxuu la dagaalamay gumeystihii?", options: ["Ingiriiska", "Talyaaniga", "Fransiiska", "Itoobiya"], correct: 1 },
    { question: "Sanadkee ayay Soomaaliya noqotay Jamhuuriyad?", options: ["1950", "1954", "1960", "1964"], correct: 2 },
    { question: "Magaca dooxada weyn ee marta bartamaha Soomaaliya?", options: ["Nugaal", "Dharoor", "Juba", "Shabeelle"], correct: 0 },
    { question: "Waa maxay magaca rasmiga ah ee calanka buluugga ah?", options: ["Samatalis", "Buluugle", "Xiddigta Bariga", "Midnimada"], correct: 1 },
    { question: "Halkee ayay ku taal dhismaha 'Saliid' ee qadiimiga ah?", options: ["Muqdisho", "Merca", "Baraawe", "Kismaayo"], correct: 2 },
    { question: "Sanadkee ayaa la qabtay shirkii Carta ee lagu dhisay dowladdii KMG ahayd?", options: ["1991", "1995", "2000", "2004"], correct: 2 }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
let isHardMode = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const screens = [startScreen, quizScreen, resultScreen];

const startNormalBtn = document.getElementById('start-normal-btn');
const startHardBtn = document.getElementById('start-hard-btn');
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

// Shuffle Function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event Listeners
startNormalBtn.addEventListener('click', () => {
    isHardMode = false;
    document.body.classList.remove('hard-mode');
    // Change song back if needed (Normal)
    scWidget.load("https://soundcloud.com/kigaano-takar/doni-b-ya-isgaare-somali-song", { auto_play: true });
    startQuiz();
});

startHardBtn.addEventListener('click', () => {
    isHardMode = true;
    document.body.classList.add('hard-mode');

    // Set song to Cabsi Cabsi (Hard)
    // We update the src and the internal state
    const cabsiUrl = "https://soundcloud.com/kigaano-takar/doni-b-ya-isgaare-somali-song"; 
    scWidget.load(cabsiUrl, {
        auto_play: true,
        show_artwork: false,
        callback: () => {
            scWidget.play();
            isMusicPlaying = true;
            musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            musicBtn.classList.add('playing');
        }
    });

    // Fallback if callback doesn't fire as expected
    setTimeout(() => {
        scWidget.play();
        isMusicPlaying = true;
        musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        musicBtn.classList.add('playing');
    }, 1000);

    startQuiz();
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
restartBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

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

    // Set and Shuffle Questions
    if (isHardMode) {
        questions = JSON.parse(JSON.stringify(hardQuestions));
    } else {
        questions = JSON.parse(JSON.stringify(normalQuestions));
    }
    shuffle(questions);

    showScreen(quizScreen);
    loadQuestion();
}

function showScreen(screenToShow) {
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });

    screenToShow.classList.remove('hidden');
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
        timerBar.style.background = isHardMode ? '#ff0000' : '#4189DD';
        timerText.style.color = isHardMode ? '#ff3333' : '#6b7280';
    }
}

function handleTimeUp() {
    const currentQuestion = questions[currentQuestionIndex];
    // Find index of correct answer in current (potentially shuffled) options
    const correctOptionText = currentQuestion.options[currentQuestion.correct];
    const allOptions = optionsContainer.children;

    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add('disabled');
        if (allOptions[i].innerText.trim() === correctOptionText.trim()) {
            allOptions[i].classList.add('correct');
        }
    }

    nextBtn.classList.remove('hidden');
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Shuffle options and update correct index
    const originalOptions = [...currentQuestion.options];
    const correctText = originalOptions[currentQuestion.correct];
    shuffle(currentQuestion.options);
    currentQuestion.correct = currentQuestion.options.indexOf(correctText);

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
        finalMessage.innerText = isHardMode ? "WAXAD TAHAY GEESI! 🇸🇴🔥🔥" : "Guul! You're a Somali Legend! 🇸🇴👑";
    } else if (score >= questions.length * 0.7) {
        finalMessage.innerText = "Excellent! You know Somalia very well! 🌟";
    } else if (score >= questions.length / 2) {
        finalMessage.innerText = "Good job! You're well on your way. 👍";
    } else {
        finalMessage.innerText = "Somalia has a deep history. Keep exploring! 📚";
    }
}

