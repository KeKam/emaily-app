import axios from 'axios';
import { Dispatch } from 'react';

import { User } from '../reducers/auth.reducer';
import { Action, AuthActionTypes } from '../types/auth.action.types';

export const fetchUser = (user: User): Action => ({
  type: AuthActionTypes.FETCH_USER,
  user,
});

export const startFetchUser = async (dispatch: Dispatch<Action>) => {
  const response = await axios.get('/api/current_user');

  dispatch(fetchUser(response.data));
};
