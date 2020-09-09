import React from 'react';
import { useAuthState } from '../../contexts/auth.context';

export const Header = () => {
  const state = useAuthState();

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          Emaily
        </a>
        <ul className='right'>
          {state.currentUser === false ? (
            <li>
              <a href='/auth/google'>Sign in with Google</a>
            </li>
          ) : !state.currentUser ? null : (
            <li>
              <a>Logout</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
