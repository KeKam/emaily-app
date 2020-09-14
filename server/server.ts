import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import bodyParser from 'body-parser';

import { authRouter } from './routes/auth-routes';
import { stripeRouter } from './routes/stripe-routes';
import './models/user';
import './services/passport';

const start = async () => {
  if (!process.env.REACT_APP_MONGO_URI) {
    throw new Error('REACT_APP_MONGODB_URI must be defined');
  }

  if (!process.env.REACT_APP_COOKIE_SECRET) {
    throw new Error('REACT_APP_COOKIE_SECRET must be defined');
  }

  try {
    await mongoose.connect(process.env.REACT_APP_MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }

  const app = express();

  app.use(bodyParser.json());
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [process.env.REACT_APP_COOKIE_SECRET],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(authRouter);
  app.use(stripeRouter);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);
};

start();
