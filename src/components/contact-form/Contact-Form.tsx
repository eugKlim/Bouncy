import './contact-form.scss';

const ContactForm = () => {
  return (
    <section className="contactform" id="contactform">
      <div className="container">
        <form className="contactform-form">
          <div className="contactform-form__info">
            <input
              title="entry field name"
              type="text"
              placeholder="Your name"
              className="contactform-name"
              aria-label="enter your name"
            />
            <input
              title="entry field email"
              type="email"
              placeholder="Email address"
              className="contactform-email"
              aria-label="enter your email"
            />
            <input
              title="entry field subject"
              type="text"
              placeholder="Subject"
              className="contactform-subject"
              aria-label="entry field subject"
            />
          </div>
          <div className="contactform-form__message">
            <textarea
              placeholder="Message"
              title="entry field message"
              aria-label="entry field message"
            ></textarea>
          </div>
          <button
            title="submit entry field"
            type="submit"
            className="contactform-submit"
            aria-label="submit entry field"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
