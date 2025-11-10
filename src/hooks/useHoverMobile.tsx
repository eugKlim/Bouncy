import { useState } from 'react';

interface IDataItem {
  image: string;
  text: string;
  name: string;
  work: string;
  imageSize: number[];
  hoverTitle: string;
  class: string;
  hoverText: string;
}

type TPartialDataItem = {
  [K in keyof IDataItem]?: IDataItem[K];
};

interface IUseHoverMobile {
  dataItems: TPartialDataItem[];
}

const useHoverMobile = ({ dataItems }: IUseHoverMobile) => {
  const [hoverMobileState, setHoverMobileState] = useState<boolean[]>(
    dataItems.map(() => false)
  );

  const openOrHiddenHover = (index: number) => {
    setHoverMobileState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const clearState = () => {
    setHoverMobileState(dataItems.map(() => false));
  };

  return { hoverMobileState, openOrHiddenHover, clearState };
};

export default useHoverMobile;
