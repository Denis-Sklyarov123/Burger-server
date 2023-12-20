import { model, Schema } from 'mongoose';

export interface UsersType {
  login: string;
  password: string;
  name: string;
  number: number;
  email: string;
}

const UserSchema = new Schema<UsersType>({
  login: String,
  password: String,
  name: String,
  number: Number,
  email: String,
});

export default model('User', UserSchema);
