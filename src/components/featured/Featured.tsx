import { useEffect, useState } from 'react';
import './featured.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const FeaturedDb = [
  {
    title: 'Featured',
    image: '/image/featured/item1.webp',
  },
  {
    title: 'VINTAGE',
    image: '/image/featured/item2.webp',
  },
  {
    title: 'Branding',
    image: '/image/featured/item3.webp',
  },
];

const Featured = () => {
  const width = useWindowWidth();

  // скрытие блоков на тел
  const [isHideBlock, setIsHideBlock] = useState(false);
  const [hideBlocks, setHideBlocks] = useState(FeaturedDb);

  const toggleHideBLock = () => {
    setHideBlocks(FeaturedDb);
    setIsHideBlock(false);
  };

  useEffect(() => {
    if (width <= 620) {
      setIsHideBlock(true);
      setHideBlocks(
        FeaturedDb.length === 2 ? FeaturedDb : FeaturedDb.slice(0, 1)
      );
    } else {
      setIsHideBlock(false);
      setHideBlocks(FeaturedDb);
    }
  }, [width]);
  //

  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured-title">FEATURED PROJECTS</h2>
        <h3 className="featured-subTitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div
          className={`${isHideBlock && 'hidden-block-active'} featured-items `}
        >
          {hideBlocks.map((item, index) => (
            <div className="featured-item" key={index}>
              <div className="featured-item__img">
                <img src={item.image} alt={`image ${item.title}`} />
              </div>
              <div className="featured-item__hover">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
          <button
            className={`${!isHideBlock && 'hidden'} hidden-block-btn`}
            onClick={toggleHideBLock}
          >
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
