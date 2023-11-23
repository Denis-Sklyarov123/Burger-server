import json from '../mocks/data.json';
import MenuSchema from '../models/Menu';

const addMenuToBd = () => {
  json.menu.map(async item => {
    await MenuSchema.create({
      category: item.category,
      description: item.description,
      image: item.image,
      name: item.name,
      price: item.price,
    });
    console.log(`${item.name} add`);
  });
};

export default addMenuToBd;
