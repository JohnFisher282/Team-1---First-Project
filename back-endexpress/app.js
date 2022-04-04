//app.js 
const express = require("express");
const connection = require("./connection");
const postModel = require("./postModel.js");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening at port 3000");
});

app.post("/", async (req, res) => {
    const { title, content } = req.body;
    try {
      const newPost = await postModel.create({
        personName,
        movieTitle,
        seats,
        ticketTypes,
      });
      res.json(newPost);
    } catch (e) {
      res.status(500).send(e);
    }
  });