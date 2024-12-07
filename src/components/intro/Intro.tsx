import './intro.scss';

const Intro = () => {
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
        <a
          href="#about"
          title="go to about"
          className="intro-btn__down yankor"
          aria-label="scroll to section about"
        >
          <img src="/image/global-icons/arrow.webp" alt="Button" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
