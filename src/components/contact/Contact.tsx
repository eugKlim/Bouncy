import './contact.scss';
import type { ContactItem } from './type';
import { contactCardsDb } from './cardsDb';

const Contact = () => {
  const renderContactItem = (item: ContactItem) => {
    switch (item.type) {
      case 'email':
        return (
          <a
            href={`mailto:${item.value}`}
            className="contact-card__info-email link"
            aria-label={item.ariaLabel}
          >
            {item.value}
          </a>
        );
      case 'phone':
        return (
          <a
            href={`tel:${item.value.replace(/\s/g, '')}`}
            className="contact-card__info-phone link"
            aria-label={item.ariaLabel}
            title={item.title}
          >
            {item.value}
          </a>
        );
      case 'text':
        return <p className="contact-card__info-address">{item.value}</p>;
      default:
        return null;
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>
        <h3 className="contact-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div className="contact-cards">
          {contactCardsDb.map((card) => (
            <div key={card.id} className="contact-card">
              <div className="contact-card__img">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  width="287"
                  height="145"
                  loading="lazy"
                />
              </div>
              <div className="contact-card__info">
                <p className="contact-card__info-title">{card.title}</p>
                {card.items.map((item, index) => (
                  <div key={index}>{renderContactItem(item)}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
