const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const path = require("path");

const app = express();

app.use(cors());
app.use("/", routes);

app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
