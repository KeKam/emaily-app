import express, { Request, Response } from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/logout', (req: Request, res: Response) => {
  req.logout();
  res.send(req.user);
});

router.get('/api/current_user', (req: Request, res: Response) => {
  res.send(req.user);
});

export { router as authRouter };
