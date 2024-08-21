import tabMechanism from './modules/tab.js';
import burgerMenu from './local/burgerMenu.js';
import checkFormatImage from './local/check-Format-Img/check-image.js';
import checkFormatBg from './local/check-Format-Img/check-bg.js';

document.addEventListener('DOMContentLoaded', function () {
  // overal:
  checkFormatImage();
  checkFormatBg();
  tabMechanism();
  burgerMenu();
});
