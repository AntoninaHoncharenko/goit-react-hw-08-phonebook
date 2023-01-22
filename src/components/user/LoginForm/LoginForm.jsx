import { Box } from 'components/Box';
import { Form, LoginLabel, LoginInput, LoginBtn } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Box pt="70px">
      <Form>
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginBtn type="submit">Sign in</LoginBtn>
      </Form>
    </Box>
  );
};
