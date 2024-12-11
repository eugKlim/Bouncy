import { useEffect, useState } from 'react';
import './header.scss';
import useScrollSizeWindow from '../../hooks/useScrollSizeWindow';
import { NavLink, useLocation } from 'react-router-dom';

const NavDb = [
  {
    title: 'Hello',
    link: 'home',
  },
  {
    title: 'About',
    link: 'about',
  },
  {
    title: 'Services',
    link: 'services',
  },
  {
    title: 'Portfolio',
    link: 'portfolio',
  },
  {
    title: 'Team',
    link: 'team',
  },
  {
    title: 'Contact',
    link: 'contact',
  },
];

const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const howScrollY = useScrollSizeWindow();
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  const toggleBurger = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  const [isFixedHeader, setIsFixedHeader] = useState(false);
  useEffect(() => {
    if (howScrollY >= 600) {
      setIsFixedHeader(true);
    } else {
      setIsFixedHeader(false);
    }
  }, [howScrollY]);

  return (
    <header
      className={`${isFixedHeader && 'header-fixed'} ${
        isHomePage ? '' : 'bg-test'
      } header`}
    >
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo">Bouncy</h1>
          <nav
            className={`${isActiveBurger && 'active'} header-nav`}
            onClick={() => toggleBurger()}
          >
            <ul className={`${isActiveBurger && 'active'}`}>
              {NavDb.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${item.link}`}
                    className="header-nav__link"
                    aria-label={`link to section ${item.title}`}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button
            title="menu"
            className={`${isActiveBurger && 'active'} burger`}
            aria-label="menu button"
            onClick={() => toggleBurger()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
