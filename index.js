const mongoose = require("mongoose");
const Campsite = require("./models/campsite");
const url = "mongodb://127.0.0.1:27017/nucampsite";

const connect = mongoose.connect(url, {});
connect.then(() => {
  console.log("Connected to server.");
  //instantiate new document
  Campsite.create({
    name: "React Lake Campground",
    description: "test"
  })
  //saves document to the database, and returns a promise that tells whether the save operation failed or succeeded
  .then(campsite =>{
    console.log(campsite);
    return Campsite.find();
  })
  .then((campsites)=>{
    console.log(campsites);
    return Campsite.deleteMany();
  })
  .then(()=>{
    mongoose.connection.close();
  })
  .catch(error =>{
    console.log(error);
    mongoose.connection.close();
  });
});
