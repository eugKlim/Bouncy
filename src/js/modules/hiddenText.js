export default function hideText(hidenBlock, btn, threeDots) {
  btn.addEventListener('click', function () {
    if (hidenBlock.classList.contains('show')) {
      hidenBlock.classList.remove('show');
      threeDots.style.display = 'inline-block';
      btn.textContent = 'Read More';
    } else {
      hidenBlock.classList.add('show');
      threeDots.style.display = 'none';
      btn.textContent = 'Hide Text';
    }
  });
}
