import './services.scss';

const ServicesDb = [
  {
    image: '/image/global-icons/heart-icon.svg',
    title: 'Tab 1',
  },
  {
    image: '/image/global-icons/mouse.svg',
    title: 'Tab 2',
  },
  {
    image: '/image/global-icons/bulb.svg',
    title: 'Tab 3',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-inner">
          <h2 className="services-title">SERVICES ABOUT BOUNCY</h2>
          <h3 className="services-subTitle">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </h3>

          <div className="services-tab tab">
            <div className="services-tab__btns tab-nav">
              {ServicesDb.map((item, index) => (
                <button
                  className="services-tab__btn tab-btn active tab-btn-active"
                  aria-label={item.title}
                  key={index}
                >
                  <img src={item.image} alt={item.title} />
                  {item.title}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {/* <!-- 1 --> */}
              <div
                className="services-tab__content tab-pane tab-pane-show"
                data-id="0"
              >
                <div className="services-tab__block1">
                  <h4 className="services-tab__content-title">
                    Creative Ideas
                  </h4>
                  <p className="services-tab__block">
                    At{' '}
                    <a
                      href="#"
                      title="link vero"
                      className="link"
                      aria-label="vero"
                    >
                      vero
                    </a>{' '}
                    eos et accusamus et iusto odio dignissimos{' '}
                    <span className="text-bold">ducimus</span> qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores
                  </p>
                </div>

                <div className="services-tab__block2">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    <span className="text-bold">corrupti quos</span> dolores et
                    quas molestias{' '}
                    <a
                      href="#"
                      title="link vero"
                      className="link"
                      aria-label="excepturi"
                    >
                      excepturi
                    </a>{' '}
                    sint occaecati cupiditate non provident,{' '}
                    <span className="text-bold">similique</span> sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem
                  </p>
                </div>
              </div>
              {/* <!-- 2 -->
          <div className="services-tab__content tab-pane" data-id="1">
            <div className="services-tab__block1">
              <h4 className="services-tab__content-title">Creative Ideas 2</h4>
              <p className="services-tab__block">At <a href="#" title="link vero" className="link" aria-label="vero">vero</a> eos et accusamus et iusto odio dignissimos <span className="text-bold">ducimus</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui accusantium temporibus pariatur quaerat dignissimos similique iusto et, quae molestias aliquam facilis libero, quisquam ullam porro voluptatum non totam repellat. dolores</p>
            </div>

            <div className="services-tab__block2">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                <span className="text-bold">corrupti quos</span> dolores et quas molestias <a href="#" className="link" aria-label="excepturi">excepturi</a> sint occaecati cupiditate non provident, <span className="text-bold">similique</span> sunt in culpa qui officia deserunt mollitia animi. Et harum quidem deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              </p>
            </div>
          </div>
          <!-- 3 -->
          <div className="services-tab__content tab-pane" data-id="2">
            <div className="services-tab__block1">
              <h4 className="services-tab__content-title">Creative Ideas 3</h4>
              <p className="services-tab__block">At <a href="#" className="link" aria-label="vero">vero</a> eos et accusamus et iusto odio dignissimos <span className="text-bold">ducimus</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolores</p>
            </div>

            <div className="services-tab__block2">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                <span className="text-bold">corrupti quos</span> dolores et quas molestias <a href="#" className="link" aria-label="excepturi">excepturi</a> sint occaecati cupiditate non provident, <span className="text-bold">similique</span> sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              </p>
            </div>
          </div>
          <!-- / --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
