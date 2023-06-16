import { useSelector } from 'react-redux';
import { Li, Ul } from './ContactList.slyled';
import { Contact } from 'components/Contact/Contact';
import { getVisibleContacts } from 'Utils/getVisibleContacts';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  console.log('Contacts:', contacts);

  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  console.log('visibleContacts:', visibleContacts);

  return (
    <Ul>
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          <Contact contact={contact} />
        </Li>
      ))}
    </Ul>
  );
};
