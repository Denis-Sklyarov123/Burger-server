import express from "express";
import additionalRoutes from "./routes/index.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["http://localhost:8081", "http://localhost:8080"],
    credentials: true,
  })
);

await mongoose
  .connect(`mongodb://localhost:27017`)
  .then(() => {
    console.log("✅: Connection to the MongoDB is successful!");
  })
  .catch((err) => {
    logger.log({
      level: "error",
      message: err,
    });
  });

app.use(additionalRoutes);

app.listen(port, () => {
  console.log(`🔥: Example app listening on port ${port}!`);
});
