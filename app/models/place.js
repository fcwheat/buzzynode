// app/models/place.js
var mongoose = require('mongoose');

// define the schema for a place
var placeSchema = new mongoose.Schema({

  name        : String,
  longitude   : Number,
  latitude    : Number,
  score       : {type: Number, default: 0},
  last_update : Date,

});

// create the model for domains and expose it to our app
module.exports = mongoose.model('Place', placeSchema);