import tabMechanism from './modules/tab.js';
import burgerMenu from './local/burgerMenu.js';
import lozad from 'lozad';

// lazy load:
const observer = lozad();
observer.observe();
// /

// overal:
tabMechanism();
burgerMenu();
