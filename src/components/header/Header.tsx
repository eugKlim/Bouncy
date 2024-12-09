import { useEffect, useState } from 'react';
import './header.scss';
import useScrollSizeWindow from '../../hooks/useScrollSizeWindow';

const NavDb = [
  {
    title: 'Hello',
  },
  {
    title: 'About',
  },
  {
    title: 'Services',
  },
  {
    title: 'Portfolio',
  },
  {
    title: 'Team',
  },
  {
    title: 'Contact',
  },
];

const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const howScrollY = useScrollSizeWindow();

  const toggleBurger = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  const [isFixedHeader, setIsFixedHeader] = useState(false);
  useEffect(() => {
    if (howScrollY >= 800) {
      setIsFixedHeader(true);
    } else {
      setIsFixedHeader(false);
    }
  }, [howScrollY]);

  return (
    <header className={`${isFixedHeader && 'header-fixed'} header`}>
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
                  <a
                    className="header-nav__link"
                    aria-label={`link to section ${item.title}`}
                  >
                    {item.title}
                  </a>
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
