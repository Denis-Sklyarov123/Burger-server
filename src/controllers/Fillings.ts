import queryBuilder from '../utils/queryBuilder';
import FillingsSchema from '../models/Filling';
import { Request, Response, NextFunction } from 'express';
// import * as ErrorHandler from '../utils/errorHandler';

const getFillings = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { type } = req.query;

    // Сделать ограничение ввода парраметров лимита и тд
    // const filter = getFillingsFilter(req)
    const params = queryBuilder(req.query);

    const Filling = await FillingsSchema.paginate({ type }, params);

    if (!Filling.docs.length) {
      return res.status(404).send({ message: ' No such value exists', category: 'category' });
    }

    return res.send(Filling.docs);
  } catch (error) {
    return next(error);
    // ErrorHandler.clientErrorHandler;
  }
};

export { getFillings };
