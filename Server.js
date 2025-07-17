// mongodb+srv://kuppilihemanth450:<db_password>@reservationdb.pqa6ydm.mongodb.net/?retryWrites=true&w=majority&appName=ReservationDB
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const connectDB = require("./DB/db");
const authRoutes = require("./Router/auth.route");
const productRoutes = require("./Router/product.route");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})