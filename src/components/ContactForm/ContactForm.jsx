import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  ButtonAdd,
  FormStyled,
  InputStyled,
  Label,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

export const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
    onAdd(newContact);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={onSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <div>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </div>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
