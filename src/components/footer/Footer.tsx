import './footer.scss';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      href: '#',
      title: 'facebook',
      ariaLabel: 'link to facebook',
      iconSrc: '/image/global-icons/facebook.svg',
      alt: 'facebook',
    },
    {
      id: 2,
      href: '#',
      title: 'twitter',
      ariaLabel: 'link to twitter',
      iconSrc: '/image/global-icons/twitter.svg',
      alt: 'twitter',
    },
    {
      id: 3,
      href: '#',
      title: 'linkedIn',
      ariaLabel: 'link to linkedIn',
      iconSrc: '/image/global-icons/linkedin.svg',
      alt: 'linkedIn',
    },
    {
      id: 4,
      href: '#',
      title: 'instagram',
      ariaLabel: 'link to instagram',
      iconSrc: '/image/global-icons/instagramm.svg',
      alt: 'instagram',
    },
    {
      id: 5,
      href: '#',
      title: 'vimeo',
      ariaLabel: 'link to vimeo',
      iconSrc: '/image/global-icons/vimeo.svg',
      alt: 'vimeo',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-logo">Bouncy</h2>
        <h3 className="footer-title">Copyright 2025. All rights Reserved</h3>

        <nav className="footer-social">
          {socialLinks.map((link) => (
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
