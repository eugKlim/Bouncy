import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper1 = new Swiper('.team-swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.testimonials-swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

