import { Schema, model, Document, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface FillingType extends Document {
  name: String;
  description?: String;
  image: String;
  price: Number;
  type: String;
}

const FillingsSchema: Schema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  type: String,
});

FillingsSchema.plugin(mongoosePaginate);

interface Filling<T extends Document> extends PaginateModel<T> {}

const FillingModel: Filling<FillingType> = model<FillingType>('Filling', FillingsSchema) as Filling<FillingType>;

export default FillingModel;
