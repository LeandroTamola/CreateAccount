import {useNavigation} from '@react-navigation/native';
import {useLoginContext} from '@src/context/UserContext';
import {PublicNavigatorProps} from '@src/navigators/PublicNavigator/types';
import {useRef} from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const useCreateAccountScreen = () => {
  const navigation = useNavigation<PublicNavigatorProps>();
  const formValues = useRef<FormValues>();
  const {setLoginStatus} = useLoginContext();

  const handleSubmit = () => {
    console.log(formValues.current);
    // setLoginStatus({
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john.doe@fakeemail.com',
    // });
  };

  const onTermsOfServicePress = () => {
    navigation.navigate('TermsOfServices');
  };

  return {
    handleSubmit,
    onTermsOfServicePress,
    formValues,
  };
};

export {useCreateAccountScreen};
