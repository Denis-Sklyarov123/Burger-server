import mock from "../mocks/data.json" assert { type: "json" };
import BurgerSchema from "../models/index.js";

const getAll = async function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(mock));
};

const save = async function (req, res) {
  const { name } = req.query;

  const meat = new BurgerSchema({ name });
  await meat.save();

  res.send(meat);
};

export { getAll, save };
