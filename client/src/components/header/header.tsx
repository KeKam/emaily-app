import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from '../../contexts/auth.context';
import { StripeCheckoutButton } from '../stripe-button/stripe-checkout-button';
import { SideBar } from '../side-bar/side-bar';

export const Header = () => {
  const { currentUser } = useAuthState();

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={currentUser ? '/surveys' : '/'} className='brand-logo'>
          Placeholder
        </Link>
        <a href='#' data-target='mobile-demo' className='sidenav-trigger right'>
          <i className='material-icons'>menu</i>
        </a>
        <ul className='right hide-on-med-and-down'>
          {currentUser === false ? (
            <li>
              <a href='/auth/google'>Sign in with Google</a>
            </li>
          ) : !currentUser ? null : (
            <>
              <li>
                <StripeCheckoutButton />
              </li>
              <li>Credits: {currentUser.credits}</li>
              <li>
                <a href='/api/logout'>Logout</a>
              </li>
            </>
          )}
        </ul>
        <SideBar />
      </div>
    </nav>
  );
};
