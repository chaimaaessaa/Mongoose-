const mongoose = require('mongoose');
const model = mongoose.model("Person", personSchema);
const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: Number,
    favoriteFoods: [String]
  });
  


  

  
  module.exports = model;  