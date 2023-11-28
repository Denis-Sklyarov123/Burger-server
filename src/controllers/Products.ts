import MenuSchema from '../models/Menu';
import FillingsSchema from '../models/Fillings';
import { Request, Response } from 'express';

const getByCategory = async function (req: Request, res: Response) {
  const { selectedCategory } = req.query;

  const product = await MenuSchema.find({ category: selectedCategory });

  if (!product.length) {
    return res.status(404).send({ message: ' No such value exists', category: selectedCategory });
  }
  res.send(product);
};

const getByCategoryModal = async function (req: Request, res: Response) {
  const { category } = req.query;

  const fillingsByType = await FillingsSchema.find({ type: category });

  if (!fillingsByType.length) {
    return res.status(404).send({ message: ' No such value exists', category });
  }

  res.send(fillingsByType);
};

export { getByCategory, getByCategoryModal };
