import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Box } from 'components/Box';
import { Subtitle } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Box
      width="700px"
      display="flex"
      justifyContent="space-around"
      margin="0 auto"
      pt="20px"
    >
      <Box>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        <ContactList />
      </Box>
      <Box>
        <Subtitle>Add contact</Subtitle>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contacts;
