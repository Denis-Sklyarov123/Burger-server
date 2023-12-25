import { Request, Response, NextFunction } from 'express';
import ProductsSchema from '../models/Product';

// sort, filter, paging
// https://www.npmjs.com/package/mongoose-paginate-v2
const getByCategory = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { selectedCategory } = req.query;

    const product = await ProductsSchema.find({ category: selectedCategory });

    if (!product.length) {
      return res.status(404).send({ message: ' No such value exists', category: selectedCategory });
    }

    return res.send(product);
  } catch (error) {
    return next(error);
  }
};

export { getByCategory };
