import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'services/authApi';
import { removeToken } from 'redux/auth/authSlice';

const UserMenu = ({ username = '' }) => {
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();

  const handleClick = async e => {
    await logoutUser();
    dispatch(removeToken());
  };

  return (
    <div>
      <span>{username}</span>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
