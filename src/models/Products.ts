import { Schema, model } from 'mongoose';
import { ProductsType } from '../types/productsType';

const ProductsSchema = new Schema<ProductsType>({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});

export default model('Products', ProductsSchema);
