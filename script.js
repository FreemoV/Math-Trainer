let isRepeatingErrors = false;
let currentErrorExamples = [];
let currentErrorIndex = 0;

// Инициализация данных с проверкой
let currentLanguage = localStorage.getItem('language') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';
let level = parseInt(localStorage.getItem('level')) || 1;
let exp = parseInt(localStorage.getItem('exp')) || 0;
let errorLog = JSON.parse(localStorage.getItem('errorLog')) || [];
let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
let stats = JSON.parse(localStorage.getItem('stats')) || { correct: 0, incorrect: 0, total: 0 };
let volume = parseFloat(localStorage.getItem('volume')) || 0.5;

// Проверка корректности данных
if (!Array.isArray(errorLog)) errorLog = [];
if (!Array.isArray(achievements)) achievements = [];
if (!stats || typeof stats.correct !== 'number' || typeof stats.incorrect !== 'number' || typeof stats.total !== 'number') {
    stats = { correct: 0, incorrect: 0, total: 0 };
}

const TEXTS = {
    ru: {
        title: "Математический тренажёр",
        selectModule: "Выберите модуль:",
        multiplicationTable: "Таблица умножения",
        division: "Деление",
        addition: "Сложение",
        subtraction: "Вычитание",
        mixedOperations: "Смешанные операции",
        percentages: "Проценты",
        start: "Начать",
        check: "Проверить",
        answerPlaceholder: "Введите ответ",
        correct: "Правильно!",
        incorrect: "Неправильно. Попробуйте снова!",
        level: "Уровень: ",
        exp: "Опыт: ",
        progress: "Прогресс",
        errorLog: "Журнал ошибок",
        repeatErrors: "Повторить ошибки",
        clearErrors: "Очистить ошибки",
        recommendations: "Рекомендации",
        achievements: "Достижения",
        exportStats: "Экспорт статистики",
        switchTheme: "Сменить тему",
        switchLanguage: "Сменить язык",
        volume: "Громкость",
        voiceInput: "Голосовой ввод"
    },
    en: {
        title: "Math Trainer",
        selectModule: "Select module:",
        multiplicationTable: "Multiplication Table",
        division: "Division",
        addition: "Addition",
        subtraction: "Subtraction",
        mixedOperations: "Mixed Operations",
        percentages: "Percentages",
        start: "Start",
        check: "Check",
        answerPlaceholder: "Enter your answer",
        correct: "Correct!",
        incorrect: "Incorrect. Try again!",
        level: "Level: ",
        exp: "EXP: ",
        progress: "Progress",
        errorLog: "Error Log",
        repeatErrors: "Repeat Errors",
        clearErrors: "Clear Errors",
        recommendations: "Recommendations",
        achievements: "Achievements",
        exportStats: "Export Stats",
        switchTheme: "Switch Theme",
        switchLanguage: "Switch Language",
        volume: "Volume",
        voiceInput: "Voice Input"
    }
};

const correctSound = new Audio('https://www.soundjay.com/buttons/button-3.mp3');
const wrongSound = new Audio('https://www.soundjay.com/buttons/button-2.mp3');
correctSound.volume = volume;
wrongSound.volume = volume;

const levelSettings = {
    1: { range: [1, 5], operations: ['×', '+'] },
    2: { range: [1, 10], operations: ['×', '+', '−'] },
    3: { range: [1, 15], operations: ['×', '+', '−', '÷'] },
    4: { range: [1, 20], operations: ['×', '+', '−', '÷', '%'] },
    5: { range: [1, 25], operations: ['×', '+', '−', '÷', '%'] }
};

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    applyTheme();
    updateLevelAndExp();
    updateStats();
    updateErrorLog();
    updateRecommendations();
    updateAchievements();
    updateVolumeSlider();
    initializeChart();
});

function applyLanguage() {
    document.querySelectorAll('[data-text]').forEach(element => {
        element.textContent = TEXTS[currentLanguage][element.dataset.text];
    });
    document.querySelector('#answerInput').placeholder = TEXTS[currentLanguage].answerPlaceholder;
}

function applyTheme() {
    document.body.className = currentTheme;
}

function switchLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    localStorage.setItem('language', currentLanguage);
    applyLanguage();
}

function switchTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function updateVolumeSlider() {
    const volumeSlider = document.querySelector('#volumeSlider');
    volumeSlider.value = volume;
    volumeSlider.addEventListener('input', () => {
        volume = parseFloat(volumeSlider.value);
        correctSound.volume = volume;
        wrongSound.volume = volume;
        localStorage.setItem('volume', volume);
    });
}

function generateExample() {
    if (isRepeatingErrors) {
        if (currentErrorIndex < currentErrorExamples.length) {
            const example = currentErrorExamples[currentErrorIndex];
            document.querySelector('#example').textContent = example.example;
            return example;
        } else {
            isRepeatingErrors = false;
            currentErrorExamples = [];
            currentErrorIndex = 0;
            document.querySelector('#example').textContent = '';
            alert(TEXTS[currentLanguage].correct + ' ' + TEXTS[currentLanguage].errorLog + ' cleared!');
            return null;
        }
    }

    const module = document.querySelector('#moduleSelect').value;
    const settings = levelSettings[level];
    let a = Math.floor(Math.random() * (settings.range[1] - settings.range[0] + 1)) + settings.range[0];
    let b = Math.floor(Math.random() * (settings.range[1] - settings.range[0] + 1)) + settings.range[0];
    let operation;

    if (module === 'multiplication') operation = '×';
    else if (module === 'division') operation = '÷';
    else if (module === 'addition') operation = '+';
    else if (module === 'subtraction') operation = '−';
    else if (module === 'percentages') operation = '%';
    else operation = settings.operations[Math.floor(Math.random() * settings.operations.length)];

    if (operation === '÷') {
        a = a * b;
        while (b === 0) b = Math.floor(Math.random() * (settings.range[1] - settings.range[0] + 1)) + settings.range[0];
    }
    if (operation === '−') {
        if (a < b) [a, b] = [b, a];
    }
    if (operation === '%') {
        a = Math.floor(Math.random() * 100) + 1;
        b = Math.floor(Math.random() * 100) + 1;
    }

    const example = `${a} ${operation} ${b} = ?`;
    document.querySelector('#example').textContent = example;

    let answer;
    if (operation === '×') answer = a * b;
    else if (operation === '÷') answer = a / b;
    else if (operation === '+') answer = a + b;
    else if (operation === '−') answer = a - b;
    else if (operation === '%') answer = (a * b) / 100;

    return { example, answer };
}

let currentExample = null;
let startTime = null;

function checkAnswer() {
    const userAnswer = parseFloat(document.querySelector('#answerInput').value);
    if (isNaN(userAnswer)) return;

    if (!currentExample && !isRepeatingErrors) {
        currentExample = generateExample();
        if (!currentExample) return;
        startTime = Date.now();
    }

    const correctAnswer = isRepeatingErrors ? currentErrorExamples[currentErrorIndex].answer : currentExample.answer;
    const feedback = document.querySelector('#feedback');

    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;

        feedback.textContent = TEXTS[currentLanguage].correct;
        feedback.style.color = 'green';
        correctSound.play();
        stats.correct++;
        stats.total++;
        exp += 10;
        if (exp >= level * 100) {
            level++;
            exp = 0;
            alert(`Поздравляем! Вы достигли уровня ${level}!`);
        }
        updateLevelAndExp();
        updateStats();
        updateChart();

        if (isRepeatingErrors) {
            currentErrorExamples.splice(currentErrorIndex, 1);
            errorLog.splice(currentErrorIndex, 1);
            localStorage.setItem('errorLog', JSON.stringify(errorLog));
            updateErrorLog();
            updateRecommendations();

            if (currentErrorExamples.length === 0) {
                isRepeatingErrors = false;
                currentErrorExamples = [];
                currentErrorIndex = 0;
                document.querySelector('#example').textContent = '';
                alert(TEXTS[currentLanguage].correct + ' ' + TEXTS[currentLanguage].errorLog + ' cleared!');
            } else {
                generateExample();
            }
        } else {
            currentExample = null;
            startTime = null;
        }
    } else {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;

        feedback.textContent = TEXTS[currentLanguage].incorrect;
        feedback.style.color = 'red';
        wrongSound.play();
        stats.incorrect++;
        stats.total++;
        updateStats();
        updateChart();

        if (!isRepeatingErrors) {
            const errorEntry = {
                example: currentExample.example,
                answer: currentExample.answer,
                time: timeTaken
            };
            errorLog.push(errorEntry);
            localStorage.setItem('errorLog', JSON.stringify(errorLog));
            updateErrorLog();
            updateRecommendations();
        }
    }

    document.querySelector('#answerInput').value = '';
}

function startTraining() {
    if (isRepeatingErrors) {
        isRepeatingErrors = false;
        currentErrorExamples = [];
        currentErrorIndex = 0;
    }
    currentExample = null;
    startTime = null;
    document.querySelector('#answerInput').value = '';
    document.querySelector('#feedback').textContent = '';
    generateExample();
}

function repeatErrors() {
    if (errorLog.length === 0) {
        alert(currentLanguage === 'ru' ? 'Журнал ошибок пуст!' : 'Error log is empty!');
        return;
    }

    isRepeatingErrors = true;
    currentErrorExamples = [...errorLog];
    currentErrorIndex = 0;
    document.querySelector('#answerInput').value = '';
    document.querySelector('#feedback').textContent = '';
    startTime = Date.now();
    generateExample();
}

function clearErrors() {
    errorLog = [];
    localStorage.setItem('errorLog', JSON.stringify(errorLog));
    updateErrorLog();
    updateRecommendations();
}

function updateErrorLog() {
    const errorLogDiv = document.querySelector('#errorLog');
    errorLogDiv.innerHTML = `<h3>${TEXTS[currentLanguage].errorLog}</h3>`;
    if (errorLog.length === 0) {
        errorLogDiv.innerHTML += '<p>Ошибок нет.</p>';
    } else {
        errorLog.forEach((entry, index) => {
            errorLogDiv.innerHTML += `<p>${index + 1}. ${entry.example} (Правильно: ${entry.answer}, Время: ${entry.time.toFixed(2)} сек)</p>`;
        });
    }
}

function updateLevelAndExp() {
    document.querySelector('#level').textContent = `${TEXTS[currentLanguage].level}${level}`;
    document.querySelector('#exp').textContent = `${TEXTS[currentLanguage].exp}${exp}/${level * 100}`;
    localStorage.setItem('level', level);
    localStorage.setItem('exp', exp);
}

function updateStats() {
    const statsDiv = document.querySelector('#stats');
    statsDiv.innerHTML = `<h3>${TEXTS[currentLanguage].progress}</h3>`;
    statsDiv.innerHTML += `<p>Правильных: ${stats.correct}</p>`;
    statsDiv.innerHTML += `<p>Неправильных: ${stats.incorrect}</p>`;
    statsDiv.innerHTML += `<p>Всего: ${stats.total}</p>`;
    localStorage.setItem('stats', JSON.stringify(stats));
}

function updateRecommendations() {
    const recommendationsDiv = document.querySelector('#recommendations');
    recommendationsDiv.innerHTML = `<h3>${TEXTS[currentLanguage].recommendations}</h3>`;
    if (errorLog.length === 0) {
        recommendationsDiv.innerHTML += '<p>Продолжайте практиковаться!</p>';
    } else {
        const operationCount = {};
        errorLog.forEach(entry => {
            const operation = entry.example.split(' ')[1];
            operationCount[operation] = (operationCount[operation] || 0) + 1;
        });
        const mostFrequent = Object.keys(operationCount).reduce((a, b) => operationCount[a] > operationCount[b] ? a : b);
        recommendationsDiv.innerHTML += `<p>Рекомендуем практиковать ${mostFrequent}-операции.</p>`;
    }
}

function updateAchievements() {
    if (stats.correct >= 10 && !achievements.includes('10Correct')) {
        achievements.push('10Correct');
        alert('Достижение: 10 правильных ответов!');
    }
    if (level >= 3 && !achievements.includes('Level3')) {
        achievements.push('Level3');
        alert('Достижение: Достигнут 3 уровень!');
    }
    localStorage.setItem('achievements', JSON.stringify(achievements));

    const achievementsDiv = document.querySelector('#achievements');
    achievementsDiv.innerHTML = `<h3>${TEXTS[currentLanguage].achievements}</h3>`;
    if (achievements.length === 0) {
        achievementsDiv.innerHTML += '<p>Достижений пока нет.</p>';
    } else {
        achievements.forEach(achievement => {
            achievementsDiv.innerHTML += `<p>${achievement}</p>`;
        });
    }
}

function exportStats() {
    const data = JSON.stringify({ stats, errorLog, level, exp, achievements }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'math_trainer_stats.json';
    a.click();
    URL.revokeObjectURL(url);
}

let progressChart;

function initializeChart() {
    const ctx = document.querySelector('#progressChart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Правильных', 'Неправильных'],
            datasets: [{
                label: 'Ответы',
                data: [stats.correct, stats.incorrect],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#28a745', '#dc3545'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function updateChart() {
    progressChart.data.datasets[0].data = [stats.correct, stats.incorrect];
    progressChart.update();
}

function voiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Голосовой ввод не поддерживается вашим браузером.');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = currentLanguage === 'ru' ? 'ru-RU' : 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        const spokenAnswer = parseFloat(event.results[0][0].transcript);
        if (!isNaN(spokenAnswer)) {
            document.querySelector('#answerInput').value = spokenAnswer;
            checkAnswer();
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
}

document.querySelector('#startBtn').addEventListener('click', startTraining);
document.querySelector('#checkBtn').addEventListener('click', checkAnswer);
document.querySelector('#answerInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});
document.querySelector('#repeatErrorsBtn').addEventListener('click', repeatErrors);
document.querySelector('#clearErrorsBtn').addEventListener('click', clearErrors);
document.querySelector('#switchThemeBtn').addEventListener('click', switchTheme);
document.querySelector('#switchLanguageBtn').addEventListener('click', switchLanguage);
document.querySelector('#exportStatsBtn').addEventListener('click', exportStats);
document.querySelector('#voiceInputBtn').addEventListener('click', voiceInput);
