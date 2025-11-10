import About from '../../components/about/About';
import Seo from './Seo';

const AboutPage = () => {
  return (
    <>
      <Seo />
      <div className="page" style={{ paddingTop: '150px' }}>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
