const express = require("express");
const router = express.Router();

require("../database/connect.js");
const data = require("../database/schema.js");

router.get("/vehicles", (req, res) => {
  data.find().distinct("vehicle_id", (err, vehicles) => {
    if (!err) {
      return res.json(vehicles);
    }
  });
});

router.get("/vehicle/:id/:page", (req, res) => {
  let resData = data
    .find({ vehicle_id: req.params.id })
    .sort("timestamp")
    .skip(parseInt(req.params.page * 5))
    .limit(5)
    .then(data => res.json(data))
    .catch(err => res.json("Server error"));
  return resData;
});

module.exports = router;
