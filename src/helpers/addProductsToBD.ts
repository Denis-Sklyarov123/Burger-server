import * as json from '../mocks/data.json';
import ProductsSchema from '../models/Product';

const addProductsToBd = () => {
  json.menu.map(async item => {
    await ProductsSchema.create({
      category: item.category,
      description: item.description,
      image: item.image,
      name: item.name,
      price: item.price,
    });
  });
};

export default addProductsToBd;
