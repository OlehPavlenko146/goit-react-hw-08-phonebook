import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm, LogLabel, LogBtn } from './LoginForm.styled';
import { toast } from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
        // toast.success('You entered in you phonebook');
      })
      .catch(() =>
        toast.error(
          'Something went wrong...Perhaps you entered wrong password or server does not response'
        )
      );
  };

  return (
    <LogForm onSubmit={handleSubmit}>
      <LogLabel>
        Email
        <input type="email" name="email" />
      </LogLabel>
      <LogLabel>
        Password
        <input type="password" name="password" />
      </LogLabel>
      <LogBtn type="submit">Login</LogBtn>
    </LogForm>
  );
};
