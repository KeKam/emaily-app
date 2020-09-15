import { Request, Response, NextFunction } from 'express';

export const requiredLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be logged in.' });
  }

  next();
};
