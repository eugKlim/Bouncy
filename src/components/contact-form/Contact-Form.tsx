import './contact-form.scss';
import { inputsDb } from './inputsDb';

const ContactForm = () => {
  return (
    <section className="contactform page-dark" id="contactform">
      <div className="container">
        <form className="contactform-form">
          <div className="contactform-form__info">
            {inputsDb.map((input) => (
              <input
                key={input.title}
                title={input.title}
                type={input.type}
                placeholder={input.placeholder}
                className={input.className}
                aria-label={input.ariaLabel}
              />
            ))}
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
