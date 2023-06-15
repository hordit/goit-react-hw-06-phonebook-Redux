import { useSelector } from 'react-redux';
import { Li, Ul } from './ContactList.slyled';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/contactsSlice';
import { getVisibleContacts } from 'components/Utils/getVisibleContacts';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

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
