const carouselItems = document.querySelector('.carousel-items');
const carouselNavPrev = document.querySelector('.carousel-nav.prev');
const carouselNavNext = document.querySelector('.carousel-nav.next');
const lancamentoItems = document.querySelectorAll('.lancamento-item');

let itemWidth = lancamentoItems[0].offsetWidth;
let currentPosition = 0;
let maxPosition = -(itemWidth * (lancamentoItems.length - 1));

function updateCarousel() {
    carouselItems.style.transform = `translateX(${currentPosition}px)`;

    // Controle da visibilidade das setas
    if (currentPosition === 0) {
        carouselNavPrev.style.display = 'none'; // Oculta a seta "voltar"
    } else {
        carouselNavPrev.style.display = 'block'; // Exibe a seta "voltar"
    }

    if (currentPosition === maxPosition) {
        carouselNavNext.style.display = 'none'; // Oculta a seta "avançar"
    } else {
        carouselNavNext.style.display = 'block'; // Exibe a seta "avançar"
    }
}

carouselNavNext.addEventListener('click', () => {
    if (currentPosition > maxPosition) {
        currentPosition -= itemWidth;
        updateCarousel();
    }
});

carouselNavPrev.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    itemWidth = lancamentoItems[0].offsetWidth;
    maxPosition = -(itemWidth * (lancamentoItems.length - 1));
    updateCarousel();
});

updateCarousel();