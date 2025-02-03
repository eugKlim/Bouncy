import { useState, useEffect } from 'react';
import './portfolio.scss';

import useHoverMobile from '../../hooks/useHoverMobile';
import HoverMobileToggle from '../hoverMobileToggle/HoverMobileToggle';
import useWindowWidth from '../../hooks/useWindowWidth';

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
  const width = useWindowWidth();
  const { openOrHiddenHover, hoverMobileState } = useHoverMobile({
    dataItems: PortfolioItemsDb,
  });

  const [activeNav, setActiveNav] = useState<number>(0);
  const [selectCategory, setSelectCategory] = useState<IPortfolioItemsDb[]>([]);
  const getCategory = (userCategory: string, index: number) => {
    setActiveNav(index);
    setIsHideBlock(false);

    if (userCategory == 'All Works') return setHideBlocks(PortfolioItemsDb);

    const filterData = PortfolioItemsDb.filter(
      (item) => item.category === userCategory
    );
    setSelectCategory(filterData);
    setHideBlocks(selectCategory);
  };

  const itemsData =
    selectCategory.length !== 0 ? selectCategory : PortfolioItemsDb;

  // Скрытие блоков на тел
  const [isHideBlock, setIsHideBlock] = useState<boolean>(false);
  const [hideBlocks, setHideBlocks] = useState<IPortfolioItemsDb[]>(itemsData);

  useEffect(() => {
    setHideBlocks(itemsData);
  }, [itemsData]);

  const toggleHideBLock = () => {
    setHideBlocks(itemsData);
    setIsHideBlock(false);
  };

  useEffect(() => {
    if (width <= 890) {
      setIsHideBlock(true);
      setHideBlocks(itemsData.length === 2 ? itemsData : itemsData.slice(0, 2));
    } else {
      setIsHideBlock(false);
      setHideBlocks(itemsData);
    }
  }, [width]);

  //

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
        <div
          className={`${isHideBlock && 'hidden-block-active'} portfolio-items`}
        >
          {hideBlocks.map((item, index) => (
            <div className={`portfolio-item ${item.category}`} key={index}>
              <div className="portfolio-item__img">
                <img src={item.image} alt="Image" />

                {!hoverMobileState[index] && (
                  <HoverMobileToggle
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                    isOpen={true}
                  />
                )}
              </div>
              {/* hover */}
              <div
                className={`${
                  hoverMobileState[index]
                    ? 'show-transition-block'
                    : 'hidden-transition-block'
                } portfolio-item__hover`}
              >
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

                {hoverMobileState[index] && (
                  <HoverMobileToggle
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                    isOpen={false}
                  />
                )}
              </div>
              {/* / */}
            </div>
          ))}
          <button
            className={`${!isHideBlock && 'hidden'} hidden-block-btn`}
            onClick={toggleHideBLock}
          >
            SHOW MORE
          </button>
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
