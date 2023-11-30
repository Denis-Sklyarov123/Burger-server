import MenusSchema from '../models/Menu';
import { Request, Response } from 'express';

const getMenu = async function (req: Request, res: Response) {
  const category = await MenusSchema.find();

  res.send(category);
};

export { getMenu };
