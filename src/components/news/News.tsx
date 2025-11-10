import useSmoothScroll from '../../hooks/useSmoothScroll';
import './news.scss';
const News = () => {
  const smoothScroll = useSmoothScroll();
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-inner">
          <h3 className="news-title">
            At vero eos et <span className="news-bold">accusamus</span> et iusto
            odio dignissimos ducimus qui blanditiis
          </h3>
          <button
            className="news-submit"
            aria-label="Submit Now"
            onClick={() => smoothScroll('contactform')}
          >
            Submit Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
