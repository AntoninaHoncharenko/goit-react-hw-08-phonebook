import { Form, LoginLabel, LoginInput, LoginBtn } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Form>
      <LoginLabel>
        Email
        <LoginInput type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput type="password" name="password" />
      </LoginLabel>
      <LoginBtn type="submit">Register</LoginBtn>
    </Form>
  );
};
