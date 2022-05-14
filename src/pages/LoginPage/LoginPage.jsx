import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthCredentials } from 'redux/auth/authSlice';
import { useLoginMutation } from 'services/authApi';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logInUser, data] = useLoginMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  console.log(data);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const credentials = await logInUser({ email, password });
      const {
        data: {
          user: { name: username },
          token,
        },
      } = credentials;

      if (!token) {
        throw Error('ошибка фетча, нет записи в слайс');
      }

      dispatch(setAuthCredentials({ username, token }));
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
