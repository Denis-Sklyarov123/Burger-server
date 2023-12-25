import addFillingsToBd from '../helpers/addFillingsToBD';
import addMenuToBd from '../helpers/addMenuToBD';
import addProductsToBd from '../helpers/addProductsToBD';

import ProductsSchema from '../models/Product';
import MenuSchema from '../models/Menu';
import FillingsSchema from '../models/Filling';

async function addDataIsCollectionEmpty() {
  const products = await ProductsSchema.find();
  if (!products.length) {
    console.log('Products is empty');
    addProductsToBd();
  }

  const menu = await MenuSchema.find();
  if (!menu.length) {
    console.log('Menu is empty');
    addMenuToBd();
  }

  const fillings = await FillingsSchema.find();
  if (!fillings.length) {
    console.log('Fillings is empty');
    addFillingsToBd();
  }
}

export default addDataIsCollectionEmpty;

// seed -u 'mongodb://127.0.0.1:27017/Burgers' --drop-database ./src/data
