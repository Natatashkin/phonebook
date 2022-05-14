import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'pages/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './customRotes/PrivateRoute';
import PublicRoute from './customRotes/PublicRoute';
import { useRefreshQuery } from 'services/authApi';
import { refreshUser } from 'redux/auth/authSlice';

const StartPage = lazy(() => import('pages/StartPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { data } = useRefreshQuery();

  useEffect(() => {
    data && dispatch(refreshUser(data.name));
  }, [data, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <StartPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
