import './contact.scss';

type ContactItem =
  | {
      type: 'email';
      value: string;
      ariaLabel: string;
    }
  | {
      type: 'phone';
      value: string;
      ariaLabel: string;
      title: string;
    }
  | {
      type: 'text';
      value: string;
    };

type ContactCard = {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  items: ContactItem[];
};

const Contact = () => {
  const contactCards: ContactCard[] = [
    {
      id: 1,
      imgSrc: '/image/contact/contact-email.webp',
      imgAlt: 'Email image',
      title: 'EMAIL',
      items: [
        {
          type: 'email',
          value: 'hello@codecafe.com',
          ariaLabel: 'link to email hello@codecafe.com',
        },
        {
          type: 'email',
          value: 'Personal@codecafe.com',
          ariaLabel: 'link to email Personal@codecafe.com',
        },
      ],
    },
    {
      id: 2,
      imgSrc: '/image/contact/contact-address.webp',
      imgAlt: 'address image',
      title: 'OUR OFFICE',
      items: [
        {
          type: 'text',
          value: '240 Bhatikhana, 8200 Barisal',
        },
        {
          type: 'text',
          value: 'Bangladesh',
        },
      ],
    },
    {
      id: 3,
      imgSrc: '/image/contact/contact-phone.webp',
      imgAlt: 'phone image',
      title: 'PHONE',
      items: [
        {
          type: 'phone',
          value: '+00 11 66 99 66 44',
          ariaLabel: 'link to number +001166996644',
          title: 'link to number',
        },
        {
          type: 'phone',
          value: '11 99 66 44 065',
          ariaLabel: 'link to number 11 99 66 44 065',
          title: 'link to number',
        },
      ],
    },
  ];

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
          {contactCards.map((card) => (
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
