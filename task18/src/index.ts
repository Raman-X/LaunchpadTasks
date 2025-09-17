import express from "express";
import "./config/env"; // import environment variables put this above other imports

import orderRoutes from "./routes/orderRoutes";
import productRoutes from "./routes/ProductRoutes";
import userRoutes from "./routes/userRoutes";

import { connectDB } from "./config/db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
