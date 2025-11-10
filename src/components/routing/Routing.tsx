import { Routes, Route } from 'react-router-dom';
import { ROUTINGLINK } from './routesDb';

const Routing = () => {
  return (
    <Routes>
      {ROUTINGLINK.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};

export default Routing;
