const useSmoothScroll = () => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const offsetToTOp = 56;
      const elemPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elemPosition + window.scrollY - offsetToTOp;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return scrollToSection;
};

export default useSmoothScroll;
