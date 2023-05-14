import {useState} from 'react';

import {useLoginContext} from '@src/context/UserContext/UserContext';
import {CreateAccountValues} from '@src/screens/Public/CreateAccountScreen/constants';
import {Status} from '@src/types/status';

const useCreateAccount = () => {
  const [status, setStatus] = useState<Status>('idle');
  const {setLoginStatus} = useLoginContext();

  const handleCreateAccount = async (user: CreateAccountValues) => {
    const {email, firstName, lastName} = user;
    try {
      setStatus('loading');
      setTimeout(() => {
        // sends to fake api {email, firstName, lastName, password} = user
        setLoginStatus({firstName, lastName, email});
        setStatus('success');
      }, 5000);
    } catch (error) {
      setStatus('failed');
    }
  };

  return {handleCreateAccount, status};
};

export {useCreateAccount};
