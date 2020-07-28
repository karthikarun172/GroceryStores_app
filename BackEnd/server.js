const mongoose = require("mongoose");
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const Auth = require("./Routes/Auth");
const Register = require("./Routes/RegisterRoute");
const config = require("config");
const Products = require("./Routes/ProductsRoute");
const Cart = require("./Routes/CartRoutes");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivatekey is not defined");
  process.exit(1);
}
mongoose
  .connect("mongodb://localhost/GroceryStore22")
  .then(() => console.log("Connected to Database"))
  .catch((er) => console.log("Could not connect", er));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/Register", Register);
app.use("/api/auth", Auth);
app.use("/api/product", Products);
app.use("/api/cart", Cart);

const port = process.env.PORT || 12000;
app.listen(port, () => console.log(`Listening to port ${port}`));
