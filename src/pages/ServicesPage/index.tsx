import Services from '../../components/services/Services';
import Seo from './Seo';

const ServicesPage = () => {
  return (
    <>
      <Seo />
      <div className="page" style={{ backgroundColor: '#f3f3f3' }}>
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
