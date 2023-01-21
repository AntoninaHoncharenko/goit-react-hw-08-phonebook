import {
  Form,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <RegisterLabel>
        Name
        <RegisterInput type="text" name="username" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput type="email" name="email" />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInput type="password" name="password" />
      </RegisterLabel>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </Form>
  );
};
