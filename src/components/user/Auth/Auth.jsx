import { Container, LinkUp, LinkIn } from './Auth.styled';

export const Auth = () => {
  return (
    <div>
      <Container>
        <LinkIn to="/login">Sign in</LinkIn>
        <LinkUp to="/register">Sign up</LinkUp>
      </Container>
    </div>
  );
};
