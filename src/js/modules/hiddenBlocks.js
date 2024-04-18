let hiddenBlocksState = new Set();

function hiddenBlocks(countElShow, breakPoint, filter, mainBlockJsName, mainBlockHtmlClass, classAllItems) {
  function overall(allItems) {
    let mainBlockJs = document.querySelector(mainBlockHtmlClass);
    if (window.innerWidth <= breakPoint) {
      if (!hiddenBlocksState.has(mainBlockJsName)) {
        hiddenBlocksState.add(mainBlockJsName);
        mainBlockJs.classList.add('hidden-block-active');

        for (let i = countElShow; i < allItems.length; i++) {
          allItems[i].classList.remove('show-block');
          allItems[i].classList.add('hidden');
        }

        let createButton = mainBlockJs.querySelector('.hidden-block-btn');

        if (!createButton) {
          createButton = document.createElement('button');
          createButton.textContent = 'Show more...';
          createButton.classList.add('hidden-block-btn');
          mainBlockJs.appendChild(createButton);

          createButton.addEventListener('click', function () {
            for (let i = 0; i < allItems.length; i++) {
              allItems[i].classList.add('show-block');
              allItems[i].classList.remove('hidden');
            }
            mainBlockJs.classList.remove('hidden-block-active');
            createButton.remove();
          });
        }
      }
    } else {
      mainBlockJs.classList.remove('hidden-block-active');
      for (let i = 0; i < allItems.length; i++) {
        allItems[i].classList.add('show-block');
        allItems[i].classList.remove('hidden');
      }
      let createButton = mainBlockJs.querySelector('.hidden-block-btn');
      if (createButton) {
        createButton.remove();
      }
      hiddenBlocksState.delete(mainBlockJsName);
    }
  }
  // no filter
  if (!filter) {
    let classAllItemsList = document.querySelectorAll(classAllItems);
    if (classAllItemsList.length > 2) {
      overall(classAllItemsList);
    }
  }
  // filter
  else {
    overall(classAllItems);
  }
}

export { hiddenBlocksState, hiddenBlocks };
