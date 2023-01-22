import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Filter } from '../Filter/Filter';

import toast from 'react-hot-toast';

import {
  Form,
  Input,
  Label,
  AddBtn,
  Title,
  FormWpap,
  BtnNameWrap,
} from './ContactsForm.styled';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then(() => {
          event.target.reset();
          toast.success('Contact is added!');
        })
        .catch(() => toast.error('Something went wrong...Try reload page'));
    }
  };

  return (
    <FormWpap>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddBtn type="submit">
          <BtnNameWrap>Add contact</BtnNameWrap>
        </AddBtn>
      </Form>
      {contacts.length > 0 && <Filter />}
    </FormWpap>
  );
};
