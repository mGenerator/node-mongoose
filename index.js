const mongoose = require("mongoose");
const Campsite = require("./models/campsite");
const url = "mongodb://127.0.0.1:27017/nucampsite";

const connect = mongoose.connect(url, {});
connect.then(() => {
  console.log("Connected to server.");
  // Different way of instantiation a new document using a model
  // const newCampsite = new Campsite({});

  //instantiate new document
  Campsite.create({
    name: "React Lake Campground",
    description: "test",
  })
    //saves document to the database, and returns a promise that tells whether the save operation failed or succeeded
    .then((campsite) => {
      console.log(campsite);

      return Campsite.findByIdAndUpdate(
        campsite._id,
        { $set: { description: "Updated Test Document" } },
        {
          new: true,
        }
      );
    })
    .then(campsite =>{
      console.log(campsite);
      campsite.comments.push({
        rating: 5,
        text: 'What a magnificent view',
        author: 'Tinus Lorvaldes'
      });
      return campsite.save();
    })
    .then((campsite) => {
      console.log(campsite);
      return Campsite.deleteMany();
    })
    .then(() => {
      mongoose.connection.close();
    })
    .catch((error) => {
      console.log(error);
      mongoose.connection.close();
    });
});
