export default function checkBg() {
  const supportsAvif = async () => {
    const avif =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    return await new Promise((resolve) => {
      const img = new Image();
      img.src = avif;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const supportsWebp = async () => {
    return await new Promise((resolve) => {
      const img = new Image();
      img.src =
        'data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA';
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const setLazyBackgrounds = async () => {
    const lazyBgElements = document.querySelectorAll('.lazy-bg');
    for (let lazyBgElement of lazyBgElements) {
      let imageUrl = lazyBgElement.getAttribute('data-bg');
      const baseImagePath = imageUrl.substring(0, imageUrl.lastIndexOf('.'));

      if (await supportsAvif()) {
        imageUrl = `${baseImagePath}.avif`;
      } else if (await supportsWebp()) {
        imageUrl = `${baseImagePath}.webp`;
      }

      lazyBgElement.style.backgroundImage = `url('${imageUrl}')`;
    }
  };
  setLazyBackgrounds();
}
