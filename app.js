const express = require("express");
const app = express();
const cors = require("cors");
let routes = require("./router");
app.use(express.json());
app.use(cors());
require("dotenv").config();
require("./mongo/connect");
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
