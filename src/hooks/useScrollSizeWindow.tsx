import { useEffect, useState } from 'react';

const useScrollSizeWindow = () => {
  const [howScrollY, setHowScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHowScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return howScrollY;
};

export default useScrollSizeWindow;
