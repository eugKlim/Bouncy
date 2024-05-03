async function isImageSupported(imgSrc) {
  const img = new Image();
  img.src = imgSrc;

  return new Promise((resolve) => {
    img.onload = function () {
      resolve(true);
    };

    img.onerror = function () {
      resolve(false);
    };
  });
}

async function replaceCssImagesBasedOnSupport() {
  const getCssBgBlock = document.querySelectorAll('[data-orig-bg-image]');

  for (const container of getCssBgBlock) {
    const cssImgSrc = container.dataset.origBgImage;
    const getMainBlock = container.id;
    const searchJpg = /.jpg/gi;
    const searchPng = /.png/gi;

    if (cssImgSrc.match(searchJpg) || cssImgSrc.match(searchPng)) {
      const newPath = cssImgSrc.replace(/\.\w+$/, '');

      const style = document.createElement('style');
      style.textContent = `
      ${'#' + getMainBlock}.avif-supported {
        background-image: url(${newPath}.avif);
      }
      ${'#' + getMainBlock}.webp-supported {
        background-image: url(${newPath}.webp);
      }
      ${'#' + getMainBlock}.fallback-supported {
        background-image: url(${newPath}.jpg);
      }
      `;
      const mainEl = document.querySelector('#' + getMainBlock);
      mainEl.appendChild(style);
    }

    if (await isImageSupported(cssImgSrc.replace(/\.jpg$|\.png$/, '.avif'))) {
      container.classList.add('avif-supported');
    } else if (await isImageSupported(cssImgSrc.replace(/\.jpg$|\.png$/, '.webp'))) {
      container.classList.add('webp-supported');
    } else {
      container.classList.add('fallback-supported');
    }
  }
}

async function replaceHtmlImagesBasedOnSupport() {
  const imgElements = document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]');

  for (const img of imgElements) {
    const imgSrc = img.src;

    if (await isImageSupported(imgSrc.replace(/\.jpg$|\.png$/, '.avif'))) {
      img.src = imgSrc.replace(/\.jpg$|\.png$/, '.avif');
    } else if (await isImageSupported(imgSrc.replace(/\.jpg$|\.png$/, '.webp'))) {
      img.src = imgSrc.replace(/\.jpg$|\.png$/, '.webp');
    }
  }
}

window.addEventListener('load', function () {
  replaceHtmlImagesBasedOnSupport();
  replaceCssImagesBasedOnSupport();
});
