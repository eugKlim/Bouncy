import { lazy, Suspense } from 'react';
import '../style/vars.scss';

import { Helmet } from 'react-helmet-async';

import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import About from '../components/about/About';
import Services from '../components/services/Services';

const Featured = lazy(() => import('../components/featured/Featured'));
const News = lazy(() => import('../components/news/News'));
const Details = lazy(() => import('../components/details/Details'));
const Impressed = lazy(() => import('../components/impressed/Impressed'));
const Portfolio = lazy(() => import('../components/portfolio/Portfolio'));
const Team = lazy(() => import('../components/team/Team'));
const Talk = lazy(() => import('../components/talk/Talk'));
const Price = lazy(() => import('../components/price/Price'));
const Subscribe = lazy(() => import('../components/subscribe/Subscribe'));
const Contact = lazy(() => import('../components/contact/Contact'));
const ContactForm = lazy(
  () => import('../components/contact-form/Contact-Form')
);
const Map = lazy(() => import('../components/map/Map'));

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
        <Suspense fallback={null}>
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
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
