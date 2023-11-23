import { Schema, model } from 'mongoose';

const MenuSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});

export default model('Menu', MenuSchema);
