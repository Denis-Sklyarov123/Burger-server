import FillingsSchema from '../models/Fillings';
import { Request, Response } from 'express';

const getByCategoryFillings = async function (req: Request, res: Response) {
  const { category } = req.query;

  const fillingsByType = await FillingsSchema.find({ type: category });

  if (!fillingsByType.length) {
    return res.status(404).send({ message: ' No such value exists', category });
  }

  res.send(fillingsByType);
};

export { getByCategoryFillings };
