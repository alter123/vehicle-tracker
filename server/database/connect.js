require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE
  , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

const connection = mongoose.connection;

connection
  .on("connected", () => {
    console.log(`Mongoose connection open`);
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });
