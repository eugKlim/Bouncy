import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './team.scss';

const Team = () => {
  const TeamSlidesDb = [
    {
      image: 'team-1',
      name: 'Abdullah Noman',
      work: ' Creative Director, Code Cafe 1',
      branding: 80,
      webDesign: 65,
      userInterface: 75,
    },
    {
      image: 'team-2',
      name: 'Emma Thompson',
      work: ' Creative Director, Code Cafe 2',
      branding: 30,
      webDesign: 15,
      userInterface: 100,
    },
    {
      image: 'team-3',
      name: 'Benjamin Walker',
      work: 'Creative Director, Code Cafe 3',
      branding: 81,
      webDesign: 67,
      userInterface: 39,
    },
  ];

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
              {TeamSlidesDb.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="swiper-slide">
                    <div className="team-slide">
                      <div className="team-slide__img">
                        <img
                          src={`/image/team/${item.image}.webp`}
                          alt="Image"
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
