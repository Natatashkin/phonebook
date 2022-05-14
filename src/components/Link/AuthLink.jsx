import AuthNavlink from './AuthLink.styled';
import { Span } from './AuthLink.styled';

const AuthLink = ({ title, path, color, hoverColor, activeColor }) => {
  return (
    <Span component="span">
      <AuthNavlink
        to={path}
        color={color}
        // hoverColor={hoverColor}
        // activeColor={activeColor}
      >
        {title}
      </AuthNavlink>
    </Span>
  );
};

export default AuthLink;
