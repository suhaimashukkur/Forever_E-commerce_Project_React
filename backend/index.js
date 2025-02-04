const express = require("express");

const mongoose = require("mongoose");
const productRouter = require("./Routers/productRouter");
const app = express();

const PORT = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json())
app.use("/product", productRouter);
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })

  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("error connection db", err));

app.listen(PORT, () => {
  console.log(`server connecting on port ${PORT}`);
});
