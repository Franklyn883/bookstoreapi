const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const mongoose = require("mongoose");
const dbURI = process.env.dbURI;

console.log("connecting to database...");
mongoose
    .connect(dbURI)
    .then(() => {
        console.log("connected to database");
        app.listen(3000, () => {
            console.log("listening on port 3000");
        });
    })
    .catch((err) => {
        console.log(err);
    });
