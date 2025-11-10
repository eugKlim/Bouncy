export interface IPortfolioItemsDb {
  category: string;
  image: string;
  imageSize: number[];
}

export interface IBaseProps {
  portfolioItemsDb: IPortfolioItemsDb[];
  setHideBlocks: (item: IPortfolioItemsDb[]) => void;
  setIsHideBlock: (value: boolean) => void;
}
