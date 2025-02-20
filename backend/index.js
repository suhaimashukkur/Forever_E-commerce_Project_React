const express = require("express");
const cloudinary=require("cloudinary").v2
const mongoose = require("mongoose");
const productRouter = require("./Routers/productRouter");
const app = express();
const cors=require('cors')
const PORT = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/product", productRouter);
const MONGO_URI = process.env.MONGO_URI;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })

  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("error connection db", err));

app.listen(PORT, () => {
  console.log(`server connecting on port ${PORT}`);
});
