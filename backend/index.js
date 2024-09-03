const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");
require("dotenv").config();
const cors = require('cors');
const path=require('path')

const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);

app.get("/", (req, res) => {  
  res.status(200).json({
    staus: "Success"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
