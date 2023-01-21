import { Box } from 'components/Box';
import { Subtitle } from './Login.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <Box>
      <Subtitle>Log in </Subtitle>
      <LoginForm />
    </Box>
  );
};

export default Login;
