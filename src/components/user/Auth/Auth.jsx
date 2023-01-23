import { LinkUp, LinkIn } from './Auth.styled';
import { Box } from 'components/Box';

export const Auth = () => {
  return (
    <div>
      <Box display="flex">
        <LinkIn to="/login">Sign in</LinkIn>
        <LinkUp to="/register">Sign up</LinkUp>
      </Box>
    </div>
  );
};
