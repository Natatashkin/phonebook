import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSlice';

const StartPage = () => {
  const token = useSelector(getToken);
  const navigate = useNavigate();

  const handleClick = e => {
    token ? navigate('/contacts') : navigate('/login');
  };
  return (
    <>
      <div>StartPage</div>
      <button type="button" onClick={handleClick}>
        Go!
      </button>
    </>
  );
};

export default StartPage;
