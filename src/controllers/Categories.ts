import CategoriesSchema from '../models/Category';
import { Request, Response, NextFunction } from 'express';
// import * as ErrorHandler from '../utils/errorHandler';

const getCategories = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const category = await CategoriesSchema.find();

    return res.send(category);
  } catch (error) {
    return next(error);
    // ErrorHandler.clientErrorHandler;
  }
};

export { getCategories };
