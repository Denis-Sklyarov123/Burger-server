import { Schema, model } from 'mongoose';
import { MenuType } from '../types/menuType';

const MenuSchema = new Schema<MenuType>({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});

export default model('Menu', MenuSchema);
