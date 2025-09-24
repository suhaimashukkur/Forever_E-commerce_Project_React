const express = require("express");
const productRouter = require("./Routers/productRouter");
const userRouter = require('./Routers/userRoutes')
const orderRouter = require('./Routers/orderRoutes')
const cartRouter = require('./Routers/cartRoutes')
const cors = require("cors");
const connectCloudinary = require('./Config/cloudinary')
const mongoDB = require("./Config/mongodb");
const PORT = process.env.PORT || 8000;
require("dotenv").config();


//App Config
const app = express();
connectCloudinary();
mongoDB();

//middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000","http://localhost:3001"], credentials: true }));

//api endpoints
app.use("/product", productRouter);
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/cart',cartRouter)


app.listen(PORT, () => {
  console.log(`server connecting on port ${PORT}`);
});
