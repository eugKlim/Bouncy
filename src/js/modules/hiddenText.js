function hideText(mainBlock, btn, threeDots) {
  let getMainBlock = document.querySelector('.' + mainBlock);
  let getHidenText = getMainBlock.querySelector('.hidden-text');
  let getBtn = getMainBlock.querySelector('.' + btn);
  let getThreeDots = getMainBlock.querySelector('.' + threeDots);

  getBtn.addEventListener('click', function () {
    if (getHidenText.classList.contains('show-inline')) {
      getHidenText.classList.remove('show-inline');
      getThreeDots.style.display = 'inline-block';
      getBtn.textContent = 'Read More';
    } else {
      getHidenText.classList.add('show-inline');
      getThreeDots.style.display = 'none';
      getBtn.textContent = 'Hide Text';
    }
  });
}

// Добавление элементов:
hideText('about', 'about-content__btn', 'three-dots');
