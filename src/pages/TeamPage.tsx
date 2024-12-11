import Team from '../components/team/Team';
import { Helmet } from 'react-helmet-async';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>BOUNCY - Team</title>
        <meta name="description" content="BOUNCY lorem description" />
        <meta name="keywords" content="BOUNCY, page, react, About" />
        <meta name="author" content="BOUNCY" />
      </Helmet>
      <div className="page" style={{ paddingBottom: '90px' }}>
        <Team />
      </div>
    </>
  );
};

export default TeamPage;
