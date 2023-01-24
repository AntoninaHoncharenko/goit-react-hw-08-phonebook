import { Box } from 'components/Box';
import { User, LogOutBtn } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <User>{user.name}</User>
      <LogOutBtn type="button" onClick={handleLogOut}>
        Log out
      </LogOutBtn>
    </Box>
  );
};
