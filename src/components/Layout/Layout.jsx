import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { MdContactPhone } from 'react-icons/md';
import { UserMenu } from 'components/user/UserMenu/UserMenu';
import { Auth } from 'components/user/Auth/Auth';
import {
  Header,
  Navigation,
  Link,
  HomeLink,
  HomeText,
  Icon,
} from './Layout.styled';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box padding="0px 20px" maxWidth="1280px" margin="0 auto">
      <Header>
        <Navigation>
          <HomeLink to="/">
            <Icon size="38" />
            <HomeText>PhoneBook</HomeText>
          </HomeLink>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          {isLoggedIn ? <UserMenu /> : <Auth />}
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
