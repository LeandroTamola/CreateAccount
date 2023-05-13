import {User} from '@src/models/User';
import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type Action = {type: 'SET_LOGIN'; payload: User | null};
interface StateMutators {
  setLoginStatus: (payload: User) => void;
}
type ContextState = State & StateMutators;
type State = {user: User | null};

const initialState: ContextState = {
  user: null,
  setLoginStatus: () => {},
};

const UserContext = createContext<ContextState>(initialState);

const loginReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_LOGIN': {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export const UserProvider: FC<PropsWithChildren> = props => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const setLoginStatus: StateMutators['setLoginStatus'] = payload => {
    dispatch({type: 'SET_LOGIN', payload});
  };

  const value = useMemo(
    () => ({
      ...state,
      setLoginStatus,
    }),
    [state],
  );

  return <UserContext.Provider value={value} {...props} />;
};

export const useLoginContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useLoginContext must be used within a UserProvider');
  }
  return context;
};
