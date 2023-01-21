import { Box } from 'components/Box';
import { Subtitle } from './Register.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Box>
      <Subtitle>Register</Subtitle>
      <RegisterForm />
    </Box>
  );
};

export default Register;
