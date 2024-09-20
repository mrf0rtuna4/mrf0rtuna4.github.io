function calculateCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, distance };
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    const confettiCount = 34;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

function getRandomColor() {
    const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FFBD', '#3375FF', '#FF33A2'];
    return colors[Math.floor(Math.random() * colors.length)];
}


function getNextTargetDate(month, day) {
    const now = new Date();
    const targetDateThisYear = new Date(now.getFullYear(), month - 1, day);
    const time = new Date(now.getFullYear(), month - 1, day)

    targetDateThisYear.setHours(23, 59, 59, 999);

    if (now.getTime() > targetDateThisYear.getTime()) {
        return new Date(now.getFullYear() + 1, month - 1, day).getTime();
    }

    return time.getTime();
}


function updateTimer(elementId, targetDate) {
    const timerElement = document.getElementById(elementId);
    if (!timerElement) {
        console.error(`Элемент с id ${elementId} не найден.`);
        return;
    }
    const interval = setInterval(() => {
        const { days, hours, minutes, seconds, distance } = calculateCountdown(targetDate);

        if (distance < 0 && distance > -86400000) {
            timerElement.innerHTML = "Событие наступило! Праздник весь день!";
            createConfetti();
        } else if (distance <= -86400000) {
            clearInterval(interval);
            timerElement.innerHTML = "Событие завершилось!";
        } else {
            timerElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    const newYearDate = getNextTargetDate(1, 1);
    const birthdayDate = getNextTargetDate(3, 22);

    updateTimer('newYearCountdown', newYearDate);
    updateTimer('birthdayCountdown', birthdayDate);
    // updateTimer('helaneyCountdown', '🤨')
});

function triggerConfetti() {
    document.body.classList.add('confetti-animation');
}

function updateAge(birthdate) {
    const ageElement = document.getElementById("age");
    if (!ageElement) {
        console.error("Элемент с id 'age' не найден.");
        return;
    }

    const now = new Date();
    const birthDate = new Date(birthdate);
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDifference = now.getMonth() - birthDate.getMonth();
    const dayDifference = now.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    ageElement.textContent = age;
}

document.addEventListener("DOMContentLoaded", function() {
    updateAge("2007-03-22");
});