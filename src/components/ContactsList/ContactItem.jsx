import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import toast from 'react-hot-toast';

import { deleteContact } from '../../redux/contacts/operations';

import {
  Contact,
  ContactDetails,
  DeleteBtn,
  BtnNameWrapDel,
} from './Contacts.List.styled';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('Contact is deleted!'))
      .catch(() => toast.error('Something went wrong...Try reload page'));
  };

  return (
    <Contact>
      <ContactDetails>{name}</ContactDetails>
      <ContactDetails>{number}</ContactDetails>
      <DeleteBtn type="button" onClick={handleDelete}>
        <BtnNameWrapDel>Delete</BtnNameWrapDel>
      </DeleteBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
