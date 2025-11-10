import './services.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { servicesDbTab, servicesDbBtn } from './servicesDb';

const Services = () => {
  return (
    <section className="services page-dark" id="services">
      <div className="container">
        <div className="services-inner">
          <h2 className="services-title">SERVICES ABOUT BOUNCY</h2>

          <Tabs className="services-panel">
            <TabList className="services-tab__btns">
              {servicesDbBtn.map((item, index) => (
                <Tab
                  className="services-tab__btn"
                  aria-label={item.title}
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width="25"
                    height="25"
                  />
                  {item.title}
                </Tab>
              ))}
            </TabList>

            <div className="services-tabs">
              {servicesDbTab.map((item, index) => (
                <TabPanel className="services-tab" key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
