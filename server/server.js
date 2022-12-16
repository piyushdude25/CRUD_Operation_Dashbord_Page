const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//DB configs
mongoose
  .connect("mongodb://localhost:27017/mypostsDB")
  .catch((err) => console.log(err));

const postSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  address: String,
  pincode: Number,
  position: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("express is here on Brower");
});

app.post("/create", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    pincode: req.body.pincode,
    position: req.body.position,
  });

  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))

    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      pincode: req.body.pincode,
      position: req.body.position,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.listen(8080, function () {
  console.log("Express server is running");
});
