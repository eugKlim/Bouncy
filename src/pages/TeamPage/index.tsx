import Team from '../../components/team/Team';
import Seo from './Seo';

const TeamPage = () => {
  return (
    <>
      <Seo />
      <div className="page" style={{ paddingBottom: '90px' }}>
        <Team />
      </div>
    </>
  );
};

export default TeamPage;
