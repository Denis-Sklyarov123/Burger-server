import { Schema, model } from 'mongoose';
import { MenuType } from '../types/menuType';

const MenuSchema = new Schema<MenuType>({
  key: String,
  name: String,
});

export default model('Menu', MenuSchema);
