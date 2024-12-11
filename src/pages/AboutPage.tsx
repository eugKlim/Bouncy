import About from '../components/about/About';
import { Helmet } from 'react-helmet-async';
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - About</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div className="page" style={{ paddingTop: '150px' }}>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
