import { Request, Response, NextFunction } from 'express';
import ProductsSchema from '../models/Product';
import queryBuilder from '../utils/queryBuilder';
// import * as ErrorHandler from '../utils/errorHandler';

// sort, filter, paging
// https://www.npmjs.com/package/mongoose-paginate-v2
const getByCategory = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { category } = req.query;

    const params = queryBuilder(req.query);

    const product = await ProductsSchema.paginate({ category }, params);

    if (!product.docs.length) {
      return res.status(404).send({ message: ' No such value exists', category: 'selectedCategory' });
    }

    return res.send(product.docs);
  } catch (error) {
    return next(error);
    // ErrorHandler.clientErrorHandler;
  }
};

export { getByCategory };
