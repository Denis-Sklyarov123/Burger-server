import FillingsSchema from '../models/Filling';
import { Request, Response, NextFunction } from 'express';

const getByCategoryFillings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { category } = req.query;

    const fillingsByType = await FillingsSchema.find({ type: category });

    if (!fillingsByType.length) {
      return res.status(404).send({ message: ' No such value exists', category });
    }

    return res.send(fillingsByType);
  } catch (error) {
    return next(error);
  }
};

export { getByCategoryFillings };
