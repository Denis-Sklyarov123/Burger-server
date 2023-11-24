import FillingsSchema from '../models/Fillings';
import fs from 'fs';

const addFillingsToBd = () => {
  const menuItems = ['sizes', 'breads', 'vegetables', 'sauces', 'fillings'];
  const json: any = fs.readFileSync('src/mocks/data.json');
  const parseJson = JSON.parse(json);

  menuItems.map((category: string) => {
    const test: object = parseJson[category];

    Object.values(test).map((item: object) => {
      console.log({ ...item, type: category });
      FillingsSchema.create({ ...item, type: category });
    });
  });
};

export default addFillingsToBd;
