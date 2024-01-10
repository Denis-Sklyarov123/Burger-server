import { Schema, model, Document, PaginateModel, ObjectId } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface ProductsType extends Document {
  name: String;
  description: String;
  image: String;
  price: Number;
  category: String;
}

const ProductsSchema: Schema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});

ProductsSchema.plugin(mongoosePaginate);

interface Product<T extends Document> extends PaginateModel<T> {}

const ProductModel: Product<ProductsType> = model<ProductsType>('Product', ProductsSchema) as Product<ProductsType>;

export default ProductModel;
