const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/sparta-posts");
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("db connected!"));

app.listen(3000, () => console.log("server started"))