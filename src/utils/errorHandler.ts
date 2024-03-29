import { Request, NextFunction, Response } from 'express';

function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  return res.status(500).send({ error: 'Something failed!' });
}

export { clientErrorHandler };
