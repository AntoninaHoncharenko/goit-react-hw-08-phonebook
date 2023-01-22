import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from 'components/Box';
import {
  Form,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <Box pt="70px">
      <Form onSubmit={handleSubmit}>
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
        <RegisterBtn type="submit">Sign up</RegisterBtn>
      </Form>
    </Box>
  );
};
