const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/productRoute.js");

// 1. Declare the app FIRST
const app = express();

// 2. Then use the middlewares
app.use(express.json());

// 3. MongoDB Connection
const MONGODB_URI =
  "mongodb://douaadouha12_db_user:J073cfoDmt4VEAe6@ac-zunnr8n-shard-00-00.v0g7bto.mongodb.net:27017,ac-zunnr8n-shard-00-01.v0g7bto.mongodb.net:27017,ac-zunnr8n-shard-00-02.v0g7bto.mongodb.net:27017/?ssl=true&replicaSet=atlas-ivaf1z-shard-0&authSource=admin";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
  });

app.use(express.urlencoded({ extended: true }));

// 4. Routes

app.use("/api/products", productRoutes);


// 5. Start the server LAST
app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
