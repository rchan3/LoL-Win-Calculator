const express = require("express");
var cors = require("cors");
const path = require("path");
// const favicon = require('serve-favicon');
const logger = require("morgan");
const app = express();

require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.options("*", cors());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "client", "build")));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/mmr", require("./routes/api/mmr"));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.MONGODB_URI || 3001;
app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
