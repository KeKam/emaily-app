import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { startFetchUser } from '../../actions/auth.actions';
import { useAuthDispatch } from '../../contexts/auth.context';

import { Header } from '../header/header';

export const App = () => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    startFetchUser(dispatch);
  }, [dispatch]);

  return (
    <div className='container'>
      <Header />
    </div>
  );
};
