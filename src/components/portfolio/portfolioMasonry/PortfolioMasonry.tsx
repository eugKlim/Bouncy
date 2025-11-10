import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import PortfolioMasonryHover from './PortfolioMasonryHover';
import useHoverMobile from '../../../hooks/useHoverMobile';
import HoverMobileToggle from '../../hoverMobileToggle/HoverMobileToggle';
import type { IBaseProps, IPortfolioItemsDb } from '../type';

interface IProps extends IBaseProps {
  isHideBlock: boolean;
  hideBlocks: IPortfolioItemsDb[];
}

const PortfolioMasonry: React.FC<IProps> = ({
  isHideBlock,
  hideBlocks,
  setHideBlocks,
  setIsHideBlock,
  portfolioItemsDb,
}) => {
  const { openOrHiddenHover, hoverMobileState, clearState } = useHoverMobile({
    dataItems: portfolioItemsDb,
  });

  useEffect(() => {
    clearState();
  }, [hideBlocks]);

  const handleToggleHideBLock = () => {
    setHideBlocks(portfolioItemsDb);
    setIsHideBlock(false);
  };

  return (
    <div className={`${isHideBlock && 'hidden-block-active'} portfolio-items`}>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          890: 2,
          620: 1,
        }}
        className="portfolio-masonry-grid"
        columnClassName="portfolio-masonry-grid_column"
      >
        {hideBlocks.map((item, index) => (
          <div className={`portfolio-item ${item.category}`} key={index}>
            <div className="portfolio-item__img">
              <img
                src={item.image}
                alt="Image"
                width={item.imageSize[0]}
                height={item.imageSize[1]}
                loading="lazy"
              />

              {!hoverMobileState[index] && (
                <HoverMobileToggle
                  index={index}
                  hoverMobileState={hoverMobileState}
                  openOrHiddenHover={openOrHiddenHover}
                  isOpen={true}
                />
              )}
            </div>

            <PortfolioMasonryHover
              index={index}
              hoverMobileState={hoverMobileState}
              openOrHiddenHover={openOrHiddenHover}
            />
          </div>
        ))}
      </Masonry>

      <button
        className={`${!isHideBlock && 'hidden'} hidden-block-btn`}
        onClick={handleToggleHideBLock}
      >
        SHOW MORE
      </button>
    </div>
  );
};

export default PortfolioMasonry;
