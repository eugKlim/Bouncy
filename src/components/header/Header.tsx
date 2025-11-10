import './header.scss';
import { useEffect, useState, memo, useCallback } from 'react';
import useScrollSizeWindow from '../../hooks/useScrollSizeWindow';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { menuDb } from './menu';

import { useTheme } from '../../providers/ThemeProvider';

const Navigation = memo(
  ({
    isActiveBurger,
    toggleBurger,
  }: {
    isActiveBurger: boolean;
    toggleBurger: () => void;
  }) => (
    <nav
      className={`${isActiveBurger && 'active'} header-nav`}
      onClick={toggleBurger}
    >
      <ul className={`${isActiveBurger && 'active'}`}>
        {menuDb.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className="header-nav__link"
              aria-label={`link to section ${item.title}`}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const howScrollY = useScrollSizeWindow();
  const isHomePage = location.pathname === '/home';
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
  const [isFixedHeader, setIsFixedHeader] = useState<boolean>(false);
  const { handleToggleTheme, theme } = useTheme();

  const toggleBurger = useCallback(() => {
    setIsActiveBurger((prev) => !prev);
  }, []);

  const handleLogoClick = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  useEffect(() => {
    const shouldFixHeader = howScrollY >= 600;
    if (shouldFixHeader !== isFixedHeader) {
      setIsFixedHeader(shouldFixHeader);
    }
  }, [howScrollY, isFixedHeader]);

  return (
    <header
      className={`${isFixedHeader && 'header-fixed'} ${
        isHomePage ? '' : 'bg-test'
      } header`}
    >
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo" onClick={handleLogoClick}>
            Bouncy
          </h1>

          <div className="header-left">
            <Navigation
              isActiveBurger={isActiveBurger}
              toggleBurger={toggleBurger}
            />

            <select
              className="header-theme"
              onChange={(e) => handleToggleTheme(e.target.value)}
              value={theme}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>

            <button
              title="menu"
              className={`${isActiveBurger && 'active'} burger`}
              aria-label="menu button"
              onClick={toggleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
