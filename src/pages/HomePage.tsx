import '../style/vars.scss';
import Intro from '../components/intro/Intro';
import Header from '../components/header/Header';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Featured from '../components/featured/Featured';
import News from '../components/news/News';
import Details from '../components/details/Details';
import Impressed from '../components/impressed/Impressed';
import Portfolio from '../components/portfolio/Portfolio';
import Team from '../components/team/Team';
import Talk from '../components/talk/Talk';
import Price from '../components/price/Price';
import Subscribe from '../components/subscribe/Subscribe';
import Contact from '../components/contact/Contact';
import ContactForm from '../components/contact-form/Contact-Form';
import Footer from '../components/footer/Footer';
import Map from '../components/map/Map';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Home</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div>
        <Header />
        <Intro />
        <About />
        <Services />
        <Featured />
        <News />
        <Details />
        <Impressed />
        <Portfolio />
        <Team />
        <Talk />
        <Price />
        <Subscribe />
        <Contact />
        <ContactForm />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
