const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/garden-overflow"
);

// paste the scraped data into the rawData variable
const rawData = [];

function parseData(arr) {
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === {}) {
      arr.splice(i,1);
    } else {
      delete arr[i].sunUrl;
      delete arr[i].plantUrl;
    }
    console.log(arr);
    return arr;
  }
};

db.Plants
  .remove({})
  .then(() => db.Plants.collection.insertMany(parseData(rawData)))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
