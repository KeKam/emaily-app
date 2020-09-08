import axios from 'axios';
import { Dispatch } from 'react';

import { Action, AuthActionTypes } from '../types/auth.action.types';

export const fetchUser = (user: {}): Action => ({
  type: AuthActionTypes.FETCH_USER,
  user,
});

export const startFetchUser = async (dispatch: Dispatch<Action>) => {
  // return async (dispatch: Dispatch<Action>) => {
  const response = await axios.get('/api/current_user');
  dispatch(fetchUser(response));
  // };
};
