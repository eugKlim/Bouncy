import './map.scss';

const Map = () => {
  return (
    <address className="map">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d48792.48116306089!2d36.36776055672034!3d50.00500273315374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d50.02854836970335!2d36.37531377089909!5e0!3m2!1sru!2sua!4v1716640791801!5m2!1sru!2sua"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </address>
  );
};

export default Map;
