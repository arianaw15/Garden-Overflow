const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/garden-overflow"
);

const postArr = [
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
   tag : "Question"
  },
  {userName : "Rick",
   title : "Hydroponics",
   body : "All my plants area amazing, they grow in nutrient solution",
   zone : "7",
   tag : "GardenBrag"
  },
  {userName : "dudebro",
   title : "arugula is tight",
   body : "so tasty and flavorful, gotta have it",
   zone : "7",
   tag : "Advice"
  },
  {userName : "ohboyleaves",
   title : "Squash",
   body : "is it a squash or a corgette?",
   zone : "7",
   tag : "Article"
  }
];

const commArr = [
  {
    userName: "Plantnerd",
    postid: "60a5b5040c777b3a3819c44b",
    body: "plants are great, all my friends are plants. I'm so happy. this is fine",
  },
  {
    userName: "MYEARP",
    postid: "60a5b5040c777b3a3819c44b",
    body: "so much broccoli, I'm very regular",
  },
  {
    userName: "Rick",
    postid: "60a5b5040c777b3a3819c44b",
    body: "All my plants area amazing, they grow in nutrient solution",
  },
  {
    userName: "dudebro",
    postid: "60a5b5040c777b3a3819c44b",
    body: "so tasty and flavorful, gotta have it",
  },
  {
    userName: "ohboyleaves",
    postid: "60a5b5040c777b3a3819c44b",
    body: "is it a squash or a corgette?",
  },
];

db.Comments.collection.insertMany(commArr)
    .then((data) => {
    console.log(data.result.n + " records inserted!");
    });