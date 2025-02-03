import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-logo">Bouncy</h2>
        <h3 className="footer-title">Copyright 2015. All rights Reserved</h3>

        <nav className="footer-social">
          <a href="#" title="facebook" aria-label="link to facebook">
            <img src="/image/global-icons/facebook.svg" alt="facebook" />
          </a>
          <a href="#" title="twitter" aria-label="link to twitter">
            <img src="/image/global-icons/twitter.svg" alt="twitter" />
          </a>
          <a href="#" title="linkedIn" aria-label="link to linkedIn">
            <img src="/image/global-icons/linkedin.svg" alt="linkedIn" />
          </a>
          <a href="#" title="instagram" aria-label="link to instagram">
            <img src="/image/global-icons/instagramm.svg" alt="instagram" />
          </a>
          <a href="#" title="vimeo" aria-label="link to vimeo">
            <img src="/image/global-icons/vimeo.svg" alt="vimeo" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
