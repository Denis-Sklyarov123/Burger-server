import * as menu from '../mocks/menu.json';
import MenuSchema from '../models/Menu';

const addMenuToBd = async () => {
  for (const item of menu) {
    await MenuSchema.create({
      key: item.keyCategory,
      name: item.nameCategory,
    });
  }
};

export default addMenuToBd;
