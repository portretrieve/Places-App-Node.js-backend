const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const placeRoutes = require("./routes/places-routes");

app.listen(5000);
