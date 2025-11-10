import { lazy, Suspense } from 'react';
import '../../style/vars.scss';
import Seo from './Seo';

import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import About from '../../components/about/About';
import Services from '../../components/services/Services';

import Featured from '../../components/featured/Featured';
import News from '../../components/news/News';

const Details = lazy(() => import('../../components/details/Details'));
const Impressed = lazy(() => import('../../components/impressed/Impressed'));
const Portfolio = lazy(() => import('../../components/portfolio'));
const Team = lazy(() => import('../../components/team/Team'));
const Talk = lazy(() => import('../../components/talk/Talk'));
const Price = lazy(() => import('../../components/price/Price'));
const Subscribe = lazy(() => import('../../components/subscribe/Subscribe'));
const Contact = lazy(() => import('../../components/contact/Contact'));
const ContactForm = lazy(
  () => import('../../components/contact-form/Contact-Form')
);
const Map = lazy(() => import('../../components/map/Map'));

const HomePage = () => {
  const loading = <div>Loading...</div>;
  return (
    <>
      <Seo />
      <div>
        <Header />
        <Intro />
        <About />
        <Services />
        <Featured />
        <News />

        <Suspense fallback={loading}>
          <Details />
          <Impressed />
        </Suspense>

        <Suspense fallback={loading}>
          <Portfolio />
          <Team />
        </Suspense>

        <Suspense fallback={loading}>
          <Talk />
          <Price />
        </Suspense>

        <Suspense fallback={loading}>
          <Subscribe />
          <Contact />
        </Suspense>

        <Suspense fallback={loading}>
          <ContactForm />
          <Map />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
