import { Request, Response, NextFunction } from 'express';
import ProductsSchema from '../models/Product';
// import { PaginationParameters } from 'mongoose-paginate-v2';

// sort, filter, paging
// https://www.npmjs.com/package/mongoose-paginate-v2
const getByCategory = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const query = {
      category: 'sandwiches',
    };
    const option = {
      limit: 20,
      sort: { price: 1 },
    };

    const product = await ProductsSchema.paginate(query, option);

    if (!product.docs.length) {
      return res.status(404).send({ message: ' No such value exists', category: 'selectedCategory' });
    }

    return res.send(product.docs);
  } catch (error) {
    return next(error);
  }
};

export { getByCategory };
