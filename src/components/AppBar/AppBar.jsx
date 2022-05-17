import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSlice';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = ({ username = '' }) => {
  const token = useSelector(getToken);
  return (
    <header>{token ? <UserMenu username={username} /> : <AuthNav />}</header>
  );
};
export default AppBar;
