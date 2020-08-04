import React from 'react';

export const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          Emaily
        </a>
        <ul className='right'>
          <li>
            <a href='/auth/google'>Sign in with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
