import { User } from '../reducers/auth.reducer';

export enum AuthActionTypes {
  FETCH_USER = 'FETCH_USER',
  LOGGED_IN = 'LOGGED_IN',
}

export type Action =
  | {
      type: AuthActionTypes.LOGGED_IN;
    }
  | {
      type: AuthActionTypes.FETCH_USER;
      user: User;
    };
