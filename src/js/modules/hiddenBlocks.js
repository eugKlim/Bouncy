let hiddenBlocksState = new Set();

function hiddenBlocks(
  mainBlockJsName,
  mainBlockHtmlClass,
  classAllItems,
  countElShow,
  breakPoint
) {
  let mainBlockJs = document.querySelector('.' + mainBlockHtmlClass);
  let classAllItemsList = document.querySelectorAll('.' + classAllItems);
  if (window.innerWidth <= breakPoint) {
    if (!hiddenBlocksState.has(mainBlockJsName)) {
      hiddenBlocksState.add(mainBlockJsName);
      mainBlockJs.classList.add('hidden-block-active');

      for (let i = countElShow; i < classAllItemsList.length; i++) {
        classAllItemsList[i].style.display = 'none';
      }

      let createButton = mainBlockJs.querySelector('.hidden-block-btn');

      if (!createButton) {
        createButton = document.createElement('button');
        createButton.textContent = 'Show more...';
        createButton.classList.add('hidden-block-btn');
        mainBlockJs.appendChild(createButton);

        createButton.addEventListener('click', function () {
          for (let i = 0; i < classAllItemsList.length; i++) {
            classAllItemsList[i].style.display = 'block';
          }
          mainBlockJs.classList.remove('hidden-block-active');
          createButton.remove();
        });
      }
    }
  } else {
    mainBlockJs.classList.remove('hidden-block-active');
    for (let i = 0; i < classAllItemsList.length; i++) {
      classAllItemsList[i].style.display = 'block';
    }
    let createButton = mainBlockJs.querySelector('.hidden-block-btn');
    if (createButton) {
      createButton.remove();
    }
    hiddenBlocksState.delete(mainBlockJsName);
  }
}

export {hiddenBlocksState, hiddenBlocks}