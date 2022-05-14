import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthCredentials } from 'redux/auth/authSlice';
import { useRegisterMutation } from 'services/authApi';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useRegisterMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const credentials = await registerUser({ name, email, password });
      const {
        data: {
          user: { name: username },
          token,
        },
      } = credentials;
      console.log(username);
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
        <label htmlFor="name">
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
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
export default RegisterPage;
