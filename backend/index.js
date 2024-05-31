const express = require("express");
require("dotenv").config();
const connectDB = require("./db/dbConnection");
const userRouter = require("./routes/user.route");

const app = express();

const mongodbURL = process.env.MONGODB_URL;
connectDB(mongodbURL);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
