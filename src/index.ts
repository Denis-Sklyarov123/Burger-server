import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import additionalRoutes from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import ProductsSchema from './models/Products';
import addProductsToBd from './helpers/addProductsToBD';
import MenuSchema from './models/Menu';
import addMenuToBd from './helpers/addMenuToBD';
import addFillingsToBd from './helpers/addFillingsToBD';
import FillingsSchema from './models/Fillings';

const app = express();
const port = 3000;
const clientUrl = process.env.CLIENT_URL ?? 'http://localhost:8080/';

app.use(
  cors({
    origin: [clientUrl],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(`mongodb://localhost:27017/Burgers`)
  .then(() => {
    console.log('✅: Connection to the MongoDB is successful!');
  })
  .catch(err => {
    console.log({
      level: 'error',
      message: err,
    });
  });

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

addDataIsCollectionEmpty();

app.use(additionalRoutes);

app.listen(port, () => {
  console.log(`🔥: Example app listening on port ${port}!`);
});
