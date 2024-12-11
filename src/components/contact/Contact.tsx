import './contact.scss';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <h3 className="contact-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card__img">
              <img
                src="/image/contact/contact-email.webp"
                alt="Email image"
              />
            </div>
            <div className="contact-card__info">
              <p className="contact-card__info-title">EMAIL</p>
              <a
                href="mailto:hello@codecafe.com"
                className="contact-card__info-email link"
                aria-label="link to email hello@codecafe.com"
              >
                hello@codecafe.com
              </a>
              <a
                href="mailto:Personal@codecafe.com"
                className="contact-card__info-email link"
                aria-label="link to email Personal@codecafe.com"
              >
                Personal@codecafe.com
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__img">
              <img
                src="/image/contact/contact-address.webp"
                alt="address image"
              />
            </div>
            <div className="contact-card__info">
              <p className="contact-card__info-title">OUR OFFICE</p>
              <p className="contact-card__info-address">
                240 Bhatikhana, 8200 Barisal
              </p>
              <p className="contact-card__info-address">Bangladesh</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__img">
              <img src="/image/contact/contact-phone.webp" alt="phone image" />
            </div>
            <div className="contact-card__info">
              <p className="contact-card__info-title">PHONE</p>
              <a
                href="tel:+001166996644"
                className="contact-card__info-phone link"
                aria-label="link to number +001166996644"
                title="link to number"
              >
                +00 11 66 99 66 44
              </a>
              <a
                href="tel:11996644065"
                className="contact-card__info-phone link"
                aria-label="link to number 11 99 66 44 065"
                title="link to number"
              >
                11 99 66 44 065
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
