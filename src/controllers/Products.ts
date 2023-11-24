import MenuSchema from '../models/Menu';
import FillingsSchema from '../models/Fillings';
import fs from 'fs';

const getAll = async function (req: any, res: any) {
  res.header('Content-Type', 'application/json');

  const json: any = fs.readFileSync('src/mocks/data.json');
  const data = JSON.parse(json);

  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 2000);
};

const getByCategory = async function (req: any, res: any) {
  const { selectedCategory } = req.query;

  const product = await MenuSchema.find({ category: selectedCategory });

  res.send(product);
};

const getByCategoryModal = async function (req: any, res: any) {
  const { category } = req.query;

  const typeProduct = await FillingsSchema.find({ type: category });

  res.send(typeProduct);
};

export { getAll, getByCategory, getByCategoryModal };
