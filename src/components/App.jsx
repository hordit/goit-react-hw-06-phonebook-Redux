import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { capitalizedName } from './Utils/capitalizedName';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { addContact, deleteContact, setFilter } from 'redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const addContactHandler = newContact => {
    console.log('Adding contact:', newContact);
    const isNameExist = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const normalizedName = {
      ...newContact,
      name: capitalizedName(newContact.name),
    };

    if (isNameExist) {
      console.log('Duplicate name:', isNameExist);
      alert(`${capitalizedName(newContact.name)} is already in contacts.`);
      return;
    }

    dispatch(addContact(normalizedName));
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilterHandler = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter.toString());

  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList contacts={visibleContacts} onDelete={deleteContactHandler} />
    </Layout>
  );
};
