import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const AuthNavlink = styled(NavLink)`
  text-decoration: 'none';
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
`;

export default AuthNavlink;

const Span = styled('span')`
  background-color: ${({ theme: { palette } }) => palette.primary.main}; ;
`;

export { Span };
