import hashPassword from '../helpers/hashPassword';
import UserSchema from '../models/Users';

const createUser = async function (req: any, res: any) {
  const query = req.query;

  const isUserFind = await UserSchema.findOne({
    $or: [{ login: query.login }, { email: query.email }],
  });
  if (isUserFind) {
    return res.status(400).send({ message: `You are already registered` });
  }

  const user = await UserSchema.create({
    ...query,
    password: await hashPassword(query.password),
  });
  res.send(user);
};

export { createUser };
