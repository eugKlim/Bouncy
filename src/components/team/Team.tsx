import './team.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { teamSlidesDb } from './teamDb';
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="team-title">THE TEAM</h2>
        <h3 className="team-subtitle">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium
        </h3>

        <div>
          <div>
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: true,
                gap: '1rem',
                autoplay: false,
                interval: 3000,
                pauseOnHover: true,
              }}
              aria-label="Splide Slider"
            >
              {teamSlidesDb.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="swiper-slide">
                    <div className="team-slide">
                      <div className="team-slide__img">
                        <img
                          src={`/image/team/${item.image}.webp`}
                          alt="Image"
                          width="285"
                          height="364"
                          loading="lazy"
                        />
                      </div>

                      <div className="team-slide__info">
                        <div className="team-slide__titles">
                          <h4 className="team-slide__title">{item.name}</h4>
                          <h5 className="team-slide__subtitle">{item.work}</h5>
                        </div>

                        <p className="team-slide__text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium
                        </p>

                        <div className="team-slide__indicators">
                          <div className="team-slide__indicator">
                            <div className="team-slide__indicator-info">
                              <h6>BRANDING</h6>
                              <p>{item.branding}</p>
                            </div>
                            <div className="team-slide__indicator-line">
                              <span></span>
                            </div>
                          </div>

                          <div className="team-slide__indicator">
                            <div className="team-slide__indicator-info">
                              <h6>Web Design</h6>
                              <p>{item.webDesign}</p>
                            </div>
                            <div className="team-slide__indicator-line">
                              <span></span>
                            </div>
                          </div>

                          <div className="team-slide__indicator">
                            <div className="team-slide__indicator-info">
                              <h6>User Interface</h6>
                              <p>{item.userInterface}</p>
                            </div>
                            <div className="team-slide__indicator-line">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
