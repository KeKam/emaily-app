import { ActionTypes, Action } from './auth.types';

export interface State {}

export const initialState: State = {};

export const authReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
