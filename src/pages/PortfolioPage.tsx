import Portfolio from '../components/portfolio/Portfolio';
import { Helmet } from 'react-helmet-async';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Portfolio</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div className="page">
        <Portfolio />
      </div>
    </>
  );
};

export default PortfolioPage;
