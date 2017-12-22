const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(console.log);

const app = express();
app.use(cors());
app.use(json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    })
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
