const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garden-overflow");

router.get("/plants/:zone", (req, res, next) => {
    db.Plants.find({hardiness : {$in : [req.params.zone]}}).then(data => res.json(data)).catch(err => res.status(422).json(err));
});

router.get("/zoneposts/:zone", (req, res, next) => {
    db.Posts.find({zone : req.params.zone}).then(data => res.json(data)).catch(err => res.status(422).json(err));
});

router.get("/comments/:postid", (req, res, next) => {
    db.Comments.find({postid : req.params.postid}).then(data => res.json(data)).catch(err => res.status(422).json(err));
});

router.post("/addpost", (req, res, next) => {
    db.Posts.create(req.body).then(data => {console.log(`post was created\n${data}`); res.redirect('/ZoneForum')}).catch(err => res.status(422).json(err));
});

router.post("/addcomment", (req, res, next) => {
    db.Comments.create(req.body).then(data => {console.log(`comment was created\n${data}`); res.redirect(`/Replyboard/${req.body.postid}`)}).catch(err => res.status(422).json(err));
});

router.put("/addtogarden/:id", (req, res, next) => {
    db.Users.findByIdAndUpdate(req.params.id, {"$push" : {"garden" : req.body}},{ "new" : true}).then(data => console.log(`garden was updated\n${data}`)).catch(err => res.status(422).json(err));
});

router.put("/removefromgarden/:id", (req, res, next) => {
    db.Users.findByIdAndUpdate(req.params.id, {"$pull" : {"garden" : req.body}},{ "new" : true, "safe" : true}).then(data => console.log(`garden was updated\n${data}`)).catch(err => res.status(422).json(err));
});

router.post("/createuser", (req, res, next) => {
    db.Users.create(req.body).then(data => {console.log(`user created \n ${data}`); res.redirect('/userprofile')}).catch(err => res.status(422).json(err)); 
});

router.get("/getuser/:username", (req, res, next) => {
    db.Users.findOne({userName : req.params.username}).then(data => res.json(data)).catch(err => res.status(422).json(err)); 
});

module.exports = router;