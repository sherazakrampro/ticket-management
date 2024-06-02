const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/dbConnection");
const userRouter = require("./routes/user.route");
const ticketRouter = require("./routes/ticket.route");

const app = express();

const mongodbURL = process.env.MONGODB_URL;
connectDB(mongodbURL);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);
app.use("/tickets", ticketRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
