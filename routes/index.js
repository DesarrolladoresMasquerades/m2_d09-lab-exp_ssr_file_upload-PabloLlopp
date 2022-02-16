const router = require("express").Router();
const Post = require("../models/Post.model");

/* GET home page */
router.get("/", (req, res, next) => {

  Post.find()
  .then((posts)=>{
    res.render("index", {posts});
  })
  
});

module.exports = router;
