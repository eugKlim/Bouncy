import * as hiddenBlocksModule from './hiddenBlocks.js';

let filterDataHiddenBlock;

const filterObjects = {
  stateMainBlock: new Set(),
};

function createFilterOptions(getNameMainBlock) {
  for (let i = 0; i < filterDataHiddenBlock.length; i++) {
    if (getNameMainBlock === filterDataHiddenBlock[i][0]) {
      filterObjects[getNameMainBlock].filterAddOptions =
        filterDataHiddenBlock[i][1];
    }
  }
}

function callItems(getNameMainBlock) {
  if (filterObjects[getNameMainBlock].filterCountEl > 2) {
    if (filterObjects.stateMainBlock.has(getNameMainBlock)) {
      hiddenBlocksModule.hiddenBlocks(
        ...filterObjects[getNameMainBlock].filterAddOptions,
        filterObjects[getNameMainBlock].filterItems
      );
    }
  }
}

function filterContent(
  mainBlock,
  filterMenu,
  filterBtn,
  mainBlockItems,
  mainBlockContent,
  startActiveBtn
) {
  const getMainBlock = document.querySelector(mainBlock);
  const getMenu = getMainBlock.querySelector(filterMenu);
  const getAllFilterBtns = getMainBlock.querySelectorAll(filterBtn);
  const getAllItems = getMainBlock.querySelectorAll(mainBlockContent);
  let getNameMainBlock = mainBlock.substring(1);
  const getActiveDatasetFilter =
    getAllFilterBtns[startActiveBtn].dataset.filter;

  getAllFilterBtns[startActiveBtn].classList.add('active');

  showItems(getActiveDatasetFilter);

  function showItems(filter) {
    getAllItems.forEach(function (item) {
      if (filter === 'All' || item.classList.contains(filter)) {
        if (!filterObjects[getNameMainBlock]) {
          filterObjects[getNameMainBlock] = {};
          createFilterOptions(getNameMainBlock);
          filterObjects[getNameMainBlock].filterItems = [];
          filterObjects.stateMainBlock.add(getNameMainBlock);
        }
        item.classList.remove('hidden');
        item.classList.add('show-block');
        filterObjects[getNameMainBlock].filterItems.push(item);
        let getFilterItems = filterObjects[getNameMainBlock].filterItems;
        filterObjects[getNameMainBlock].filterCountEl = getFilterItems.length;
      } else {
        item.classList.add('hidden');
        item.classList.remove('show-block');
      }
    });
    callItems(getNameMainBlock);
  }

  getMenu.addEventListener('click', function (e) {
    const target = e.target;
    let targetBtn = filterBtn.substring(1);
    if (target.classList.contains(targetBtn)) {
      const filter = target.dataset.filter;
      filterObjects[getNameMainBlock].filterItems = [];
      getAllFilterBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      target.classList.add('active');
      showItems(filter);

      let getBlockItems = document.querySelector(mainBlockItems);
      getBlockItems.classList.remove('hidden-block-active');
      let btnShowMoreDelete = getBlockItems.querySelector('.hidden-block-btn');
      if (btnShowMoreDelete) {
        btnShowMoreDelete.remove();
      }
    }
  });
}

window.addEventListener('resize', function () {
  let getCurrentBlocks = Array.from(filterObjects.stateMainBlock);
  for (let blocks of getCurrentBlocks) {
    if (blocks) {
      createFilterOptions(blocks);
      callItems(blocks);
    }
  }
});

// Добавление элементов:

filterDataHiddenBlock = [
  ['portfolio', [2, 890, true, 'portfolioItems', '.portfolio-items']],
];
filterContent(
  '.portfolio',
  '.portfolio-menu__filter',
  '.portfolio-menu__filter-btn',
  '.portfolio-items',
  '.portfolio-item',
  0
);
