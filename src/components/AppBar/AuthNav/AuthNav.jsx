import AuthLink from 'components/Link';

const AuthNav = () => {
  return (
    <nav>
      <AuthLink
        path="/login"
        title="Log In"
        color="warning.main"
        hoverColor="red"
        activeColor="secondary.light"
      />
      <AuthLink
        path="/register"
        title="Sign In"
        color="warning.main"
        hoverColor="red"
        activeColor="secondary.light"
      />
    </nav>
  );
};

export default AuthNav;
