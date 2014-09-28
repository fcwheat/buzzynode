var Place      = require('../models/place');
// app/models/place.js
var mongoose = require('mongoose');

// define the schema for a vote
var voteSchema = new mongoose.Schema({

  place         : String,
  username      : String,
  time_of_vote  : { type: Date, default: Date.now() },

});

voteSchema.methods.updatePlace = function(place, user, score){
	Place.findOne({'name': place},function(err, response){
		if (err) {
			console.log(err);
		}
		else {	
			console.log('response: ' + response);		
			response.score = score;
			response.save();
			console.log('response after: ' + response);

		}
	});
} 

// create the model for votes and expose it to our app
module.exports = mongoose.model('Vote', voteSchema);