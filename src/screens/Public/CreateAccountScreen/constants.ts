import * as Yup from 'yup';

export type CreateAccountValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const initialValues: CreateAccountValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const CreateAccountSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).required(),
  });
};
