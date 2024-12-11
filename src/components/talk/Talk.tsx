import './talk.scss';
import useSmoothScroll from '../../hooks/useSmoothScroll';
const smoothScroll = useSmoothScroll();
const Talk = () => {
  return (
    <section className="talk " id="talk">
      <div className="container">
        <h2 className="talk-title">Already Loved Us? Let’s talk!</h2>
        <button
          title="contact us"
          className="talk-contact yankor"
          aria-label="Contact Us"
          onClick={() => smoothScroll('contact')}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Talk;
