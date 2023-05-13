import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {PublicNavigatorProps} from '@src/navigators/PublicNavigator/types';
import {
  CreateAccountValues,
  CreateAccountSchema,
  initialValues,
} from './constants';
import {useCreateAccount} from '@src/hooks';

const useCreateAccountScreen = () => {
  const navigation = useNavigation<PublicNavigatorProps>();
  const {handleCreateAccount, status} = useCreateAccount();

  const formik = useFormik<CreateAccountValues>({
    initialValues,
    validationSchema: CreateAccountSchema,
    onSubmit: async ({email, password, firstName, lastName}) => {
      if (!firstName || !lastName || !email || !password) return;
      await handleCreateAccount({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: password.trim(),
      });
    },
  });

  const onTermsOfServicePress = () => {
    navigation.navigate('TermsOfServices');
  };

  const {email, firstName, lastName, password} = formik.values;
  const submitDisabled = !email || !firstName || !lastName || !password;
  const isLoading = status === 'loading';

  return {
    onTermsOfServicePress,
    formik,
    submitDisabled,
    isLoading,
    status,
  };
};

export {useCreateAccountScreen};
