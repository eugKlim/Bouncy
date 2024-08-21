function getActiveLinkOnScroll() {
  let allLinkYankor = document.querySelectorAll('a.yankor');

  allLinkYankor.forEach((link) => {
    let getCurrScrollBlock = document.getElementById(
      link.getAttribute('href').substring(1)
    );
    let getPositionBlock = getCurrScrollBlock.getBoundingClientRect();
    link.classList.remove('active');
    if (getPositionBlock.top < 100 && getPositionBlock.bottom > 100) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', function () {
  getActiveLinkOnScroll();
});
getActiveLinkOnScroll();
