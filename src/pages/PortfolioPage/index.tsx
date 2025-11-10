import Portfolio from '../../components/portfolio';
import Seo from './Seo';

const PortfolioPage = () => {
  return (
    <>
      <Seo />
      <div className="page">
        <Portfolio />
      </div>
    </>
  );
};

export default PortfolioPage;
