const express = require("express");
require("dotenv").config();
const connectDB = require("./db/dbConnection");

const app = express();

const mongodbURL = process.env.MONGODB_URL;
connectDB(mongodbURL);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
