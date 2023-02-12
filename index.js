const mongoose = require('mongoose');

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });



// Create a Person model
const Person = mongoose.model('Person', personSchema);

// Create and save a person record
const person = new Person({ name: 'John', age: 30, favoriteFoods: ['pizza', 'burgers'] });
person.save(function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('Person saved successfully:', data);
  }
});

// Create multiple person records with model.create()
const arrayOfPeople = [
  { name: 'Jane', age: 28, favoriteFoods: ['salad', 'sushi'] },
  { name: 'Bob', age: 32, favoriteFoods: ['steak', 'french fries'] }
];

Person.create(arrayOfPeople, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log('People saved successfully:', data);
  }
});

// Search for people with model.find()
const name = 'John';
Person.find({ name: name }, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(`People with name ${name}:`, data);
  }
});

// Search for one person with model.findOne()
const food = 'pizza';
Person.findOne({ favoriteFoods: food }, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Person with favorite food ${food}:`, data);
  }
});

// Search for one person with model.findById()
const personId = '5f3e4...';
Person.findById(personId, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(`Person with id ${personId}:`, data);
  }
});

// Update a person with classic update method
const updatedPersonId = '5f3e4...';
Person.findById(updatedPersonId, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    data.favoriteFoods.push('hamburger');
    data.markModified('favoriteFoods');
    data.save(function(err, updatedData) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Updated person with id ${updatedPersonId}:`, updatedData);
      }
    });
  }
});

// Update a person with model.findOneAndUpdate()
