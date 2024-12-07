import React from 'react';
import './news.scss';
const News = () => {
  return (
    <section
      className="news "
      id="news"
    >
      <div className="container">
        <div className="news-inner">
          <h3 className="news-title">
            At vero eos et <span className="news-bold">accusamus</span> et iusto
            odio dignissimos ducimus qui blanditiis
          </h3>
          <a
            href="#contactform"
            className="news-submit yankor"
            aria-label="Submit Now"
          >
            Submit Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
