import ProductsSchema from '../models/Products';
import { Request, Response } from 'express';

const getByCategory = async function (req: Request, res: Response) {
  const { selectedCategory } = req.query;

  const product = await ProductsSchema.find({ category: selectedCategory });

  if (!product.length) {
    return res.status(404).send({ message: ' No such value exists', category: selectedCategory });
  }
  res.send(product);
};

export { getByCategory };
