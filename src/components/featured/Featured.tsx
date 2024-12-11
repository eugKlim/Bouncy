import './featured.scss';

const FeaturedDb = [
  {
    title: 'Featured',
    image: '/image/featured/item1.webp',
  },
  {
    title: 'VINTAGE',
    image: '/image/featured/item2.webp',
  },
  {
    title: 'Branding',
    image: '/image/featured/item3.webp',
  },
];

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
          {FeaturedDb.map((item, index) => (
            <div className="featured-item" key={index}>
              <div className="featured-item__img">
                <img src={item.image} alt={`image ${item.title}`} />
              </div>
              <div className="featured-item__hover">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
