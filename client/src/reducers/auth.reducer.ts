import { AuthActionTypes, Action } from '../types/auth.action.types';

export interface State {
  currentUser: null | {};
}

export const initialState: State = {
  currentUser: null,
};

export const authReducer = (state = initialState, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case AuthActionTypes.FETCH_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case AuthActionTypes.LOGGED_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
