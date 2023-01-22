import { Link } from './Auth.styled';

export const Auth = () => {
  return (
    <div>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </div>
  );
};
