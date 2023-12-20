import FillingsSchema from '../models/Filling';
import * as fs from 'fs';

const addFillingsToBd = () => {
  const ProductsItems = ['sizes', 'breads', 'vegetables', 'sauces', 'fillings'];
  const json: any = fs.readFileSync('src/mocks/data.json');
  const parseJson = JSON.parse(json);

  ProductsItems.map((category: string) => {
    const itemsByCategory: object = parseJson[category];

    Object.values(itemsByCategory).map((item: object) => {
      console.log({ ...item, type: category });
      FillingsSchema.create({ ...item, type: category });
    });
  });
};

export default addFillingsToBd;
