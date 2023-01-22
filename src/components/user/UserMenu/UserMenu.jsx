import { Box } from 'components/Box';
import { User, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <User>Mango</User>
      <LogOutBtn>Log out</LogOutBtn>
    </Box>
  );
};
