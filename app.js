const express = require("express");
const mongoose = require("mongoose");

const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");

const app = express();

mongoose.connect("mongodb://127.0.0.1/sparta-posts");
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("db connected!"));

app.use(express.json());
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => console.log("server started"))