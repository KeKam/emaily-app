import { AuthActionTypes, Action } from '../types/auth.action.types';

export interface User {
  googleId: string;
  _id: string;
  credits: number;
}

export interface State {
  currentUser: null | false | User;
}

export const initialState: State = {
  currentUser: null,
};

export const authReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER:
      return {
        ...state,
        currentUser: action.user || false,
      };
    case AuthActionTypes.LOGGED_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
};
