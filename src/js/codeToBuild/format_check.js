function isImageSupported(imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  
  return new Promise((resolve) => {
    img.onload = function() {
      resolve(true);
    };
    
    img.onerror = function() {
      resolve(false);
    };
  });
}

async function replaceImagesBasedOnSupport() {
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

// Проверяем поддержку форматов при загрузке страницы
window.addEventListener('load', replaceImagesBasedOnSupport);
