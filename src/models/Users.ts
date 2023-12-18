import { model, Schema } from 'mongoose';
import { UsersType } from '../types/usersType';

const UserSchema = new Schema<UsersType>({
  login: String,
  password: String,
  name: String,
  number: Number,
  email: String,
});

export default model('User', UserSchema);
