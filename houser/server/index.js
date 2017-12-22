// REQUIRE DEPENDENCIES
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

// CUSTOM MIDDLEWARES
const checkForSession = require("./middlewares/checkForSession");

// REQUIRE CONTROLLERS
const hc = require("./controllers/homes_controller");
const uc = require("./controllers/user_controller");

// INITIALIZE APP
const app = express();

// CONNECT TO DATABASE
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

// SET MIDDLEWARES
app.use(cors());
app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  })
);
app.use(checkForSession); // See if session exists

// API CALLS FOR USERS
app.post("/api/login", uc.login);
app.post("/api/register", uc.register);
app.post("/api/signout", uc.signout);
app.get("/api/user", uc.getUserSession); // For testing purposes

// API CALLS FOR HOMES
app.get("/api/homes", hc.getUserHomes);
app.post("/api/homes", hc.createHome);
app.delete("/api/homes", hc.deleteHome);

// LISTEN ON PORT
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
