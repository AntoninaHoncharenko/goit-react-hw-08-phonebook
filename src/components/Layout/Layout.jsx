import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Auth } from 'components/Auth/Auth';
import { Header, Navigation, Title, Link } from './Layout.styled';
import { Box } from 'components/Box';

export const Layout = () => {
  return (
    <Box padding="0px 20px" maxWidth="1280px" margin="0 auto">
      <Header>
        <Navigation>
          <Link to="/contacts">Contacts</Link>
          <Title>Phone Book</Title>
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
