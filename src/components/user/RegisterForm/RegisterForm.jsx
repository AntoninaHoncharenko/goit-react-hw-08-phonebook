import { Box } from 'components/Box';

import {
  Form,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Box pt="70px">
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
        <RegisterBtn type="submit">Sign up</RegisterBtn>
      </Form>
    </Box>
  );
};
