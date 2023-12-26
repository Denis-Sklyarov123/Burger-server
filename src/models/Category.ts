import { Schema, model } from 'mongoose';

export interface CategoryType {
  key: string;
  name: string;
}

const CategorySchema = new Schema<CategoryType>({
  key: String,
  name: String,
});

export default model('Category', CategorySchema);
