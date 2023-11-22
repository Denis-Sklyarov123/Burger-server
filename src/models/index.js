import { model, Schema } from "mongoose";

const BurgerSchema = new Schema({
  name: String,
});

export default model("Burger", BurgerSchema);
