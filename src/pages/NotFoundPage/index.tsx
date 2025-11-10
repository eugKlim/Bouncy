import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './not-found.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="page not-found container">
        <h2>There is no such page here!</h2>
        <p>
          Going to <NavLink to="/">home page</NavLink> in 3 seconds...
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
