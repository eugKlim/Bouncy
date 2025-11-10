import Contact from '../../components/contact/Contact';
import Seo from './Seo';

const ContactPage = () => {
  return (
    <>
      <Seo />
      <div className="page" style={{ backgroundColor: '#f3f3f3' }}>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
