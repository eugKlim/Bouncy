import './portfolio.scss';

const PortfolioStart = () => {
  return (
    <div>
      <div className="portfolio-start " id="portfolio-start">
        <h4 className="portfolio-start__title">
          At vero eos et <span className="text-bold">accusamus</span> et iusto
          odio
          <span className="text-bold">dignissimos</span> ducimus qui blanditiis
        </h4>
        <button
          title="start button"
          className="portfolio-start__btn"
          id="portfolio-start__btn"
          aria-label="Start Project"
        >
          Start Project
        </button>
      </div>
    </div>
  );
};

export default PortfolioStart;
