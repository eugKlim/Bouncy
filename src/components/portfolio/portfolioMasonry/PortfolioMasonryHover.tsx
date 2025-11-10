import { hoverBtnsDb } from '../protfolioDb';
import HoverMobileToggle from '../../hoverMobileToggle/HoverMobileToggle';

interface IProps {
  index: number;
  hoverMobileState: boolean[];
  openOrHiddenHover: (index: number) => void;
}

const PortfolioMasonryHover: React.FC<IProps> = ({
  index,
  openOrHiddenHover,
  hoverMobileState,
}) => {
  return (
    <div
      className={`${
        hoverMobileState[index]
          ? 'show-transition-block'
          : 'hidden-transition-block'
      } portfolio-item__hover`}
    >
      <h4 className="portfolio-item__hover-title">TITLE HERE</h4>
      <p className="portfolio-item__hover-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis
        praesentium
      </p>
      <p className="portfolio-item__hover-btns">
        {hoverBtnsDb.map((btn) => (
          <button
            key={btn.title}
            title={btn.title}
            className={btn.className}
            aria-label={btn.aria}
          >
            <img src={btn.icon} alt={`Icon ${btn.title}`} />
          </button>
        ))}
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
  );
};

export default PortfolioMasonryHover;
