import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Box } from 'components/Box';
import { Subtitle } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      width="900px"
      display="flex"
      justifyContent="space-around"
      margin="0 auto"
      pt="50px"
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
