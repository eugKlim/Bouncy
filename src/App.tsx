import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/header/Header';
import ScrollToTop from './utils/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
