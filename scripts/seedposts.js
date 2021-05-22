const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/garden-overflow"
);

let postArr = [
    {userName : "Plantnerd",
     title : "I love plantsomuch",
     body : "plants are great, all my friends are plants. I'm so happy. this is fine",
     zone : "7",
     tag : "Rant"
    },
    {userName : "MYEARP",
     title : "I grow broccoli",
     body : "so much broccoli, I'm very regular",
     zone : "7",
     tag : "Rant"
    },
    {userName : "Rick",
     title : "Hydroponics",
     body : "All my plants area amazing, they grow in nutrient solution",
     zone : "7",
     tag : "Rant"
    },
    {userName : "dudebro",
     title : "arugula is tight",
     body : "so tasty and flavorful, gotta have it",
     zone : "7",
     tag : "Rant"
    },
    {userName : "ohboyleaves",
     title : "Squash",
     body : "is it a squash or a corgette?",
     zone : "7",
     tag : "Rant"
    }
];

db.Posts.collection.insertMany(postArr)
    .then((data) => {
    console.log(data.result.n + " records inserted!");
    });