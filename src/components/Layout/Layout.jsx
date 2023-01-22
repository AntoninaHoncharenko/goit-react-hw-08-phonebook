import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MdContactPhone } from 'react-icons/md';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Auth } from 'components/user/Auth/Auth';
import { Header, Navigation, Link, HomeLink, HomeText } from './Layout.styled';
import { Box } from 'components/Box';

export const Layout = () => {
  return (
    <Box padding="0px 20px" maxWidth="1280px" margin="0 auto">
      <Header>
        <Navigation>
          <HomeLink to="/">
            <MdContactPhone size="32" />
            <HomeText>PhoneBook</HomeText>
          </HomeLink>
          <Link to="/contacts">Contacts</Link>
          <Auth />
          {/* <UserMenu /> */}
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
