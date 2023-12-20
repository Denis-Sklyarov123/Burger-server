import { Schema, model } from 'mongoose';

export interface ProductsType {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const ProductsSchema = new Schema<ProductsType>({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});

export default model('Products', ProductsSchema);
