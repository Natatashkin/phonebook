import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(state => state.authentication.token);
  return token ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
