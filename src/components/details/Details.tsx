import React from 'react';
import './details.scss';
const Details = () => {
  return (
    <section className="details">
      <div className="container">
        <h2 className="details-title">Details Services</h2>
        <h3 className="details-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div className="details-info">
          <div className="details-descriptions">
            <div className="details-description__item">
              <h4 className="details-description__item-title">
                Graphic Design
              </h4>
              <p className="details-description__item-text">
                At vero eos et accusamus et{' '}
                <a
                  href="#"
                  title="iusto"
                  className="link"
                  aria-label="link to iusto"
                >
                  iusto
                </a>{' '}
                odio dignissimos <span className="text-bold">ducimus</span> qui
                blanditiis praesentium voluptatum deleniti
              </p>
            </div>

            <div className="details-description__item">
              <p className="details-description__item-text">
                quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident,
                <a
                  href="#"
                  title="iusto"
                  className="link"
                  aria-label="link to similique sunt"
                >
                  similique sunt
                </a>{' '}
                in culpa qui officia deserunt mollitia animi, id est laborum et
                dolorum fuga.
              </p>
            </div>
          </div>

          <div className="details-indicators">
            <div className="details-indicators__item">
              <div className="details-indicators__circle">
                <div className="details-indicators__block">
                  <p className="details-indicators__number">80%</p>
                </div>
              </div>
              <div className="details-indicators__title">Branding</div>
            </div>

            <div className="details-indicators__item">
              <div className="details-indicators__circle">
                <div className="details-indicators__block">
                  <p className="details-indicators__number">75%</p>
                </div>
              </div>
              <div className="details-indicators__title">Web Design</div>
            </div>

            <div className="details-indicators__item">
              <div className="details-indicators__circle">
                <div className="details-indicators__block">
                  <p className="details-indicators__number">60%</p>
                </div>
              </div>
              <div className="details-indicators__title">UI/UX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
