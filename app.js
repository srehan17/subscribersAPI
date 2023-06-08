const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/subscribers");
const db = mongoose.connection;
db.once("open", () => console.log("Connected to db"));
db.on("error", (err) => console.error(err));

app.listen(3000, () => console.log("server has started"));
