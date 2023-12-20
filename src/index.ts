import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import additionalRoutes from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import ProductsSchema from './models/Product';
import addProductsToBd from './helpers/addProductsToBD';
import MenuSchema from './models/Menu';
import addMenuToBd from './helpers/addMenuToBD';
import addFillingsToBd from './helpers/addFillingsToBD';
import FillingsSchema from './models/Filling';

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

app.use(additionalRoutes);

app.listen(port, () => {
  console.log(`🔥: Example app listening on port ${port}!`);
});
