import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';

import { useAuthDispatch } from '../../contexts/auth.context';
import { fetchUser } from '../../actions/auth.actions';

export const StripeCheckoutButton = () => {
  const dispatch = useAuthDispatch();

  const handleToken = async (token: Token) => {
    try {
      const response = await axios.post('/api/stripe', token);

      dispatch(fetchUser(response.data));
      alert('Payment was successful');
    } catch (error) {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment.');
    }
  };

  if (!process.env.REACT_APP_STRIPE_KEY) {
    throw new Error('REACY_APP_STRIPE_KEY must be defined');
  }

  return (
    <StripeCheckout
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      currency='EUR'
    >
      <button className='btn'>Add Credits</button>
    </StripeCheckout>
  );
};
