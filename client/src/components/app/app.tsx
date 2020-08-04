import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from '../header/header';

export const App = () => {
  return (
    <div className='container'>
      <Header />
    </div>
  );
};
