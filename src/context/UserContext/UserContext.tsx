import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {Action, ContextState, State, StateMutators} from './types';

const initialState: ContextState = {
  user: null,
  setLoginStatus: () => {},
  setLogOut: () => {},
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
    case 'SET_LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
};

export const UserProvider: FC<PropsWithChildren<unknown>> = props => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const setLoginStatus: StateMutators['setLoginStatus'] = payload => {
    dispatch({type: 'SET_LOGIN', payload});
  };
  const setLogOut: StateMutators['setLogOut'] = () => {
    dispatch({type: 'SET_LOGOUT'});
  };

  const value = useMemo(
    () => ({
      ...state,
      setLoginStatus,
      setLogOut,
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
