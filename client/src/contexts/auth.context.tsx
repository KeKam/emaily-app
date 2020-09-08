import React, {
  createContext,
  Dispatch,
  useReducer,
  ReactElement,
} from 'react';

import { initialState, authReducer } from '../reducers/auth.reducer';
import { Action } from '../types/auth.action.types';

export const AuthStateContext = createContext(initialState);
export const AuthDispatchContext = createContext<Dispatch<Action>>(() => null);

export const AuthStateProvider = (props: {
  children: ReactElement;
}): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
