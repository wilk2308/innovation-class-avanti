document.addEventListener('DOMContentLoaded', function() {
    // Carrossel 1
    const carouselItems = document.querySelector('.lancamentos-carousel .carousel-items');
    const carouselNavPrev = document.querySelector('.lancamentos-carousel .carousel-nav.prev');
    const carouselNavNext = document.querySelector('.lancamentos-carousel .carousel-nav.next');
    const lancamentoItems = document.querySelectorAll('.lancamentos-carousel .lancamento-item');

    let itemWidth = lancamentoItems[0].offsetWidth;
    let currentPosition = 0;
    let maxPosition = -(itemWidth * (lancamentoItems.length - 1));

    function updateCarousel() {
        carouselItems.style.transform = `translateX(${currentPosition}px)`;

        if (currentPosition === 0) {
            carouselNavPrev.style.display = 'none';
        } else {
            carouselNavPrev.style.display = 'block';
        }

        if (currentPosition === maxPosition) {
            carouselNavNext.style.display = 'none';
        } else {
            carouselNavNext.style.display = 'block';
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

    // Carrossel 2
    const carouselItems2 = document.querySelector('.lancamentos-carousel2 .carousel-items2');
    const carouselNavPrev2 = document.querySelector('.lancamentos-carousel2 .carousel-nav2.prev2');
    const carouselNavNext2 = document.querySelector('.lancamentos-carousel2 .carousel-nav2.next2');
    const lancamentoItems2 = document.querySelectorAll('.lancamentos-carousel2 .lancamento-item2');

    let itemWidth2 = lancamentoItems2[0].offsetWidth;
    let currentPosition2 = 0;
    let maxPosition2 = -(itemWidth2 * (lancamentoItems2.length - 1));

    function updateCarousel2() {
        carouselItems2.style.transform = `translateX(${currentPosition2}px)`;

        if (currentPosition2 === 0) {
            carouselNavPrev2.style.display = 'none';
        } else {
            carouselNavPrev2.style.display = 'block';
        }

        if (currentPosition2 === maxPosition2) {
            carouselNavNext2.style.display = 'none';
        } else {
            carouselNavNext2.style.display = 'block';
        }
    }

    carouselNavNext2.addEventListener('click', () => {
        if (currentPosition2 > maxPosition2) {
            currentPosition2 -= itemWidth2;
            updateCarousel2();
        }
    });

    carouselNavPrev2.addEventListener('click', () => {
        if (currentPosition2 < 0) {
            currentPosition2 += itemWidth2;
            updateCarousel2();
        }
    });

    window.addEventListener('resize', () => {
        itemWidth2 = lancamentoItems2[0].offsetWidth;
        maxPosition2 = -(itemWidth2 * (lancamentoItems2.length - 1));
        updateCarousel2();
    });

    updateCarousel2();
});