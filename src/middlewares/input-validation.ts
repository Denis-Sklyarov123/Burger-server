import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

function inputValidator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  //   console.log('🚀 ~ validatorUser ~ errors:', errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export default inputValidator;
