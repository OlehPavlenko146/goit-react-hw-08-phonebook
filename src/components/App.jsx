import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { useAuth } from '../hooks/useAuth';
import { GlobalStyle } from './GlobalStyles';
import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictesRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};

// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Loader } from './Loader/Loader';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

// import { GlobalStyle } from './GlobalStyles';
// import { Container, Title } from './App.styled';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactsForm />
//       {isLoading && !error && <Loader />}
//       <ContactsList title="Contacts" />

//       <GlobalStyle />
//     </Container>
//   );
// };
