import Services from '../components/services/Services';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Services</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div
        className="page"
        style={{ backgroundColor: '#f3f3f3', height: '100vh' }}
      >
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
