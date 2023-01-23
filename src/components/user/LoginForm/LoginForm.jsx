import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Box } from 'components/Box';
import { Form, LoginLabel, LoginInput, LoginBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(login({ email, password }));
    form.reset();
  };

  return (
    <Box pt="70px">
      <Form onSubmit={handleSubmit}>
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
