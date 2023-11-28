import { Schema, model } from 'mongoose';
import { FillingsType } from '../types/fillingsType';

const FillingsSchema = new Schema<FillingsType>({
  name: String,
  description: String,
  image: String,
  price: Number,
  type: String,
});

export default model('Filling', FillingsSchema);
