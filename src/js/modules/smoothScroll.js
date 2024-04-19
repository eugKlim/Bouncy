const header = document.querySelector('.header');
export default function smoothScroll() {
  let allLinkYankor = document.querySelectorAll('a.yankor');
  allLinkYankor.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = header.getBoundingClientRect().height / 2;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}
