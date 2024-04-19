import * as PopupModule from './modules/popup.js';
import * as hiddenBlocksModule from './modules/hiddenBlocks.js';
import hideText from './modules/hiddenText.js';
import tabMechanism from './modules/tab.js';
import burgerMenu from './modules/burgerMenu.js';
import { filterContent, filterObjects, createFilterOptions, callItems } from './modules/filter.js';
import scrollFixedHeader from './modules/fixedHeader.js';
import smoothScroll from './modules/smoothScroll.js';
import getActiveLinkOnScroll from './modules/addActiveScrollInNav.js';
import changePortfolioHover from './modules/changePortfolioHover.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Variables for filtering and hiding blocks.
let filterDataHiddenBlock;
let dataHiddenBlock;
//

document.addEventListener('DOMContentLoaded', function () {
  // add slider
  const swiper1 = new Swiper('.team-swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiper2 = new Swiper('.testimonials-swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // /

  // add popups.
  PopupModule.addPopups(
    'portfolio',
    'portfolio-start__btn',
    `
<h2 class="portfolio-title">THE PORTFOLIO</h2>
<h3 class="portfolio-subtitle">
  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  praesentium
</h3>
<p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus dolore suscipit unde dignissimos quis voluptatum, dolores, excepturi repudiandae reiciendis blanditiis? Vitae praesentium, temporibus labore facilis placeat tempora blanditiis, officia quod adipisci fugit quidem. Esse laudantium explicabo ullam officia error velit animi beatae corporis quod sit quae magnam odio natus eveniet alias, iste facere eos earum officiis. Laborum pariatur error doloremque ratione unde accusamus earum doloribus quidem eaque nulla, est odit modi tempore architecto! Dolorem similique veritatis facilis, recusandae repudiandae expedita, facere aspernatur quisquam quasi consectetur quam cupiditate quis in iusto suscipit aliquid molestias soluta ducimus, vel explicabo? Aliquam debitis officia voluptatibus, esse beatae ea dignissimos quibusdam? Ut ratione amet alias fugit corporis, est repudiandae laboriosam delectus architecto doloribus. Earum, ullam! Voluptates dolorem aut, nemo sit earum modi iure obcaecati inventore minus rerum asperiores nesciunt explicabo distinctio deserunt cum laborum fuga sunt ipsa totam, dicta amet, dignissimos harum placeat? Provident soluta magnam, fuga consequuntur quasi a tempore sint et. Culpa repellat quasi sapiente dolore aliquid consequuntur fugit provident, vitae nisi, cum ducimus officiis adipisci blanditiis. Quis et quisquam, beatae mollitia iste vero ex similique? Impedit reiciendis, consequuntur ullam explicabo delectus doloremque obcaecati aliquid, blanditiis aliquam repellendus quas quis sint alias.</p>
`
  );
  PopupModule.addPopups('price', 'price-card__start', `Lets start...`);
  // /

  // hidden text.
  hideText('about', 'about-content__btn', 'three-dots');
  // /

  scrollFixedHeader();

  getActiveLinkOnScroll();

  smoothScroll();

  tabMechanism();

  burgerMenu();

  changePortfolioHover();

  // filtering and calling the block hiding function for it.
  filterDataHiddenBlock = [['portfolio', [2, 890, true, 'portfolioItems', '.portfolio-items']]];
  filterContent('.portfolio', '.portfolio-menu__filter', '.portfolio-menu__filter-btn', '.portfolio-items', '.portfolio-item', 0);

  // hiding blocks without filtering.
  dataHiddenBlock = [[1, 620, false, 'featuredItems', '.featured-items', '.featured-item']];
  function addArgumentsAndCallFunc(blocks, func) {
    blocks.forEach((block) => func(...block));
  }
  addArgumentsAndCallFunc(dataHiddenBlock, hiddenBlocksModule.hiddenBlocks);
  // /

  window.addEventListener('resize', function () {
    // hidden blocks
    addArgumentsAndCallFunc(dataHiddenBlock, hiddenBlocksModule.hiddenBlocks);
    // /

    // hidden block for filter.
    let getCurrentBlocks = Array.from(filterObjects.stateMainBlock);
    for (let blocks of getCurrentBlocks) {
      if (blocks) {
        createFilterOptions(blocks);
        callItems(blocks);
      }
    }
    // /
  });

  window.addEventListener('scroll', function () {
    scrollFixedHeader();
    getActiveLinkOnScroll();
  });

  // /DOMContentLoaded
});
export { filterDataHiddenBlock, dataHiddenBlock };
