import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.cookie?.split('=').pop();

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY ?? '', err => {
      if (err) {
        return next(err);
      }
      next();
    });
  } else {
    return res.status(401).send('Вы не авторизованы');
  }
}

export default authMiddleware;
