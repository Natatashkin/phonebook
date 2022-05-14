import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  return <header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>;
};
export default AppBar;
