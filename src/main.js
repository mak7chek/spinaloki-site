import './style.scss'

function setupCarousel() {
    const carouselContainer = document.getElementById('clinic-carousel');
    if (!carouselContainer) return; // Виходимо, якщо елемент не знайдено

    const items = carouselContainer.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    const totalItems = items.length;



    // 1. Створення індикаторів
    items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = indicatorsContainer.querySelectorAll('.indicator');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Оновлення активних індикаторів
        indicators.forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = (index + totalItems) % totalItems; // Забезпечуємо циклічність
        updateCarousel();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Додаємо слухачів
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Автоматичне перемикання слайдів кожні 5 секунд
    setInterval(nextSlide, 5000);

    // Встановлюємо початковий стан
    updateCarousel();
}

// Викликаємо функцію одразу після завантаження main.js
setupCarousel();
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    const content = acc.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        // 1. Закриваємо всі інші (опціонально, якщо хочеш щоб було відкрито тільки одне)
        /* accordions.forEach(otherAcc => {
            if (otherAcc !== acc && otherAcc.classList.contains('active')) {
                otherAcc.classList.remove('active');
                otherAcc.querySelector('.accordion-content').style.maxHeight = null;
            }
        });
        */

        // 2. Перемикаємо поточний
        acc.classList.toggle('active');

        if (acc.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    burgerBtn.addEventListener('click', () => {
        // Перемикаємо класи active
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Забороняємо скрол сайту, коли відкрите меню
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Закриваємо меню при кліку на посилання
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});