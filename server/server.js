import express from "express";
import Carouseldata from "./data/Carouseldata.js";
import dotenv from "dotenv";
import connectDatabase from "./config/Mongo.js";
import ImportData from "./Dataimport.js";
import productRoute from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/error.js";
dotenv.config();
const app = express();
connectDatabase();
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, console.log(`server is running on port ${PORT}`));

// // //loading all products from server
app.get("/api/products", (req, res) => {
  res.json(Carouseldata);
});
app.get("/", ()=>console.log('hello'))
// // //loading single product
app.get("/api/product/:id", (req, res) => {
  const product = Carouseldata.find((p) => p._id === req.params.id);
  return res.json(product);
});
