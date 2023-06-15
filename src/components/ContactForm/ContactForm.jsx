import { Formik, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  ButtonAdd,
  FormStyled,
  InputStyled,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { isExistName } from 'components/Utils/getVisibleContacts';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    const {name, number} = values;
 
    if (!isExistName(name, contacts)) {
     dispatch(
       addContact({
         name, number,
         id: nanoid(),
       })
     );
    }
     actions.resetForm();
   }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <Field
            as={InputStyled}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <Field
            as={InputStyled}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </Label>
        <div>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </div>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
