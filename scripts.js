document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll('[data-section]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                const target = entry.target.querySelector('.opacity-0');

                if (target) {
                    target.classList.remove('opacity-0', 'translate-y-8');
                    target.classList.add('opacity-100', 'translate-y-0');
                }

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px'
    });

    sections.forEach(sec => observer.observe(sec));

    const logo = document.getElementById('logo');
    const text = document.getElementById('logo-text');

    if (logo && text) {
        const pad = 20;

        requestAnimationFrame(() => {
            const w = text.offsetWidth;
            const slideDist = w / 2 + pad;

            logo.style.setProperty('--slide-distance', slideDist + 'px');
            logo.classList.add('loaded');
            text.classList.remove('opacity-0');
        });
    }

    const hero = document.querySelector('#home .opacity-0');
    if (hero) {
        setTimeout(() => {
            hero.classList.remove('opacity-0', 'translate-y-8');
            hero.classList.add('opacity-100', 'translate-y-0');
        }, 150);
    }

});