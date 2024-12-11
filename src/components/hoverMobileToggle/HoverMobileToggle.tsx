import './hoverMobileToggle.scss';
import { IHoverMobileToggle } from '../../types/types';

const HoverMobileToggle: React.FC<IHoverMobileToggle> = ({
  index,
  hoverMobileState,
  openOrHiddenHover,
  isOpen,
}) => {
  return (
    <button
      className={`${
        hoverMobileState[index]
          ? 'hoverMobileBtn-show'
          : 'hoverMobileBtn-hidden'
      } hoverMobileBtn`}
      onClick={() => openOrHiddenHover(index)}
    >
      {isOpen ? <img src="/image/portfolio/hand.svg" alt="Open more" /> : '✕'}
    </button>
  );
};

export default HoverMobileToggle;
