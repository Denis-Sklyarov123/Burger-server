import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import * as errorHandler from '../src/utils/errorHandler';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT;
const clientUrl = process.env.CLIENT_URL || '*';
const UrlDB = process.env.DB_URL;

app.use(
  cors({
    origin: [clientUrl],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  // .env
  .connect(`${UrlDB}`)
  .then(() => {
    console.log('✅: Connection to the MongoDB is successful!');
  });
// ???
// .catch(err => {
//   console.error({
//     level: 'error',
//     message: err,
//   });
// });

app.use(routes);
app.use(errorHandler.clientErrorHandler);

app.listen(port, () => {
  console.log(`🔥: Example app listening on port ${port}!`);
});
