let mongoose = require("mongoose");

let trackerData = new mongoose.Schema(
  {},
  { strict: false, collection: "vehicle_data" }
);

module.exports = mongoose.model("data", trackerData);
