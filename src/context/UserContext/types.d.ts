import {User} from '@src/models/User';

type Action = {type: 'SET_LOGIN'; payload: User} | {type: 'SET_LOGOUT'};

interface StateMutators {
  setLoginStatus: (payload: User) => void;
  setLogOut: () => void;
}

type ContextState = State & StateMutators;

type State = {user: User | null};
