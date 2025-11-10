import './subscribe.scss';

const Subscribe = () => {
  return (
    <section className="subscribe  page-dark" id="subscribe">
      <div className="container">
        <h2 className="subscribe-title">Subscribe us</h2>
        <h3 className="subscribe-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <form className="subscribe-form">
          <input
            title="entry field"
            type="email"
            placeholder="Email Address"
            className="subscribe-form__input"
            aria-label="entry email"
          />
          <button
            title="submit entry field"
            type="submit"
            className="subscribe-form__btn"
            id="subscribe-form__btn"
            aria-label="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
