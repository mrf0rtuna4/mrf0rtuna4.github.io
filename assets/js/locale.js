
//  Copyright (c) 2024-2025 mr_fortuna

//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.


document.addEventListener('DOMContentLoaded', () => {
    const langDropdown = document.querySelector('.language-dropdown');
    const langButtons = document.querySelectorAll('.language-dropdown li');
    // let currentLang = localStorage.getItem('language') || 'ru';

    // function loadLocale(lang) {
    //     const translation = translations[lang];
    //     if (translation) {
    //         document.querySelectorAll('[data-i18n]').forEach(element => {
    //             const key = element.getAttribute('data-i18n');
    //             if (translation[key]) {
    //                 element.innerText = translation[key];
    //             }
    //         });
    //         localStorage.setItem('language', lang);
    //     }
    // }

    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            document.querySelectorAll('[data-i18n]').forEach((el) => {
                const key = el.dataset.i18n;
                el.textContent = translations[selectedLang][key] || el.textContent;
            });
        });
    });

    // loadLocale(currentLang);
    const translations = {
        "ru": {
            "title": "Mr_Fortuna - Личная информация, проекты и навыки",
            "description": "Узнайте больше о Mr_Fortuna, а также моих проектах, навыках и серверах.",
            "about": "Обо мне",
            "skills": "Навыки",
            "projects": "Проекты",
            "contact": "Контакты",
            "age": "Возраст:",
            "gender": "Пол:",
            "nationality": "Национальность",
            "languages": "Языки",
            "education": "Образование",
            "ageInfo": "лет",
            "male": "Мужской",
            "nationalityValue": "Белорус",
            "languagesList": "Русский, Английский, Белорусский",
            "educationValue": "Общее Среднее",
            "timerTitle": "Таймер до событий",
            "newYearCountdown": "До Нового Года",
            "birthdayCountdown": "До Дня Рождения",
            "halloweenCountdown": "До Хеллоуина",
            "skillsSection": "Навыки",
            "projectsSection": "Проекты",
            "contactsSection": "Социалки"
        },
        "en": {
            "title": "Mr_Fortuna - Personal Info, Projects, and Skills",
            "description": "Learn more about Mr_Fortuna, my projects, skills, and servers.",
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "age": "Age:",
            "gender": "Gender:",
            "nationality": "Nationality:",
            "languages": "Languages:",
            "education": "Education:",
            "ageInfo": "years",
            "male": "Male",
            "nationalityValue": "Belarusian",
            "languagesList": "Russian, English, Belarusian",
            "educationValue": "General Secondary",
            "timerTitle": "Countdown to Events",
            "newYearCountdown": "Until New Year",
            "birthdayCountdown": "Until Birthday",
            "halloweenCountdown": "Until Halloween",
            "skillsSection": "Skills",
            "projectsSection": "Projects",
            "contactsSection": "Contacts"
        }
    };
});
