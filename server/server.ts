import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

import { authRouter } from './routes/auth-routes';
import './models/user';
import './services/passport';

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGODB_URI must be defined');
  }

  if (!process.env.COOKIE_SECRET) {
    throw new Error('COOKIE_SECRET must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }

  const app = express();

  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_SECRET],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(authRouter);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);
};

start();
