import './services.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ServicesDbBtn = [
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

const ServicesDbTab = [
  {
    title: '1 Creative Ideas',
    text: '1 Creative Ideas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati iste similique architecto aut dolorem nam, tenetur incidunt, labore officiis quia sit maiores, mollitia dignissimos cum? Nisi amet facilis explicabo quisquam, doloremque tempora? Neque maxime natus mollitia itaque modi facere qui nisi fugiat quidem consequuntur! Quasi delectus, ut ullam omnis veritatis, voluptatem enim deserunt in consectetur soluta esse quo',
  },
  {
    title: '2 GoodDay',
    text: '2 GoodDay Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati iste similique architecto aut dolorem nam, tenetur incidunt, labore officiis quia sit maiores, mollitia dignissimos cum? Nisi amet facilis explicabo quisquam, doloremque tempora? Neque maxime natus mollitia itaque modi facere qui nisi fugiat quidem consequuntur! Quasi delectus, ut ullam omnis veritatis, voluptatem enim deserunt in consectetur soluta esse quo sit!',
  },
  {
    title: '3 Hello 3',
    text: '3 Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati iste similique architecto aut dolorem nam, tenetur incidunt, labore officiis quia sit maiores, mollitia dignissimos cum? Nisi amet facilis explicabo quisquam, doloremque tempora? Neque maxime natus mollitia itaque modi facere qui nisi fugiat quidem consequuntur! Quasi delectus, ut ullam omnis veritatis, voluptatem enim deserunt in consectetur soluta esse quo sit!',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-inner">
          <h2 className="services-title">SERVICES ABOUT BOUNCY</h2>

          <Tabs className="services-panel">
            <TabList className="services-tab__btns">
              {ServicesDbBtn.map((item, index) => (
                <Tab
                  className="services-tab__btn"
                  // className="services-tab__btn tab-btn active tab-btn-active"
                  aria-label={item.title}
                  key={index}
                >
                  <img src={item.image} alt={item.title} />
                  {item.title}
                </Tab>
              ))}
            </TabList>

            <div className="services-tabs">
              {ServicesDbTab.map((item, index) => (
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
