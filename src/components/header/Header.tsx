import React from 'react';
import './header.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="header-logo">Bouncy</h1>
          <nav className="header-nav">
            <ul>
              <li>
                <a
                  href="#intro"
                  title="Hello"
                  className="header-nav__link yankor"
                  aria-label="link to section Hello"
                >
                  Hello
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  title="About"
                  className="header-nav__link yankor"
                  aria-label="link to section About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  title="Services"
                  className="header-nav__link yankor"
                  aria-label="link to section Services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  title="Portfolio"
                  className="header-nav__link yankor"
                  aria-label="link to section Portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  title="Team"
                  className="header-nav__link yankor"
                  aria-label="link to section Team"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  title="Contact"
                  className="header-nav__link yankor"
                  aria-label="link to section Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button title="menu" className="burger" aria-label="menu button">
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
