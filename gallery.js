// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lightbox Functionality
const cards = document.querySelectorAll('.card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
let currentIndex = 0;

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = card.src;
        currentIndex = index;
    });
});

lightbox.querySelector('.close-btn').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    lightboxImg.src = cards[currentIndex].src;
});

lightbox.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    lightboxImg.src = cards[currentIndex].src;
});
