const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0/oneToOne")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });
