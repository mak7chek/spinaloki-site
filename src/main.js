import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.scss';

document.addEventListener('DOMContentLoaded', () => {

    const swiperContainer = document.querySelector('.clinic-swiper');

    if (swiperContainer) {
        new Swiper('.clinic-swiper', {
            modules: [Navigation, Pagination, Autoplay],
            loop: true,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            spaceBetween: 20,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // =========================================
    // 2. АКОРДЕОН (Ціни)
    // =========================================
    const accordions = document.querySelectorAll('.accordion-item');

    if (accordions.length > 0) {
        accordions.forEach(acc => {
            const header = acc.querySelector('.accordion-header');
            const content = acc.querySelector('.accordion-content');

            if (header && content) {
                header.addEventListener('click', () => {
                    acc.classList.toggle('active');

                    if (acc.classList.contains('active')) {
                        // ВИПРАВЛЕННЯ: Додаємо +20px (або 30px) про запас,
                        // щоб нижній рядок тексту не обрізався
                        content.style.maxHeight = (content.scrollHeight + 30) + "px";
                    } else {
                        content.style.maxHeight = null;
                    }
                });

                // ЛАЙФХАК: Оновлюємо висоту при зміні розміру вікна (повороті телефону),
                // інакше текст може знову обрізатись, якщо стане довшим
                window.addEventListener('resize', () => {
                    if (acc.classList.contains('active')) {
                        content.style.maxHeight = (content.scrollHeight + 30) + "px";
                    }
                });
            }
        });
    }

    // =========================================
    // 3. БУРГЕР-МЕНЮ
    // =========================================
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
});