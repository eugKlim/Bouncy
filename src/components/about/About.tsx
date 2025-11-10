import { useState } from 'react';
import './about.scss';

const About = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <section className="about page-dark" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-content">
            <h2 className="about-content__title">This is Bouncy</h2>
            <p className="about-content__text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
              <span className="three-dots">..</span>
              <span className={`${isHidden ? 'hidden-text' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, libero? Quas dignissimos, recusandae repellendus omnis
                possimus perspiciatis consequuntur odit optio vitae, atque animi
                obcaecati aliquid quasi hic esse est quis, veniam tenetur
                consectetur placeat itaque culpa vero praesentium? Debitis
                consequatur officiis repellat voluptatibus distinctio vero
                similique ad sapiente praesentium amet nam temporibus deserunt
                excepturi consequuntur, asperiores deleniti minima ea? Culpa
                nesciunt cumque consequatur quo voluptas provident placeat
                possimus, sit ullam veritatis in quas illo soluta, quia eius
                assumenda blanditiis perspiciatis obcaecati exercitationem,
                harum eum voluptates. Id ad rem commodi a officia voluptates in,
                assumenda saepe eveniet beatae voluptatum architecto quod?
              </span>
            </p>
            <button
              title="read more"
              aria-label="read more"
              className={`${isHidden ? '' : 'hidden'} about-content__btn`}
              onClick={() => setIsHidden(false)}
            >
              Read More
            </button>
          </div>

          <div className="about-img">
            <img
              src="/image/about/about-img__ipad.webp"
              alt="ipad"
              width="215"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
