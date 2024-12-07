import './price.scss';

const Price = () => {
  return (
    <section className="price">
      <h2 className="price-title">Our Price</h2>
      <h3 className="price-subtitle">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium
      </h3>

      <div className="price-cards">
        <div className="price-card">
          <h4 className="price-card__title">PREMIUM</h4>

          <div className="price-card__info">
            <p className="price-card__info-cost">$ 60</p>
            <p className="price-card__info-time">Per Month</p>
          </div>
        </div>
        <div className="price-card">
          <div className="price-card__info">
            <ul className="price-card__info-services">
              <li>Full Branding</li>
              <li>Project Management</li>
              <li>Unlimited Revisions</li>
              <li>24/7 h Service</li>
              <li>Free Domain</li>
              <li>Free Hosting</li>
            </ul>
          </div>
          <button
            title="Lets start"
            className="price-card__start"
            id="price-card__start"
          >
            Let’s Start
          </button>
        </div>
        <div className="price-card">
          <h4 className="price-card__title">EXCLUSIVE</h4>

          <div className="price-card__info">
            <p className="price-card__info-cost">$ 80</p>
            <p className="price-card__info-time">Per Month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
