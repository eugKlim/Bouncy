import { Helmet } from 'react-helmet-async';

const Seo = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Services</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
    </>
  );
};

export default Seo;
