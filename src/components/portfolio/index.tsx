import './portfolio.scss';
import { useState, useEffect } from 'react';
import { portfolioItemsDb } from './protfolioDb';
import type { IPortfolioItemsDb } from './type';
import useWindowWidth from '../../hooks/useWindowWidth';
import PortfolioStart from './PortfolioStart';
import PortfolioNav from './PortfolioNav';
import PortfolioMasonry from './portfolioMasonry/PortfolioMasonry';

const Portfolio = () => {
  const width = useWindowWidth();
  const [isHideBlock, setIsHideBlock] = useState(false);
  const [hideBlocks, setHideBlocks] =
    useState<IPortfolioItemsDb[]>(portfolioItemsDb);

  useEffect(() => {
    if (width <= 890 && portfolioItemsDb.length > 2) {
      setIsHideBlock(true);
      setHideBlocks(portfolioItemsDb.slice(0, 2));
    } else {
      setIsHideBlock(false);
      setHideBlocks(portfolioItemsDb);
    }
  }, [width, portfolioItemsDb]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">THE PORTFOLIO</h2>
        <h3 className="portfolio-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <PortfolioNav
          setIsHideBlock={setIsHideBlock}
          setHideBlocks={setHideBlocks}
          portfolioItemsDb={portfolioItemsDb}
        />

        <PortfolioMasonry
          isHideBlock={isHideBlock}
          hideBlocks={hideBlocks}
          setHideBlocks={setHideBlocks}
          setIsHideBlock={setIsHideBlock}
          portfolioItemsDb={portfolioItemsDb}
        />

        <PortfolioStart />
      </div>
    </section>
  );
};

export default Portfolio;
