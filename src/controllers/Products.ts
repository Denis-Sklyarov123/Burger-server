import BurgerSchema from '../models/';
import fs from 'fs';

const getAll = async function (req: any, res: any) {
  res.header('Content-Type', 'application/json');

  const json: any = fs.readFileSync('src/mocks/data.json');
  const data = JSON.parse(json);

  setTimeout(() => {
    res.send(JSON.stringify(data));
  }, 2000);
};

const save = async function (req: any, res: any) {
  console.log(req.query);
  const { name } = req.query;

  const meat = await BurgerSchema.create({ name });

  res.send(meat);
};

export { getAll, save };
