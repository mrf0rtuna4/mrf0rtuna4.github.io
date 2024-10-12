document.addEventListener('scroll', function() {
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