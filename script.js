const TEXTS = {
    ru: {
        title: 'Умный тренажёр арифметики',
        language: 'Язык:',
        module: 'Модуль:',
        multiplication: 'Таблица умножения',
        addition: 'Сложение трёхзначных',
        subtraction: 'Вычитание трёхзначных',
        division: 'Деление',
        combined: 'Смешанные операции',
        percentages: 'Проценты',
        taskPlaceholder: 'Нажмите Начать, чтобы получить задачу',
        check: 'Проверить',
        start: 'Начать',
        stats: 'Статистика',
        moduleStats: 'Статистика по модулям',
        currentLevel: 'Текущий уровень сложности:',
        avgTime: 'Среднее время ответа:',
        bestTime: 'Лучшее время:',
        correctCount: 'Количество правильных ответов:',
        errorCount: 'Количество ошибок:',
        achievements: 'Достижения',
        errorLog: 'Журнал ошибок',
        recommendations: 'Рекомендации',
        recText: 'Решайте задачи, чтобы получить рекомендации.',
        progress: 'Прогресс',
        resetProgress: 'Сбросить прогресс',
        exportStats: 'Экспорт статистики',
        practiceErrors: 'Повторить ошибки',
        volumeControl: 'Громкость звуков:',
        tour: 'Добро пожаловать! Выберите модуль, введите ответ и нажмите Enter или Проверить. Ошибки помогут улучшить навыки!',
        tourClose: 'Понятно',
        inputError: 'Пожалуйста, введите число!',
        rangeError: 'Число должно быть от 0 до 9999!',
        correct: 'Правильно! Время: {time} сек',
        wrong: 'Неправильно! Правильный ответ: {answer}',
        voiceError: 'Голосовой ввод не поддерживается в вашем браузере',
        weakTask: 'Вы ошибаетесь в примерах',
        errors: 'ошибок',
        practice: 'Потренируйте эту комбинацию.',
        tooManyErrors: 'Слишком много ошибок. Попробуйте замедлиться и сосредоточиться на точности.',
        slowResponse: 'Ваше время ответа',
        aboveGoal: 'выше цели',
        seconds: 'сек',
        practiceModule: 'Повторяйте',
        multiplicationTable: 'таблицу умножения',
        divisionTable: 'таблицу деления',
        combinedOperations: 'смешанные операции',
        percentagesTable: 'проценты',
        arithmetic: 'арифметику',
        forSpeed: 'для скорости.',
        greatJob: 'Отличная работа! Продолжайте, чтобы закрепить навыки.',
        memoryTip: 'Для улучшения памяти попробуйте визуализировать таблицу умножения или использовать мнемонические правила.',
        exp: 'Опыт',
        level: 'Уровень',
        correctAnswer: 'Правильно',
        time: 'Время',
        resetConfirm: 'Вы уверены, что хотите сбросить весь прогресс?',
        achievementEarned: 'Достижение получено',
        motivationMessages: [
            'Не сдавайтесь! Каждая ошибка — это шаг к успеху.',
            'Вы делаете прогресс! Попробуйте ещё раз.',
            'Ошибки помогают учиться. Продолжайте пытаться!',
            'Вы почти у цели! Сосредоточьтесь и попробуйте снова.'
        ],
        moduleStatsCorrect: 'Правильных',
        moduleStatsErrors: 'Ошибок',
        moduleStatsErrorRate: 'Процент ошибок',
        moduleStatsAvgTime: 'Среднее время'
    },
    en: {
        title: 'Smart Arithmetic Trainer',
        language: 'Language:',
        module: 'Module:',
        multiplication: 'Multiplication Table',
        addition: 'Three-Digit Addition',
        subtraction: 'Three-Digit Subtraction',
        division: 'Division',
        combined: 'Combined Operations',
        percentages: 'Percentages',
        taskPlaceholder: 'Click Start to get a task',
        check: 'Check',
        start: 'Start',
        stats: 'Statistics',
        moduleStats: 'Module Statistics',
        currentLevel: 'Current difficulty level:',
        avgTime: 'Average response time:',
        bestTime: 'Best time:',
        correctCount: 'Number of correct answers:',
        errorCount: 'Number of errors:',
        achievements: 'Achievements',
        errorLog: 'Error Log',
        recommendations: 'Recommendations',
        recText: 'Solve tasks to get recommendations.',
        progress: 'Progress',
        resetProgress: 'Reset Progress',
        exportStats: 'Export Statistics',
        practiceErrors: 'Practice Errors',
        volumeControl: 'Sound Volume:',
        tour: 'Welcome! Choose a module, enter your answer, and press Enter or Check. Mistakes help you improve!',
        tourClose: 'Got it',
        inputError: 'Please enter a number!',
        rangeError: 'Number must be between 0 and 9999!',
        correct: 'Correct! Time: {time} sec',
        wrong: 'Wrong! Correct answer: {answer}',
        voiceError: 'Voice input is not supported in your browser',
        weakTask: 'You make mistakes in tasks',
        errors: 'errors',
        practice: 'Practice this combination.',
        tooManyErrors: 'Too many errors. Try slowing down and focusing on accuracy.',
        slowResponse: 'Your response time',
        aboveGoal: 'is above the goal',
        seconds: 'sec',
        practiceModule: 'Practice',
        multiplicationTable: 'the multiplication table',
        divisionTable: 'the division table',
        combinedOperations: 'combined operations',
        percentagesTable: 'percentages',
        arithmetic: 'arithmetic',
        forSpeed: 'for speed.',
        greatJob: 'Great job! Keep going to reinforce your skills.',
        memoryTip: 'To improve memory, try visualizing the multiplication table or using mnemonic rules.',
        exp: 'EXP',
        level: 'Level',
        correctAnswer: 'Correct',
        time: 'Time',
        resetConfirm: 'Are you sure you want to reset all progress?',
        achievementEarned: 'Achievement Earned',
        motivationMessages: [
            'Don’t give up! Every mistake is a step toward success.',
            'You’re making progress! Try again.',
            'Mistakes help you learn. Keep trying!',
            'You’re almost there! Focus and try again.'
        ],
        moduleStatsCorrect: 'Correct',
        moduleStatsErrors: 'Errors',
        moduleStatsErrorRate: 'Error Rate',
        moduleStatsAvgTime: 'Average Time'
    }
};

let currentLang = localStorage.getItem('mathTrainerLang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mathTrainerLang', lang);
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (elem.tagName === 'LABEL' || elem.tagName === 'H1' || elem.tagName === 'H3' || elem.tagName === 'BUTTON') {
            elem.textContent = TEXTS[lang][key];
        } else if (elem.tagName === 'OPTION') {
            elem.textContent = TEXTS[lang][key];
        } else if (elem.tagName === 'P' && key !== 'recText') {
            const span = elem.querySelector('span');
            if (span) {
                elem.childNodes[0].textContent = TEXTS[lang][key] + ' ';
            } else {
                elem.textContent = TEXTS[lang][key];
            }
        } else if (key === 'taskPlaceholder') {
            if (!elem.textContent.includes('=')) {
                elem.textContent = TEXTS[lang][key];
            }
        } else if (key === 'recText') {
            if (!elem.innerHTML.includes('<br>')) {
                elem.textContent = TEXTS[lang][key];
            }
        }
    });
    updateRecommendations();
    updateModuleStats();
    updateProgressChart();
}

let currentTask = { a: 0, b: 0, c: 0, correctAnswer: 0, module: '' };
let errorLog = JSON.parse(localStorage.getItem('mathTrainerErrorLog')) || [];
let responseTimes = JSON.parse(localStorage.getItem('mathTrainerResponseTimes')) || [];
let correctCount = parseInt(localStorage.getItem('mathTrainerCorrectCount')) || 0;
let errorCount = parseInt(localStorage.getItem('mathTrainerErrorCount')) || 0;
let exp = parseInt(localStorage.getItem('mathTrainerEXP')) || 0;
let playerLevel = Math.floor(exp / 100) + 1;
let startTime;
let currentLevel = parseInt(localStorage.getItem('mathTrainerCurrentLevel')) || 1;
let achievements = JSON.parse(localStorage.getItem('mathTrainerAchievements')) || [];
let taskHistory = JSON.parse(localStorage.getItem('mathTrainerTaskHistory')) || {};
let lastMotivationTime = 0;
let saveTimeout;
let progressChart;
let deferredPrompt;

const correctSound = new Audio('https://www.soundjay.com/buttons/button-3.mp3');
const wrongSound = new Audio('https://www.soundjay.com/buttons/button-2.mp3');

// Инициализация громкости из localStorage (по умолчанию 50%)
let soundVolume = parseInt(localStorage.getItem('mathTrainerSoundVolume')) || 50;
correctSound.volume = soundVolume / 100;
wrongSound.volume = soundVolume / 100;

function updateVolume(value) {
    soundVolume = parseInt(value);
    correctSound.volume = soundVolume / 100;
    wrongSound.volume = soundVolume / 100;
    localStorage.setItem('mathTrainerSoundVolume', soundVolume);
}

const levelSettings = {
    multiplication: [
        { maxNum: 5, timeGoal: 5 },
        { maxNum: 8, timeGoal: 4 },
        { maxNum: 10, timeGoal: 3 },
        { maxNum: 12, timeGoal: 2.5 },
        { maxNum: 15, timeGoal: 2 }
    ],
    addition: [
        { minNum: 100, maxNum: 200, timeGoal: 10 },
        { minNum: 100, maxNum: 300, timeGoal: 8 },
        { minNum: 100, maxNum: 500, timeGoal: 6 },
        { minNum: 100, maxNum: 800, timeGoal: 5 },
        { minNum: 100, maxNum: 999, timeGoal: 4 }
    ],
    subtraction: [
        { minNum: 100, maxNum: 200, timeGoal: 10 },
        { minNum: 100, maxNum: 300, timeGoal: 8 },
        { minNum: 100, maxNum: 500, timeGoal: 6 },
        { minNum: 100, maxNum: 800, timeGoal: 5 },
        { minNum: 100, maxNum: 999, timeGoal: 4 }
    ],
    division: [
        { maxNum: 5, timeGoal: 5 },
        { maxNum: 8, timeGoal: 4 },
        { maxNum: 10, timeGoal: 3 },
        { maxNum: 12, timeGoal: 2.5 },
        { maxNum: 15, timeGoal: 2 }
    ],
    combined: [
        { maxNum: 5, timeGoal: 8 },
        { maxNum: 8, timeGoal: 7 },
        { maxNum: 10, timeGoal: 6 },
        { maxNum: 12, timeGoal: 5 },
        { maxNum: 15, timeGoal: 4 }
    ],
    percentages: [
        { maxPercent: 50, timeGoal: 15 },
        { maxPercent: 100, timeGoal: 12 },
        { maxPercent: 100, timeGoal: 10 },
        { maxPercent: 100, timeGoal: 8 },
        { maxPercent: 100, timeGoal: 6 }
    ]
};

const achievementGoals = {
    global: [
        { id: 'first10', name: { ru: 'Новичок', en: 'Beginner' }, condition: () => correctCount >= 10, reward: { ru: 'Решено 10 задач!', en: 'Solved 10 tasks!' } },
        { id: 'fast5', name: { ru: 'Скоростной', en: 'Speedy' }, condition: () => responseTimes.some(t => t < 3), reward: { ru: 'Ответ быстрее 3 секунд!', en: 'Answer faster than 3 seconds!' } },
        { id: 'level3', name: { ru: 'Мастер', en: 'Master' }, condition: () => currentLevel >= 3, reward: { ru: 'Достигнут 3-й уровень сложности!', en: 'Reached 3rd difficulty level!' } },
        { id: 'noErrors', name: { ru: 'Безупречный', en: 'Flawless' }, condition: () => correctCount >= 20 && errorCount === 0, reward: { ru: '20 правильных ответов без ошибок!', en: '20 correct answers without errors!' } },
        { id: 'hundred', name: { ru: 'Чемпион', en: 'Champion' }, condition: () => correctCount >= 100, reward: { ru: 'Решено 100 задач!', en: 'Solved 100 tasks!' } }
    ],
    multiplication: [
        { id: 'mult10', name: { ru: 'Умножайка', en: 'Multiplier' }, condition: () => (taskHistory['multiplication']?.correct || 0) >= 10, reward: { ru: '10 правильных умножений!', en: '10 correct multiplications!' } },
        { id: 'mult100', name: { ru: 'Мастер умножения', en: 'Multiplication Master' }, condition: () => (taskHistory['multiplication']?.correct || 0) >= 100, reward: { ru: '100 правильных умножений!', en: '100 correct multiplications!' } }
    ],
    addition: [
        { id: 'add10', name: { ru: 'Сумматор', en: 'Adder' }, condition: () => (taskHistory['addition']?.correct || 0) >= 10, reward: { ru: '10 правильных сложений!', en: '10 correct additions!' } }
    ],
    subtraction: [
        { id: 'sub10', name: { ru: 'Вычитатель', en: 'Subtractor' }, condition: () => (taskHistory['subtraction']?.correct || 0) >= 10, reward: { ru: '10 правильных вычитаний!', en: '10 correct subtractions!' } }
    ],
    division: [
        { id: 'div10', name: { ru: 'Делитель', en: 'Divider' }, condition: () => (taskHistory['division']?.correct || 0) >= 10, reward: { ru: '10 правильных делений!', en: '10 correct divisions!' } }
    ],
    combined: [
        { id: 'comb10', name: { ru: 'Комбинатор', en: 'Combiner' }, condition: () => (taskHistory['combined']?.correct || 0) >= 10, reward: { ru: '10 правильных смешанных операций!', en: '10 correct combined operations!' } }
    ],
    percentages: [
        { id: 'perc10', name: { ru: 'Процентщик', en: 'Percent Master' }, condition: () => (taskHistory['percentages']?.correct || 0) >= 10, reward: { ru: '10 правильных задач на проценты!', en: '10 correct percentage tasks!' } }
    ]
};

function saveProgress() {
    localStorage.setItem('mathTrainerErrorLog', JSON.stringify(errorLog.slice(-50)));
    localStorage.setItem('mathTrainerResponseTimes', JSON.stringify(responseTimes.slice(-100)));
    localStorage.setItem('mathTrainerCorrectCount', correctCount);
    localStorage.setItem('mathTrainerErrorCount', errorCount);
    localStorage.setItem('mathTrainerEXP', exp);
    localStorage.setItem('mathTrainerCurrentLevel', currentLevel);
    localStorage.setItem('mathTrainerAchievements', JSON.stringify(achievements));
    localStorage.setItem('mathTrainerTaskHistory', JSON.stringify(taskHistory));
}

function syncWithBackend() {
    // Заглушка для будущей синхронизации с сервером
    console.log('Синхронизация с сервером... (функция заглушка)');
}

function debouncedSaveProgress() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        saveProgress();
        if (navigator.onLine) syncWithBackend();
    }, 1000);
}

function resetProgress() {
    if (confirm(TEXTS[currentLang].resetConfirm || 'Вы уверены, что хотите сбросить весь прогресс?')) {
        localStorage.clear();
        location.reload();
    }
}

function exportStats() {
    const data = {
        correctCount,
        errorCount,
        exp,
        playerLevel,
        currentLevel,
        achievements,
        taskHistory
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'math_trainer_stats.json';
    a.click();
    URL.revokeObjectURL(url);
}

function showTour() {
    if (!localStorage.getItem('mathTrainerTourShown')) {
        document.getElementById('tour').style.display = 'block';
        localStorage.setItem('mathTrainerTourShown', 'true');
    }
}

function closeTour() {
    document.getElementById('tour').style.display = 'none';
}

function startVoiceInput() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = currentLang === 'ru' ? 'ru-RU' : 'en-US';
        recognition.onresult = (e) => {
            const spokenText = e.results[0][0].transcript;
            document.getElementById('answer').value = parseInt(spokenText) || '';
            checkAnswer();
        };
        recognition.onerror = () => {
            document.getElementById('result').textContent = TEXTS[currentLang].voiceError;
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').classList.add('wrong-answer');
            setTimeout(() => document.getElementById('result').classList.remove('wrong-answer'), 500);
        };
        recognition.start();
    } else {
        document.getElementById('result').textContent = TEXTS[currentLang].voiceError;
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').classList.add('wrong-answer');
        setTimeout(() => document.getElementById('result').classList.remove('wrong-answer'), 500);
    }
}

function addEXP(points) {
    exp += points;
    playerLevel = Math.floor(exp / 100) + 1;
    const progress = (exp % 100) / 100 * 100;
    document.getElementById('expProgress').style.width = `${progress}%`;
    localStorage.setItem('mathTrainerEXP', exp);
    document.getElementById('expCounter').textContent = `${TEXTS[currentLang].exp || 'Опыт'}: ${exp} | ${TEXTS[currentLang].level || 'Уровень'}: ${playerLevel}`;
}

function loadChartLibrary(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateProgressChart() {
    const chartContainer = document.getElementById('progressChartContainer');
    if (!chartContainer || !isElementInViewport(chartContainer)) return; // Проверяем видимость

    if (typeof Chart === 'undefined') {
        loadChartLibrary(() => updateProgressChart());
        return;
    }

    const moduleStats = taskHistory[currentTask.module] || { responseTimes: [] };
    const labels = moduleStats.responseTimes.map((_, i) => i + 1);
    const data = moduleStats.responseTimes;

    if (progressChart) progressChart.destroy();
    const ctx = document.getElementById('progressChart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.slice(-20),
            datasets: [{
                label: TEXTS[currentLang].responseTime || 'Время ответа (сек)',
                data: data.slice(-20),
                borderColor: '#007bff',
                fill: false
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function updateModuleStats() {
    const statsDiv = document.getElementById('moduleStatsContent');
    let html = '';
    const modules = ['multiplication', 'addition', 'subtraction', 'division', 'combined', 'percentages'];
    modules.forEach(module => {
        const stats = taskHistory[module] || { correct: 0, errors: 0, responseTimes: [] };
        const errorRate = stats.correct + stats.errors > 0 ? ((stats.errors / (stats.correct + stats.errors)) * 100).toFixed(1) : 0;
        const avgTime = stats.responseTimes.length > 0 ? (stats.responseTimes.reduce((a, b) => a + b, 0) / stats.responseTimes.length).toFixed(2) : 0;
        html += `<p><strong>${TEXTS[currentLang][module] || module}:</strong> ${TEXTS[currentLang].moduleStatsCorrect} ${stats.correct}, ${TEXTS[currentLang].moduleStatsErrors} ${stats.errors}, ${TEXTS[currentLang].moduleStatsErrorRate} ${errorRate}%, ${TEXTS[currentLang].moduleStatsAvgTime} ${avgTime} ${TEXTS[currentLang].seconds}</p>`;
    });
    statsDiv.innerHTML = html;
}

function showAchievementNotification(achievement) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(`${TEXTS[currentLang].achievementEarned || 'Достижение получено'}: ${achievement.name[currentLang]}`, {
            body: achievement.reward[currentLang],
            icon: '/icon-192x192.png'
        });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(`${TEXTS[currentLang].achievementEarned || 'Достижение получено'}: ${achievement.name[currentLang]}`, {
                    body: achievement.reward[currentLang],
                    icon: '/icon-192x192.png'
                });
            }
        });
    }
}

function practiceErrors() {
    const weakTasks = getWeakTasks();
    if (weakTasks.length === 0) {
        document.getElementById('result').textContent = TEXTS[currentLang].recText || 'Решайте задачи, чтобы получить рекомендации.';
        return;
    }
    const taskKey = weakTasks[0];
    let a, b, c, taskText, correctAnswer;
    if (taskKey.includes('×')) {
        [a, b] = taskKey.split('×').map(Number);
        taskText = `${a} × ${b} = ?`;
        correctAnswer = a * b;
        currentTask = { a, b, c: 0, correctAnswer, module: 'multiplication' };
    } else if (taskKey.includes('÷')) {
        [a, b] = taskKey.split('÷').map(Number);
        taskText = `${a} ÷ ${b} = ?`;
        correctAnswer = a / b;
        currentTask = { a, b, c: 0, correctAnswer, module: 'division' };
    } else if (taskKey.includes('+') && taskKey.includes(')×')) {
        const parts = taskKey.match(/\((\d+)\+(\d+)\)×(\d+)/);
        a = parseInt(parts[1]);
        b = parseInt(parts[2]);
        c = parseInt(parts[3]);
        taskText = `(${a} + ${b}) × ${c} = ?`;
        correctAnswer = (a + b) * c;
        currentTask = { a, b, c, correctAnswer, module: 'combined' };
    } else if (taskKey.includes('%')) {
        const parts = taskKey.match(/(\d+)%(\d+)/);
        b = parseInt(parts[1]);
        a = parseInt(parts[2]);
        taskText = `${b}% от ${a} = ?`;
        correctAnswer = Math.round(a * b / 100);
        currentTask = { a, b, c: 0, correctAnswer, module: 'percentages' };
    } else if (taskKey.includes('+')) {
        [a, b] = taskKey.split('+').map(Number);
        taskText = `${a} + ${b} = ?`;
        correctAnswer = a + b;
        currentTask = { a, b, c: 0, correctAnswer, module: 'addition' };
    } else if (taskKey.includes('-')) {
        [a, b] = taskKey.split('-').map(Number);
        taskText = `${a} - ${b} = ?`;
        correctAnswer = a - b;
        currentTask = { a, b, c: 0, correctAnswer, module: 'subtraction' };
    }
    document.getElementById('task').textContent = taskText;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    startTime = performance.now();
}

function generateTask() {
    const module = document.getElementById('module').value;
    const levelConfig = levelSettings[module][currentLevel - 1];
    let a, b, c, taskText, correctAnswer;

    if (module === 'multiplication') {
        const weakTasks = getWeakTasks();
        if (weakTasks.length > 0 && Math.random() < 0.4) {
            const weakTask = weakTasks[Math.floor(Math.random() * weakTasks.length)];
            [a, b] = weakTask.split('×').map(Number);
        } else {
            a = Math.floor(Math.random() * levelConfig.maxNum) + 1;
            b = Math.floor(Math.random() * levelConfig.maxNum) + 1;
        }
        taskText = `${a} × ${b} = ?`;
        correctAnswer = a * b;
    } else if (module === 'division') {
        b = Math.floor(Math.random() * levelConfig.maxNum) + 1;
        a = b * (Math.floor(Math.random() * levelConfig.maxNum) + 1);
        taskText = `${a} ÷ ${b} = ?`;
        correctAnswer = a / b;
    } else if (module === 'combined') {
        a = Math.floor(Math.random() * levelConfig.maxNum) + 1;
        b = Math.floor(Math.random() * levelConfig.maxNum) + 1;
        c = Math.floor(Math.random() * levelConfig.maxNum) + 1;
        taskText = `(${a} + ${b}) × ${c} = ?`;
        correctAnswer = (a + b) * c;
    } else if (module === 'percentages') {
        a = Math.floor(Math.random() * 100) + 50;
        b = Math.floor(Math.random() * levelConfig.maxPercent) + 1;
        taskText = `${b}% от ${a} = ?`;
        correctAnswer = Math.round(a * b / 100);
    } else {
        a = Math.floor(Math.random() * (levelConfig.maxNum - levelConfig.minNum + 1)) + levelConfig.minNum;
        b = Math.floor(Math.random() * (levelConfig.maxNum - levelConfig.minNum + 1)) + levelConfig.minNum;
        if (module === 'subtraction' && a < b) [a, b] = [b, a];
        taskText = module === 'addition' ? `${a} + ${b} = ?` : `${a} - ${b} = ?`;
        correctAnswer = module === 'addition' ? a + b : a - b;
    }

    currentTask = { a, b, c, correctAnswer, module };
    document.getElementById('task').textContent = taskText;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
    startTime = performance.now();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultDiv = document.getElementById('result');
    const responseTime = (performance.now() - startTime) / 1000;

    if (isNaN(userAnswer)) {
        resultDiv.textContent = TEXTS[currentLang].inputError;
        resultDiv.style.color = 'red';
        resultDiv.classList.add('wrong-answer');
        setTimeout(() => resultDiv.classList.remove('wrong-answer'), 500);
        try {
            wrongSound.play().catch(e => console.error('Audio error:', e));
        } catch (e) {
            console.error('Audio playback failed:', e);
        }
        return;
    }
    if (userAnswer < 0 || userAnswer > 9999) {
        resultDiv.textContent = TEXTS[currentLang].rangeError;
        resultDiv.style.color = 'red';
        resultDiv.classList.add('wrong-answer');
        setTimeout(() => resultDiv.classList.remove('wrong-answer'), 500);
        try {
            wrongSound.play().catch(e => console.error('Audio error:', e));
        } catch (e) {
            console.error('Audio playback failed:', e);
        }
        return;
    }

    const taskKey = currentTask.module === 'multiplication' ? `${currentTask.a}×${currentTask.b}` :
                   currentTask.module === 'division' ? `${currentTask.a}÷${currentTask.b}` :
                   currentTask.module === 'combined' ? `(${currentTask.a}+${currentTask.b})×${currentTask.c}` :
                   currentTask.module === 'percentages' ? `${currentTask.b}%${currentTask.a}` :
                   `${currentTask.a}${currentTask.module === 'addition' ? '+' : '-'}${currentTask.b}`;
    if (userAnswer === currentTask.correctAnswer) {
        resultDiv.textContent = TEXTS[currentLang].correct.replace('{time}', responseTime.toFixed(2));
        resultDiv.style.color = 'green';
        resultDiv.classList.add('correct-answer');
        setTimeout(() => resultDiv.classList.remove('correct-answer'), 500);
        try {
            correctSound.play().catch(e => console.error('Audio error:', e));
        } catch (e) {
            console.error('Audio playback failed:', e);
        }
        responseTimes.push(responseTime);
        correctCount++;
        addEXP(10);
        taskHistory[currentTask.module] = taskHistory[currentTask.module] || { correct: 0, errors: 0, responseTimes: [] };
        taskHistory[currentTask.module].correct++;
        taskHistory[currentTask.module].responseTimes.push(responseTime);
        updateTaskHistory(taskKey, true);
    } else {
        resultDiv.textContent = TEXTS[currentLang].wrong.replace('{answer}', currentTask.correctAnswer);
        resultDiv.style.color = 'red';
        resultDiv.classList.add('wrong-answer');
        setTimeout(() => resultDiv.classList.remove('wrong-answer'), 500);
        try {
            wrongSound.play().catch(e => console.error('Audio error:', e));
        } catch (e) {
            console.error('Audio playback failed:', e);
        }
        logError(taskKey, userAnswer, responseTime);
        errorCount++;
        taskHistory[currentTask.module] = taskHistory[currentTask.module] || { correct: 0, errors: 0, responseTimes: [] };
        taskHistory[currentTask.module].errors++;
        taskHistory[currentTask.module].responseTimes.push(responseTime);
        updateTaskHistory(taskKey, false);
        showMotivation();
    }

    updateStats();
    updateModuleStats();
    updateAchievements();
    adjustLevel();
    updateRecommendations();
    updateProgressChart();
    debouncedSaveProgress();
    generateTask();
}

function updateTaskHistory(taskKey, isCorrect) {
    if (Object.keys(taskHistory).length > 100 && !taskKey.match(/^(multiplication|addition|subtraction|division|combined|percentages)$/)) {
        const oldestKey = Object.keys(taskHistory).find(key => !key.match(/^(multiplication|addition|subtraction|division|combined|percentages)$/));
        delete taskHistory[oldestKey];
    }
    taskHistory[taskKey] = taskHistory[taskKey] || { correct: 0, errors: 0 };
    if (isCorrect) {
        taskHistory[taskKey].correct++;
    } else {
        taskHistory[taskKey].errors++;
    }
}

function logError(taskKey, userAnswer, responseTime) {
    if (errorLog.length >= 50) errorLog.shift();
    const taskText = document.getElementById('task').textContent.replace(' = ?', '');
    const errorEntry = {
        task: taskText,
        userAnswer,
        correctAnswer: currentTask.correctAnswer,
        responseTime,
        timestamp: new Date().toISOString()
    };
    errorLog.push(errorEntry);

    const errorList = document.getElementById('errorList');
    const li = document.createElement('li');
    li.textContent = `${taskText} = ${userAnswer} (${TEXTS[currentLang].correctAnswer || 'Правильно'}: ${currentTask.correctAnswer}, ${TEXTS[currentLang].time || 'Время'}: ${responseTime.toFixed(2)} ${TEXTS[currentLang].seconds || 'сек'})`;
    errorList.appendChild(li);
}

function updateStats() {
    const avgTime = responseTimes.length > 0 ? (responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length).toFixed(2) : '0.00';
    const bestTime = responseTimes.length > 0 ? Math.min(...responseTimes).toFixed(2) : '0.00';

    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('avgTime').textContent = avgTime;
    document.getElementById('bestTime').textContent = bestTime;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('errorCount').textContent = errorCount;
    document.getElementById('expCounter').textContent = `${TEXTS[currentLang].exp || 'Опыт'}: ${exp} | ${TEXTS[currentLang].level || 'Уровень'}: ${playerLevel}`;
}

function adjustLevel() {
    const levelConfig = levelSettings[currentTask.module][currentLevel - 1];
    const moduleStats = taskHistory[currentTask.module] || { responseTimes: [] };
    const avgTime = moduleStats.responseTimes.length > 0 ? moduleStats.responseTimes.reduce((a, b) => a + b, 0) / moduleStats.responseTimes.length : 0;
    const accuracy = correctCount / (correctCount + errorCount) || 0;

    if (moduleStats.responseTimes.length >= 10 && accuracy > 0.9 && avgTime < levelConfig.timeGoal && currentLevel < 5) {
        currentLevel++;
    } else if (moduleStats.responseTimes.length >= 10 && (accuracy < 0.6 || avgTime > levelConfig.timeGoal * 1.5) && currentLevel > 1) {
        currentLevel--;
    }
}

function getWeakTasks() {
    return Object.entries(taskHistory)
        .filter(([key, stats]) => stats.errors > stats.correct && !key.match(/^(multiplication|addition|subtraction|division|combined|percentages)$/))
        .map(([task, stats]) => ({ task, errorRate: stats.errors / (stats.correct + stats.errors || 1) }))
        .sort((a, b) => b.errorRate - a.errorRate)
        .map(item => item.task);
}

function updateRecommendations() {
    const recText = document.getElementById('recText');
    const moduleStats = taskHistory[currentTask.module] || { responseTimes: [], correct: 0, errors: 0 };
    const avgTime = moduleStats.responseTimes.length > 0 ? (moduleStats.responseTimes.reduce((a, b) => a + b, 0) / moduleStats.responseTimes.length).toFixed(2) : 0;
    const levelConfig = levelSettings[currentTask.module][currentLevel - 1];
    let recommendations = [];

    const weakTasks = getWeakTasks();
    if (weakTasks.length > 0) {
        const weakestTask = weakTasks[0];
        const stats = taskHistory[weakestTask];
        const errorRate = ((stats.errors / (stats.correct + stats.errors)) * 100).toFixed(1);
        recommendations.push(`${TEXTS[currentLang].weakTask || 'Вы ошибаетесь в примерах'}: ${weakestTask} (${errorRate}% ${TEXTS[currentLang].errors || 'ошибок'}). ${TEXTS[currentLang].practice || 'Потренируйте эту комбинацию.'}`);
    }

    const accuracy = moduleStats.correct / (moduleStats.correct + moduleStats.errors) || 0;
    if (accuracy < 0.7) {
        recommendations.push(TEXTS[currentLang].tooManyErrors || 'Слишком много ошибок. Попробуйте замедлиться и сосредоточиться на точности.');
    } else if (avgTime > levelConfig.timeGoal) {
        recommendations.push(`${TEXTS[currentLang].slowResponse || 'Ваше время ответа'} (${avgTime} ${TEXTS[currentLang].seconds || 'сек'}) ${TEXTS[currentLang].aboveGoal || 'выше цели'} (${levelConfig.timeGoal} ${TEXTS[currentLang].seconds || 'сек'}). ${TEXTS[currentLang].practiceModule || 'Повторяйте'} ${currentTask.module === 'multiplication' ? TEXTS[currentLang].multiplicationTable || 'таблицу умножения' : currentTask.module === 'division' ? TEXTS[currentLang].divisionTable || 'таблицу деления' : currentTask.module === 'combined' ? TEXTS[currentLang].combinedOperations || 'смешанные операции' : currentTask.module === 'percentages' ? TEXTS[currentLang].percentagesTable || 'проценты' : TEXTS[currentLang].arithmetic || 'арифметику'} ${TEXTS[currentLang].forSpeed || 'для скорости.'}`);
    } else {
        recommendations.push(TEXTS[currentLang].greatJob || 'Отличная работа! Продолжайте, чтобы закрепить навыки.');
    }

    if (currentTask.module === 'multiplication' && weakTasks.length > 0) {
        recommendations.push(TEXTS[currentLang].memoryTip || 'Для улучшения памяти попробуйте визуализировать таблицу умножения или использовать мнемонические правила.');
    }

    recText.innerHTML = recommendations.length > 0 ? recommendations.join('<br>') : TEXTS[currentLang].recText;
}

function updateAchievements() {
    const achievementList = document.getElementById('achievementList');
    if (!achievementList) return;

    const checkAchievements = (goals, category) => {
        goals.forEach(goal => {
            if (!achievements.includes(goal.id) && goal.condition()) {
                achievements.push(goal.id);
                const li = document.createElement('li');
                li.textContent = `${goal.name[currentLang]}: ${goal.reward[currentLang]}`;
                li.className = 'achievement';
                achievementList.appendChild(li);
                showAchievementNotification(goal);
            }
        });
    };

    checkAchievements(achievementGoals.global, 'global');
    checkAchievements(achievementGoals[currentTask.module], currentTask.module);
    debouncedSaveProgress();
}

function showMotivation() {
    const now = performance.now();
    if (now - lastMotivationTime < 10000) return;
    lastMotivationTime = now;

    const motivationMessages = TEXTS[currentLang].motivationMessages;
    const motivationDiv = document.getElementById('motivation');
    motivationDiv.textContent = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    setTimeout(() => motivationDiv.textContent = '', 5000);
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => console.error('Service Worker registration failed:', err));
}

window.addEventListener('scroll', updateProgressChart);
window.addEventListener('resize', updateProgressChart);

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const volumeControl = document.getElementById('volumeControl');
    if (volumeControl) {
        volumeControl.value = soundVolume;
    }
    setLanguage(currentLang);
    showTour();
    updateProgressChart();
    updateStats();
    updateModuleStats();
    document.getElementById('expProgress').style.width = `${(exp % 100) / 100 * 100}%`;
    generateTask();
});