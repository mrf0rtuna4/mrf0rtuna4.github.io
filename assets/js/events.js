let musicPlayed = false;
let currentMusic = new Audio();


function toggleMusicPlayer() {
        const player = document.getElementById('musicPlayer');
    const trackInfo = document.getElementById('currentTrack');
    const toggleButton = document.getElementById('toggleMusic');
    const musicPlayerElement = document.getElementById('musicPlayer');
    if (!musicPlayerElement) {
        console.error("Элемент с id 'musicPlayer' не найден.");
        return;
    }

    if (musicPlayerElement.textContent === "Play") {
        musicPlayerElement.textContent = "Pause";
        if (track) {
            currentMusic.src = `assets/sounds/${track}`;
            currentMusic.loop = true;
    
            if (autoplay) {
                currentMusic.play();
                isMusicPlaying = true;
                toggleButton.textContent = '🔈';
            }
    
            toggleButton.onclick = () => {
                if (isMusicPlaying) {
                    currentMusic.pause();
                    toggleButton.textContent = '🔊';
                } else {
                    currentMusic.play();
                    toggleButton.textContent = '🔈';
                }
                isMusicPlaying = !isMusicPlaying;
            };
        } else {
            currentMusic.pause();
            currentMusic.src = '';
            isMusicPlaying = false;
        }
    } else {
        musicPlayerElement.textContent = "Play";
        currentMusic.pause();
        currentMusic.src = '';
        isMusicPlaying = false;
    }
}

toggleMusicPlayer('skeletons.mp3', true);


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

    const confettiCount = 100;
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

function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflake-container');
    document.body.appendChild(snowflakeContainer);

    const snowflakeCount = 50;
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflakeContainer.appendChild(snowflake);
    }
    setTimeout(() => {
        document.body.removeChild(snowflakeContainer);
    }, 5000);
}

function createHalloweenTheme() {
    const halloweenContainer = document.createElement('div');
    halloweenContainer.classList.add('halloween-container');
    document.body.appendChild(halloweenContainer);

    const pumpkinCount = 3;
    for (let i = 0; i < pumpkinCount; i++) {
        const pumpkin = document.createElement('i');
        pumpkin.classList.add('fa-solid', 'fa-spider', 'fa-shake');
        pumpkin.style.left = `${Math.random() * 100}vw`;
        halloweenContainer.appendChild(pumpkin);
    }

    const ghostCount = 2;
    for (let i = 0; i < ghostCount; i++) {
        const ghost = document.createElement('i');
        ghost.classList.add('fas', 'fa-ghost', 'animate__animated', 'animate__fadeInDown');
        ghost.style.left = `${Math.random() * 100}vw`;
        ghost.style.animationDuration = `${Math.random() * 3 + 2}s`;
        halloweenContainer.appendChild(ghost);
    }

    const audio = new Audio('assets/sounds/skeletons.mp3');
    audio.loop = false;

    const playMusicOnce = (eventTriggered) => {
        eventTriggered = false
        if (!eventTriggered) {
            if (!musicPlayed) {
                audio.play().catch(err => console.error('Ошибка при воспроизведении:', err));
                document.removeEventListener('click', playMusicOnce);
                eventTriggered = true;
                musicPlayed = true;
            }

        }
    };


    document.addEventListener('click', playMusicOnce);

    setTimeout(() => {
        document.body.removeChild(halloweenContainer);
    }, 5000);
}

function updateTimer(elementId, targetDate, eventType) {
    const timerElement = document.getElementById(elementId);
    if (!timerElement) {
        console.error(`Элемент с id ${elementId} не найден.`);
        return;
    }

    const interval = setInterval(() => {
        const { days, hours, minutes, seconds, distance } = calculateCountdown(targetDate);

        if (distance < 0 && distance > -86400000) {
            timerElement.innerHTML = "Событие наступило! Праздник весь день!";
            if (eventType === 'newYear') {
                createSnowflakes();
            } else if (eventType === 'halloween') {
                createHalloweenTheme();
            } else {
                createConfetti();
            }
        } else if (distance <= -86400000) {
            clearInterval(interval);
            timerElement.innerHTML = "Событие завершилось!";
        } else {
            timerElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
        }
        
        if (distance <= 60000) {
            timerElement.classList.add('critical');
            const milliseconds = Math.floor((targetDate - new Date().getTime()) % 1000);
            timerElement.innerHTML = `${seconds}s ${milliseconds}ms`;
        
            if (distance <= 1000) {
                timerElement.classList.add('fullscreen');
                setTimeout(() => timerElement.classList.remove('fullscreen'), 5000);
            }
        } else {
            timerElement.classList.remove('critical');
        }
        

    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const newYearDate = getNextTargetDate(1, 1);
    const birthdayDate = getNextTargetDate(3, 22);
    const halloweenDate = getNextTargetDate(10, 31);

    updateTimer('newYearCountdown', newYearDate, 'newYear');
    updateTimer('birthdayCountdown', birthdayDate, 'birthday');
    updateTimer('halloweenCountdown', halloweenDate, 'halloween');
});

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

document.addEventListener("DOMContentLoaded", function () {
    updateAge("2007-03-22");
});
