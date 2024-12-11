export interface IHoverMobileToggle {
  index: number;
  hoverMobileState: boolean[];
  openOrHiddenHover: (index: number) => void;
  isOpen: boolean;
}
