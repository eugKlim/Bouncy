export default function checkImg() {
  const lazyPictures = document.querySelectorAll('picture.lazy-picture');

  const lazyLoad = function (picture) {
    const sources = picture.querySelectorAll('source');
    const img = picture.querySelector('img');

    sources.forEach((source) => {
      source.srcset = source.dataset.srcset;
    });

    img.src = img.dataset.src;
    picture.classList.remove('lazy-picture');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyLoad(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    lazyPictures.forEach((picture) => {
      observer.observe(picture);
    });
  } else {
    lazyPictures.forEach((picture) => {
      lazyLoad(picture);
    });
  }
}
