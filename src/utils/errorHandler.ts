import { Request, NextFunction, Response } from 'express';

function clientErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

export { clientErrorHandler };
