import './portfolio.scss';

const Portfolio = () => {
  const PortfolioItemsDb = [
    {
      category: 'Print',
      image: '/image/portfolio/portfolio-1.webp',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exmollitia iste deleniti rem consequatur! Est eos vitae ipsam essequo ut numquam molestias perspiciatis minus pariatur suntrepudiandae. Est eos vitae ipsam esse quo ut numquam molestiasperspiciatis minus pariatur sunt repudiandae.',
    },
    {
      category: 'Identity',
      image: '/image/portfolio/portfolio-2.webp',
      text: '',
    },
    {
      category: 'Print',
      image: '/image/portfolio/portfolio-3.webp',
      text: '',
    },
    {
      category: 'HTML',
      image: '/image/portfolio/portfolio-4.webp',
      text: '',
    },
    {
      category: 'Identity',
      image: '/image/portfolio/portfolio-5.webp',
      text: '',
    },
    {
      category: 'Branding',
      image: '/image/portfolio/portfolio-6.webp',
      text: '',
    },
    {
      category: 'Branding',
      image: '/image/portfolio/portfolio-7.webp',
      text: '',
    },
    {
      category: 'Branding',
      image: '/image/portfolio/portfolio-8.webp',
      text: '',
    },
    {
      category: 'Branding',
      image: '/image/portfolio/portfolio-9.webp',
      text: '',
    },
    {
      category: 'Wordpress',
      image: '/image/portfolio/portfolio-10.webp',
      text: '',
    },
    {
      category: 'Web',
      image: '/image/portfolio/portfolio-11.webp',
      text: '',
    },
    {
      category: 'Web',
      image: '/image/portfolio/portfolio-12.webp',
      text: '',
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">THE PORTFOLIO</h2>
        <h3 className="portfolio-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>
        <nav>
          <ul className="portfolio-menu__filter">
            <li
              className="portfolio-menu__filter-btn"
              title="show category All"
              data-filter="All"
              aria-label="link All Works"
            >
              All Works
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category Print"
              data-filter="Print"
              aria-label="link to Print"
            >
              Print
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category Identity"
              data-filter="Identity"
              aria-label="link to Identity"
            >
              Identity
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category Branding"
              data-filter="Branding"
              aria-label="link to Branding"
            >
              Branding
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category Web"
              data-filter="Web"
              aria-label="link to Web"
            >
              Web
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category HTML"
              data-filter="HTML"
              aria-label="link to HTML"
            >
              HTML
            </li>
            <li
              className="portfolio-menu__filter-btn"
              title="show category Wordpress"
              data-filter="Wordpress"
              aria-label="link to Wordpress"
            >
              Wordpress
            </li>
          </ul>
        </nav>
        <div className="portfolio-items">
          {PortfolioItemsDb.map((item, index) => (
            <div className={`portfolio-item ${item.category}`} key={index}>
              <div className="portfolio-item__img">
                <img src={item.image} alt="Image" />

                <button
                  className="portfolio-showBlockHover"
                  title="show info card"
                  aria-label="open info"
                >
                  <img src="/image/portfolio/hand.svg" alt="hand action" />
                </button>
                <button
                  className="portfolio-close"
                  title="close info card"
                  aria-label="close info"
                >
                  &times;
                </button>
              </div>
              <div className="portfolio-item__hover">
                <h4 className="portfolio-item__hover-title">TITLE HERE</h4>
                <p className="portfolio-item__hover-text">
                  {!item.text.length &&
                    'At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium'}
                </p>
                <p className="portfolio-item__hover-btns">
                  <button
                    title="Share"
                    className="portfolio-item__hover-btn-link"
                    aria-label="share btn"
                  >
                    <img
                      src="/image/global-icons/link-icon.svg"
                      alt="Icon link"
                    />
                  </button>
                  <button
                    title="Like"
                    className="portfolio-item__hover-btn-like"
                    aria-label="like"
                  >
                    <img
                      src="/image/global-icons/heart-icon.svg"
                      alt="Icon like"
                    />
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-start " id="portfolio-start">
          <h4 className="portfolio-start__title">
            At vero eos et <span className="text-bold">accusamus</span> et iusto
            odio
            <span className="text-bold">dignissimos</span> ducimus qui
            blanditiis
          </h4>
          <button
            title="start button"
            className="portfolio-start__btn"
            id="portfolio-start__btn"
            aria-label="Start Project"
          >
            Start Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
