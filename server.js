const express = require("express");
const cookieParser = require('cookie-parser');
require("dotenv").config();

const keys = require("./keys");

const mongoose = require("mongoose");
//const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting headers for CORS Policies
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});


// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
const connection = (process.env.NODE_ENV === "production" ? process.env.mongo_uri : process.env.mongo_uri);

if (process.env.NODE_ENV === "production") {
  mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
} else {
  mongoose.connect("mongodb://127.0.0.1/nextjs-mongo-passport-template");
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});