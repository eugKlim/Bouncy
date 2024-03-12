import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.team-swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

