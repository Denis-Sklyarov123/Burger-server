import { Request, Response, NextFunction } from 'express';
import hashPassword from '../helpers/hashPassword';
import UserSchema from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import * as ErrorHandler from '../utils/errorHandler';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.body;

    const isUserFind = await UserSchema.findOne({
      $or: [{ login: query.login }, { email: query.email }],
    });

    if (isUserFind) {
      return res.status(422).send({ message: `You are already registered` });
    }

    const user = await UserSchema.create({
      ...query,
      password: await hashPassword(query.password.toString()),
    });

    return res.send(user);
  } catch (error) {
    return next(error);
    // ErrorHandler.clientErrorHandler;
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { emailOrUserName, password } = req.body;

    const findUser = await UserSchema.findOne({
      $or: [{ login: emailOrUserName }, { email: emailOrUserName }],
    });

    if (!findUser) {
      // throw new Error('BROKEN');
      return res.status(404).send({ message: `You are not register` });
    }

    const isPassValid = await bcrypt.compare(password.toString(), findUser.password);
    if (!isPassValid) {
      // 401 HttpStatus.Unauthorized
      return res.status(418).send({ message: `Pass or username or email not correct` });
    }

    const token = jwt.sign(
      {
        login: findUser.login,
        password: findUser.password,
        email: findUser.email,
        name: findUser.name,
        number: findUser.number,
      },
      process.env.SECRET_KEY
    );

    return res
      .cookie('Token', token, { maxAge: 7 * 24 * 60 * 60 * 1000 })
      .send({ message: 'You login. Welcome', user: findUser });
  } catch (error) {
    return next(error);
    // ErrorHandler.clientErrorHandler;
  }
};

export { createUser, login };
