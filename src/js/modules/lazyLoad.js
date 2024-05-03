const lazyImages = document.querySelectorAll('img[data-loading-image]');
const loadMapBlock = document.querySelector('.map-item');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.loadingImage) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
      lazyScrollCheck();
    }
  });
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex((item) => scrollY > item - windowHeight);
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.loadingImage) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.loadingImage;
      lazyImages[imgIndex].removeAttribute('data-loading-image');
    }
    delete lazyImagesPositions[imgIndex];
  }
}

export default function lazyScroll() {
  if (document.querySelectorAll('img[data-loading-image]').length > 0) {
    lazyScrollCheck();
  }
  if (!loadMapBlock.classList.contains('loaded')) {
    getMap();
  }
}

function getMap() {
  const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + scrollY;
  if (scrollY > loadMapBlockPos - windowHeight) {
    const loadMapUrl = loadMapBlock.dataset.map;
    if (loadMapUrl) {
      loadMapBlock.insertAdjacentHTML('beforeend', `<iframe src=${loadMapUrl} style='border: 0; allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'></iframe>`);
      loadMapBlock.classList.add('loaded');
    }
  }
}
