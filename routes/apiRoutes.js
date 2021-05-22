const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garden-overflow");

router.get("/plants/:zone", (req, res, next) => {
    db.Plants.find({hardiness : {$in : [req.params.zone]}}).then(data => res.json(data)).catch(err => res.status(422).json(err));
});

router.get("/zoneposts/:zone", (req, res, next) => {
    console.log(req.params.zone);
    db.Posts.find({zone : req.params.zone}).then(data => res.json(data)).catch(err => res.status(422).json(err));
    
});

router.get("/comments/:postid", (req, res, next) => {
    db.Comments.find({postid : req.params.postid}).then(data => res.json(data)).catch(err => res.status(422).json(err));
});

router.post("/addpost", (req, res, next) => {
    db.Posts.create({userName : req.user.userName, ...req.body}).then(data => console.log(`post was created\n${data}`)).catch(err => res.status(422).json(err));
});

router.post("/addcomment", (req, res, next) => {
    db.Comments.create({userName : req.user.userName, zone : req.user.zone, ...req.body}).then(data => console.log(`comment was created\n${data}`)).catch(err => res.status(422).json(err));
});

router.put("/addtogarden", (req, res, next) => {
    db.Users.findByIdAndUpdate(req.user.id, {"$push" : {"garden" : req.body.plant}},{ "new" : true}).then(data => console.log(`garden was updated\n${data}`)).catch(err => res.status(422).json(err));
});

router.put("/removefromgarden", (req, res, next) => {
    db.Users.findByIdAndUpdate(req.user.id, {"$pull" : {"garden" : req.body.plant}},{ "new" : true, "safe" : true}).then(data => console.log(`garden was updated\n${data}`)).catch(err => res.status(422).json(err));
});

router.post("/createuser", (req, res, next) => {
    db.Users.create(req.body).then(data => console.log(`user created \n ${data}`)).catch(err => res.status(422).json(err)); 
});

router.get("/getuser/:username", (req, res, next) => {
    db.Users.findOne({userName : req.params.username}).then(data => res.json(data)).catch(err => res.status(422).json(err)); 
});

module.exports = router;