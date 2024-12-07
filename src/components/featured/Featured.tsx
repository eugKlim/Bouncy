import './featured.scss';
const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured-title">FEATURED PROJECTS</h2>
        <h3 className="featured-subTitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div className="featured-items">
          <div className="featured-item">
            <div className="featured-item__img">
              <img src="/image/featured/item1.webp" alt="image 1" />
            </div>
            <div className="featured-item__hover">
              <p>Featured</p>
            </div>
          </div>

          <div className="featured-item">
            <div className="featured-item__img">
              <img src="/image/featured/item2.webp" alt="image 2" />
            </div>
            <div className="featured-item__hover">
              <p>VINTAGE</p>
            </div>
          </div>

          <div className="featured-item">
            <div className="featured-item__img">
              <img src="/image/featured/item3.webp" alt="image 3" />
            </div>
            <div className="featured-item__hover">
              <p>Branding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
