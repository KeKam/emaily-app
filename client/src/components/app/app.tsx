import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { startFetchUser } from '../../actions/auth.actions';
import { useAuthDispatch } from '../../contexts/auth.context';

import { Header } from '../header/header';
import { Landing } from '../landing/landing';
import { Dashboard } from '../dashboard/dashboard';

export const App = () => {
  const dispatch = useAuthDispatch();

  useEffect(() => {
    startFetchUser(dispatch);
  }, [dispatch]);

  return (
    <div className='container'>
      <BrowserRouter>
        <>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
        </>
      </BrowserRouter>
    </div>
  );
};
