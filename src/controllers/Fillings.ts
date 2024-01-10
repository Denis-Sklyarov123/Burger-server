import FillingsSchema from '../models/Filling';
import { Request, Response, NextFunction } from 'express';

const getByCategoryFillings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    // const { limit, sort, type } = req.query;
    const query = {
      type: 'breads',
    };
    const option = {
      limit: 2,
      sort: { price: 1 },
    };

    const Filling = await FillingsSchema.paginate(query, option);
    // const Filling = await FillingsSchema.paginate({ type }, { limit, sort });
    // const Filling = await FillingsSchema.find({ type: category });

    if (!Filling.docs.length) {
      return res.status(404).send({ message: ' No such value exists', category: 'category' });
    }

    return res.send(Filling.docs);
  } catch (error) {
    return next(error);
  }
};

export { getByCategoryFillings };
