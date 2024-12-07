import './talk.scss';
const Talk = () => {
  return (
    <section className="talk " id="talk">
      <div className="container">
        <h2 className="talk-title">Already Loved Us? Let’s talk!</h2>
        <a
          href="#contact"
          title="contact us"
          className="talk-contact yankor"
          aria-label="Contact Us"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Talk;
