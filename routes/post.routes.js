const router = require("express").Router();
const mongoose = require("mongoose");





// Require the User  and Post models in order to interact with the database
const User = require("../models/User.model");
const Post = require("../models/Post.model");

// require (import) middleware functions
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

router.route('/')
.get(isLoggedIn, (req, res)=>{
    res.render('post-form')
})
.post((req, res)=>{
    const content = req.body.content;
    const picName = req.body.picName;
    const picPath = req.body.picPath;
    const creatorId = req.session.currentUser._id;
    const posts = {content, picName, picPath, creatorId}

    Post.create(posts)
    .then(()=>{res.redirect('/')
    })
    .catch(err=> console.log(`there's an error: ${err}`))
});

router.route('/:id')
.get((req, res)=>{
    const id = req.params.id;
    Post.findById(id)
    .then((post)=>
    {console.log("obj: ", post)
    res.render('post-details', post)})
    
})


module.exports = router;