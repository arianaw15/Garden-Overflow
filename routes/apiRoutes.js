const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/garden-overflow");

router.get("/plants/:zone", (req, res, next) => {
    db.Plants.find({hardiness : req.params.zone}).then(data => res.json(data));
});

router.get("/zoneposts/:zone", (req, res, next) => {
    db.Posts.find({zone : req.params.zone}).then(data => res.json(data));
});

router.get("/comments/:postid", (req, res, next) => {
    db.Comments.find({postid : req.params.postid}).then(data => res.json(data));
});