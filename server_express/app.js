require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const moviesRoutes = require("./routes/movies.routes");
app.use("/movies", moviesRoutes);

require("./error-handling")(app);

module.exports = app;
