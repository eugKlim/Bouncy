import './intro.scss';
import useSmoothScroll from '../../hooks/useSmoothScroll';
const Intro = () => {
  const smoothScroll = useSmoothScroll();
  return (
    <section className="intro " id="intro">
      <div className="container">
        <div className="intro-inner">
          <h2 className="intro-title">We Are Code Cafe</h2>
          <p className="intro-subTitle">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </div>
        <button
          title="go to about"
          className="intro-btn__down"
          aria-label="scroll to section about"
          onClick={() => smoothScroll('about')}
        >
          <img
            src="/image/global-icons/arrow.webp"
            alt="Button"
            width="12"
            height="7"
          />
        </button>
      </div>
    </section>
  );
};

export default Intro;
