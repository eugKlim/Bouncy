import './impressed.scss';
const Impressed = () => {
  return (
    <section className="impressed " id="impressed">
      <div className="container">
        <div className="impressed-inner">
          <div className="impressed-info">
            <h3 className="impressed-info__title">Impressed ?</h3>
            <p className="impressed-info__description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias
            </p>
            <p className="impressed-info__author">- Abdullah Noman</p>
            <p className="impressed-info__text">
              Creatice Director,{' '}
              <a
                href="#"
                title="Code Cafe"
                className="link"
                aria-label="link to Code Cafe"
              >
                Code Cafe
              </a>
            </p>
          </div>

          <div className="impressed-img">
            <img
              src="/image/impressed/display.webp"
              alt="image"
              width="412"
              height="338"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressed;
