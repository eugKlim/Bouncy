import { useState } from 'react';
import './portfolio.scss';

type IPortfolioItemsDb = {
  category: string;
  image: string;
};

const PortfolioDbNav = [
  {
    title: 'All Works',
  },
  {
    title: 'Print',
  },
  {
    title: 'Identity',
  },
  {
    title: 'Branding',
  },
  {
    title: 'HTML',
  },
  {
    title: 'Wordpress',
  },
];

const PortfolioItemsDb: IPortfolioItemsDb[] = [
  {
    category: 'Print',
    image: '/image/portfolio/portfolio-1.webp',
  },
  {
    category: 'Identity',
    image: '/image/portfolio/portfolio-2.webp',
  },
  {
    category: 'Print',
    image: '/image/portfolio/portfolio-3.webp',
  },
  {
    category: 'HTML',
    image: '/image/portfolio/portfolio-4.webp',
  },
  {
    category: 'Identity',
    image: '/image/portfolio/portfolio-5.webp',
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-6.webp',
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-7.webp',
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-8.webp',
  },
  {
    category: 'Branding',
    image: '/image/portfolio/portfolio-9.webp',
  },
  {
    category: 'Wordpress',
    image: '/image/portfolio/portfolio-10.webp',
  },
  {
    category: 'Web',
    image: '/image/portfolio/portfolio-11.webp',
  },
  {
    category: 'Web',
    image: '/image/portfolio/portfolio-12.webp',
  },
];

const Portfolio = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [selectCategory, setSelectCategory] = useState<IPortfolioItemsDb[]>([]);

  const getCategory = (userCategory: string, index: number) => {
    setActiveNav(index);

    if (userCategory != 'All Works') setSelectCategory([]);

    const filterData = PortfolioItemsDb.filter(
      (item) => item.category === userCategory
    );
    setSelectCategory(filterData);
  };

  const itemsData =
    selectCategory.length !== 0 ? selectCategory : PortfolioItemsDb;

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
            {PortfolioDbNav.map((item, index) => (
              <li
                className={`${
                  activeNav === index ? 'active' : ''
                } portfolio-menu__filter-btn`}
                aria-label={`link ${item.title}`}
                key={index}
                onClick={() => getCategory(item.title, index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="portfolio-items">
          {itemsData.map((item, index) => (
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
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  quiblanditiis praesentium
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
