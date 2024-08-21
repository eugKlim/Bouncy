const getCardPortfolioItem = document.querySelectorAll('.portfolio-item');

function changePortfolioHover() {
  getCardPortfolioItem.forEach((item) => {
    item.addEventListener('click', function (e) {
      const portfolioOpenName = '.portfolio-showBlockHover';
      const portfolioCloseName = '.portfolio-close';
      const portfolioItemHover = '.portfolio-item__hover';

      let getParentOpen = e.target.closest(portfolioOpenName);
      let getParentClose = e.target.closest(portfolioCloseName);
      if (
        getParentOpen &&
        getParentOpen.classList.contains(portfolioOpenName.substring(1))
      ) {
        item.querySelector(portfolioItemHover).style.cssText =
          'opacity: 1 !important; visibility: visible !important;';
        getParentOpen.style.display = 'none';
        item.querySelector(portfolioCloseName).style.display = 'block';
      }
      if (
        getParentClose &&
        getParentClose.classList.contains(portfolioCloseName.substring(1))
      ) {
        item.querySelector(portfolioItemHover).style.cssText =
          'opacity: 0 !important; visibility: hidden !important;';
        item.querySelector(portfolioCloseName).style.display = 'none';
        item.querySelector(portfolioOpenName).style.display = 'block';
      }
    });
  });
}

changePortfolioHover();
