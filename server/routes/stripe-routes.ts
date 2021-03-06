import express, { Response, Request } from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

import { requiredLogin } from '../middlewares/required-login';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

if (!process.env.REACT_APP_STRIPE_SECRET_KEY) {
  throw new Error('REACY_APP_STRIPE_SECRET_KEY must be defined');
}

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const router = express.Router();

router.post(
  '/api/stripe',
  requiredLogin,
  async (req: Request, res: Response) => {
    try {
      await stripe.charges.create({
        amount: 500,
        currency: 'eur',
        description: '5€ for 5 credits',
        source: req.body.id,
      });

      if (req.user) {
        req.user.credits += 5;
        const user = await req.user.save();
        res.status(200).send(user);
      }
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

export { router as stripeRouter };
