import { Link } from './Auth.styled';

export const Auth = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/">Login</Link>
    </div>
  );
};
