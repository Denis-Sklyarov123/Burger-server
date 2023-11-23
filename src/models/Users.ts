import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  login: String,
  password: String,
  name: String,
  numberTelephone: Number,
  email: String,
});

export default model('User', UserSchema);
