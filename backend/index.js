const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserRouter = require("./routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);

mongoose
  .connect(
    "mongodb+srv://sasindu0215:user123@cluster0.sstwbdc.mongodb.net/axios_crud"
  )
  .then(() => {
    console.log("Db is connected"),
      app.listen(3000, () => {
        console.log("server is running");
      });
  })
  .catch((error) => {
    console.log(error.message);
  });
