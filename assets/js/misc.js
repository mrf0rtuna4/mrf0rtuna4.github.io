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

document.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('#skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        skillsSection.classList.add('animate__fadeInUp');
    }
});

const projectCards = document.querySelectorAll('.projects-wrapper .card');

projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate__pulse');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate__pulse');
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // const header = document.querySelector('header');
    // const avatarContainer = document.querySelector('.avatar-container');

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });


    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('header');
//     const aboutSection = document.querySelector('#about');
//     const avatarContainer = document.querySelector('.avatar-container');

//     const onScroll = () => {
//         const aboutTop = aboutSection.getBoundingClientRect().top;
//         const threshold = 100;

//         if (aboutTop <= threshold) {
//             header.classList.add('scrolled');
//             aboutSection.querySelector('.avatar-container').style.opacity = '0';
//         } else {
//             header.classList.remove('scrolled');
//             aboutSection.querySelector('.avatar-container').style.opacity = '1';
//         }
//     };

//     window.addEventListener('scroll', onScroll);
// });
