const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const userAuth = require("./routes/auth");
const userProduct = require("./routes/product");
const userCart = require("./routes/cart");
const userOrder = require("./routes/order");
let cors = require("cors");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db Connection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use("/api/auth", userAuth);
app.use("/api/users", userRoute);
app.use("/api/products", userProduct);
app.use("/api/cart", userCart);
app.use("/api/order", userOrder);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
