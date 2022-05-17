import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSlice';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const token = useSelector(getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
