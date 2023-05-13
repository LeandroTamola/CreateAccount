import {User} from '@src/models/User';
import * as Yup from 'yup';

export interface CreateAccountValues extends User {
  password: string;
}

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
