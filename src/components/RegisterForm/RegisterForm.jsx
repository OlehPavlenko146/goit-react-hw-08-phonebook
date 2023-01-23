import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegForm, RegLabel, RegBtn } from './RegisterForm.styled';
import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        form.reset();
      })
      .catch(() =>
        toast.error(
          'Something went wrong...Perhaps this e-mail registered already or server does not response'
        )
      );
  };

  return (
    <RegForm onSubmit={handleSubmit}>
      <RegLabel>
        Username
        <input type="text" name="name" />
      </RegLabel>
      <RegLabel>
        Email
        <input type="email" name="email" />
      </RegLabel>
      <RegLabel>
        Password
        <input type="password" name="password" required minlength="7" />
      </RegLabel>
      <RegBtn type="submit">Register</RegBtn>
    </RegForm>
  );
};
