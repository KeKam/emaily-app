import { Context, useContext, Dispatch } from 'react';
import { State } from '../reducers/auth.reducer';
import { Action } from '../types/auth.action.types';

export const useAppState = (
  stateContext: Context<State>,
  dispatchContext: Context<Dispatch<Action>>
) => {
  const state = useContext(stateContext);
  const dispatch = useContext(dispatchContext);

  return { state, dispatch };
};
