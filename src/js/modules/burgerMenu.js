export default function burgerMenu() {
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.header-nav');
  const headerNavUl = headerNav.querySelector('ul');

  function openBurgerMenu() {
    burger.classList.add('active');
    headerNavUl.style.cssText = 'transform: translateX(0) !important;';
    body.classList.add('noScroll');
    headerNav.classList.add('active');
  }
  function closeBurgerMenu() {
    burger.classList.remove('active');
    headerNavUl.style.cssText = 'transform: translateX(-100%);';
    body.classList.remove('noScroll');
    headerNav.classList.remove('active');
  }
  burger.addEventListener('click', function () {
    if (burger.classList.contains('active')) {
      closeBurgerMenu();
    } else {
      openBurgerMenu();
    }
  });
  headerNav.addEventListener('click', function () {
    closeBurgerMenu();
  });
}
