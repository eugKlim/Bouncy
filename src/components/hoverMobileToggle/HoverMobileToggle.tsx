import './hoverMobileToggle.scss';

interface Iprops {
  index: number;
  hoverMobileState: boolean[];
  openOrHiddenHover: (index: number) => void;
  isOpen: boolean;
}

const HoverMobileToggle: React.FC<Iprops> = ({
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
