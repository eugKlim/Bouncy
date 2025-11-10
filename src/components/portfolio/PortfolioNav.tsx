import { portfolioDbNav } from './protfolioDb';
import { useState } from 'react';
import type { IBaseProps } from './type';

const PortfolioNav: React.FC<IBaseProps> = ({
  setIsHideBlock,
  setHideBlocks,
  portfolioItemsDb,
}) => {
  const [activeNav, setActiveNav] = useState(0);

  const handleGetCategory = (userCategory: string, index: number) => {
    setActiveNav(index);
    setIsHideBlock(false);

    if (userCategory == 'All Works') return setHideBlocks(portfolioItemsDb);

    const filterData = portfolioItemsDb.filter(
      (item) => item.category === userCategory
    );

    setHideBlocks(filterData);
  };

  return (
    <nav>
      <ul className="portfolio-menu__filter">
        {portfolioDbNav.map((item, index) => (
          <li
            className={`${
              activeNav === index && 'active'
            } portfolio-menu__filter-btn`}
            aria-label={`link ${item.title}`}
            key={index}
            onClick={() => handleGetCategory(item.title, index)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortfolioNav;
