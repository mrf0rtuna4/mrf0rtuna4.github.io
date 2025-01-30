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

document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "Пока вы спите - мы двигаемся вперед",
        "Цель - не просто достичь успеха, заработать денег, а найти себя.",
        "Если вы хотите жить счастливой жизнью, свяжите ее с целями, а не с людьми или вещами.",
        "\"Лучшая работа – это то, что делает вас счастливым, даже если она не приносит много денег.\" - Стивен Кинг",
        "Не бойтесь мечтать больших мечт, бойтесь не воплотить их в жизнь.",
        "Кому-то кость и похвала хозяев. Кому-то цель и право достигать",
        "Тот кто много говорит о друзьях - вероятно один..",
        "Люди любат жизнь \"доживать\".",
        "Успех – это не конечная точка, а непрерывный путь к самосовершенствованию.",
        "Время – это самый ценный ресурс, не тратьте его на то, что не приносит вам радости.",
        "Сложности – это возможности для роста и саморазвития.",
        "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
        "Счастье – это не то, что вы получаете, а то, что вы даете.",
        "Не ждите идеального момента, возьмите момент и сделайте его идеальным.",
        "„Природа дала людям один язык и два уха, чтобы мы больше слушали других, нежели говорили сами.“ —  Эпиктет",
        "„Вам нужно только одно — быть естественным, таким же естественным, как ваше дыхание. Любите свою жизнь. Не живите согласно каким-то заповедям. Не живите согласно чужим идеям. Не живите так, как от вас требуют люди. Прислушивайтесь к своему собственному сердцу. Станьте безмолвны, прислушайтесь к тихому, слабому голосу внутри вас и следуйте ему.“ —  Ошо"
    ];

    const randomQuotes = getRandomQuotes(quotes, 5);
    randomQuotes.forEach((quote, index) => {
        document.getElementById(`quote${index + 1}`).textContent = quote;
    });

    document.getElementById('moreQuotes').addEventListener('click', function () {
        const allQuotesDiv = document.getElementById('allQuotes');
        allQuotesDiv.innerHTML = '';
        quotes.forEach(quote => {
            const p = document.createElement('p');
            p.textContent = quote;
            allQuotesDiv.appendChild(p);
        });
        document.getElementById('quotesPopup').style.display = 'block';
    });

    document.querySelector('.popup .close').addEventListener('click', function () {
        document.getElementById('quotesPopup').style.display = 'none';
    });

    function getRandomQuotes(arr, num) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
});