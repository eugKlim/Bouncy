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
    const closePopupBtn = this.popupElement.querySelector(
      '.popup-content__close'
    );
    closePopupBtn.addEventListener('click', () => {
      this.popupElement.classList.remove('popup-active');
      document.body.classList.remove('noScroll');
    });
    this.popupElement.addEventListener('click', (e) => {
      if (e.target === this.popupElement) {
        this.popupElement.classList.remove('popup-active');
        document.body.classList.remove('noScroll');
      }
    });
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

// Добавление элементов:
addPopups(
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
addPopups('price', 'price-card__start', `Lets start...`);

