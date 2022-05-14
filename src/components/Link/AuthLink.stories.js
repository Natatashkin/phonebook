import AuthLink from './AuthLink';

const Stories = {
  title: 'AuthLink',
  component: AuthLink,
};
export default Stories;

const Template = args => <AuthLink {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: 'Log In',
  path: '/login',
  color: 'primary.contrastText',
  hoverColor: 'secondary.main',
  activeColor: 'secondary.light',
};
