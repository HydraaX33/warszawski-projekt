// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efekt pojawiania się menu przy skrolowaniu
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 8%';
        nav.style.background = 'rgba(0,0,0,0.95)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'rgba(0,0,0,0.9)';
    }
});
