import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import PortfolioPage from '../../pages/PortfolioPage';
import ServicesPage from '../../pages/ServicesPage';
import TeamPage from '../../pages/TeamPage';
import NotFoundPage from '../../pages/NotFoundPage';

export const ROUTINGLINK = [
  {
    path: '/',
    element: <Navigate to={ROUTES.HOME} />,
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: ROUTES.CONTACT,
    element: <ContactPage />,
  },
  {
    path: ROUTES.PORTFOLIO,
    element: <PortfolioPage />,
  },
  {
    path: ROUTES.SERVICES,
    element: <ServicesPage />,
  },
  {
    path: ROUTES.TEAM,
    element: <TeamPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
] as const;
