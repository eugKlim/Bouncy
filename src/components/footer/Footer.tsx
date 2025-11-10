import './footer.scss';
import { socialLinksDb } from './footerDb';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-logo">Bouncy</h2>
        <h3 className="footer-title">Copyright 2025. All rights Reserved</h3>

        <nav className="footer-social">
          {socialLinksDb.map((link) => (
            <a
              key={link.id}
              href={link.href}
              title={link.title}
              aria-label={link.ariaLabel}
            >
              <img
                src={link.iconSrc}
                alt={link.alt}
                width="25"
                height="25"
                loading="lazy"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
