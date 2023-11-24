import { Schema, model } from 'mongoose';

const FillingsSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  type: String,
});

export default model('Filling', FillingsSchema);
