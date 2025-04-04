const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//test by subbing schema for mongoose.Schema
const campsiteSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  description:{
    type: String,
    required: true,
  }
},
//by setting timestamps to true, we automatically add two properties to the schema called created at and updated at
{
  timestamps: true
});
//this creates a model using a schema (campsiteSchema) for the campsites collection
const Campsite = mongoose.model('Campsite', campsiteSchema);
module.exports = Campsite;

//when you use the mongoose.model method, it returns a constructor function