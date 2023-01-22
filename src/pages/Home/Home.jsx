import { HomeText } from './Home.styled';
import { Box } from 'components/Box';

const Home = () => {
  return (
    <Box minHeight="calc(100vh - 75px)" display="flex" alignItems="center">
      <HomeText>Welcome to your PhoneBook</HomeText>
    </Box>
  );
};

export default Home;
