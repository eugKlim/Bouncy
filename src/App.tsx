import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/ScrollToTop';
import Routing from './components/routing/Routing';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ScrollToTop />
      <Header />
      <main className="main">
        <Routing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
