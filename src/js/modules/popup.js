class Popup {
  constructor(content) {
    this.content = content;
    this.popupElement = null;
    this.createPopup();
    this.closePopup();
  }

  createPopup() {
    this.popupElement = document.createElement('div');
    this.popupElement.classList.add('popup');
    this.popupElement.innerHTML = `
      <div class="popup-content">
        <div class="popup-content__close">&times;</div>
        ${this.content}
      </div>
    `;
    document.body.appendChild(this.popupElement);
  }
  closePopup() {
    const closePopupBtn = this.popupElement.querySelector('.popup-content__close');
    closePopupBtn.addEventListener('click', () => {
      this.popupElement.classList.remove('popup-active');
      document.body.classList.remove('noScroll');
    });
    this.popupElement.addEventListener('click', (e) => {
      if(e.target === this.popupElement) {
        this.popupElement.classList.remove('popup-active');
        document.body.classList.remove('noScroll');
      }
    })
  }
  
  openPopup() {
    this.popupElement.classList.add('popup-active');
    document.body.classList.add('noScroll');
  }
}

function addPopups(popupName, btnPopup, popupContent) {
  popupName = new Popup(popupContent);
  document.getElementById(btnPopup).addEventListener('click', () => {
    popupName.openPopup();
  });
}

export {Popup, addPopups}