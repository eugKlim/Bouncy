import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function createSlider(addClass) {
  new Swiper(`.${addClass}`, {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// Добавление элементов:

createSlider('team-swiper');
createSlider('testimonials-swiper');
