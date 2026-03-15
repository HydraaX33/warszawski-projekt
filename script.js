// Przykład płynnego przewijania
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tutaj możesz dodać API Twojego serwera, aby pobierać liczbę graczy
// Na razie zrobimy prostą animację licznika
let count = 0;
const target = 64; // Przykładowa liczba graczy
const timer = setInterval(() => {
    if(count < target) {
        count++;
        document.getElementById('player-count').innerText = count;
    } else {
        clearInterval(timer);
    }
}, 30);