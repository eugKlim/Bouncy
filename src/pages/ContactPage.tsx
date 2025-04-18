import Contact from '../components/contact/Contact';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Contact</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div className="page" style={{ backgroundColor: '#f3f3f3' }}>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
