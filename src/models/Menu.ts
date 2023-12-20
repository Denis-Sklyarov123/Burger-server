import { Schema, model } from 'mongoose';

export interface MenuType {
  key: string;
  name: string;
}

const MenuSchema = new Schema<MenuType>({
  key: String,
  name: String,
});

export default model('Menu', MenuSchema);
