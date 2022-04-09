const express = require("express");
const products = require('./products');
const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
