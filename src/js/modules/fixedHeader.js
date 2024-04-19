const header = document.querySelector('.header');
export default function scrollFixedHeader() {
  const intro = document.querySelector('.intro').getBoundingClientRect().bottom;

  if (intro <= 100) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
}