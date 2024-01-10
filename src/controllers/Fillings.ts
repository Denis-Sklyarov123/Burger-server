import FillingsSchema from '../models/Filling';
import { Request, Response, NextFunction } from 'express';

const getByCategoryFillings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    console.log('Filling', req.query);
    const { sort, type, limit } = req.query as { sort: Record<string, string>; type: string; limit: string };
    // const query = {
    //   type: 'fillings',
    // };
    // const option = {
    //   limit: 2,
    //   sort: { price: 1 },
    // };

    const parsedSort = Object.keys(sort).reduce((acc, key) => {
      acc[key] = parseInt(sort[key]);
      return acc;
    }, {} as Record<string, number>);

    const parsedLimit = parseInt(limit);

    const Filling = await FillingsSchema.paginate({ type }, { sort: parsedSort, limit: parsedLimit });

    if (!Filling.docs.length) {
      return res.status(404).send({ message: ' No such value exists', category: 'category' });
    }

    return res.send(Filling.docs);
  } catch (error) {
    return next(error);
  }
};

export { getByCategoryFillings };
