// app/models/place.js
var mongoose = require('mongoose');

// define the schema for a vote
var voteSchema = new mongoose.Schema({

  place         : String,
  username      : String,
  time_of_vote  : { type: Date, default: Date.now() },

});

// create the model for votes and expose it to our app
module.exports = mongoose.model('Vote', voteSchema);