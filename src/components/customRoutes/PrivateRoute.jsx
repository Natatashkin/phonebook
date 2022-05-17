import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSlice';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  return token ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
