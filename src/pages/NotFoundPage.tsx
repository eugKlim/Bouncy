import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../style/not-found.scss';

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
        <h2>Такой страницы здесь нет!</h2>
        <p>
          Перехожу на <NavLink to="/">главную страницу</NavLink> через 3
          секунды...
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
