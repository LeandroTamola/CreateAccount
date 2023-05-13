import {useNavigation} from '@react-navigation/native';
import {useLoginContext} from '@src/context/UserContext';
import {PublicNavigatorProps} from '@src/navigators/PublicNavigator/types';
import {useFormik} from 'formik';
import {
  CreateAccountValues,
  CreateAccountSchema,
  initialValues,
} from './constants';
import {Status} from '@src/types/status';
import {useState} from 'react';

const useCreateAccountScreen = () => {
  const navigation = useNavigation<PublicNavigatorProps>();
  const [status, setStatus] = useState<Status>('idle');
  const {setLoginStatus} = useLoginContext();

  const formik = useFormik<CreateAccountValues>({
    initialValues,
    validationSchema: CreateAccountSchema,
    onSubmit: async formValues => {
      console.log(formValues);
      if (!firstName || !lastName || !email || !password) return;
      try {
        setStatus('loading');
        setTimeout(() => {
          setLoginStatus({firstName, lastName, email});
          setStatus('success');
        }, 5000);
      } catch (error) {
        setStatus('failed');
      }
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
