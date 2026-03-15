// Inicjalizacja animacji pojawiania się
AOS.init({
    duration: 1000,
    once: false, // Animacja powtarza się przy każdym skrolowaniu
});

// Płynne przewijanie menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
