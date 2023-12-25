import { Schema, model } from 'mongoose';
export interface FillingType {
  name: string;
  description?: string;
  image: string;
  price: number;
  type: string;
}

const FillingsSchema = new Schema<FillingType>({
  name: String,
  description: String,
  image: String,
  price: Number,
  type: String,
});

export default model('Filling', FillingsSchema);
