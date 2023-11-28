import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import additionalRoutes from './routes/index';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const clientUrl = process.env.CLIENT_URL ?? 'http://localhost:8080/';

app.use(
  cors({
    origin: [clientUrl],
    credentials: true,
  })
);

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
