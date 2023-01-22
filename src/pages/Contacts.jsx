import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading && !error && <Loader />}
      <ContactsForm />
      <ContactsList title="Contacts" />
    </>
  );
}
