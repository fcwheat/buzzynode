// app/routes.js
var User       = require('../app/models/user');
var Place      = require('../app/models/place');
var Vote      = require('../app/models/vote');

module.exports = function(app, passport, http) 
{
  // home page
  app.get('/', function(req, res) {

    Place.find(function(err,response){
      if (err) {
        console.log(err);
      }
      else{
        var places = response;
        res.render('index.ejs', {places: places,
                                 total: places.length
                                 });
      }
    });
  });

  // fill in the basic infor
  app.get('/create_places', function(req, res) {
    var place = new Place({
      'name' : 'FitRec',
      'longitude' : 42.351823,
      'latitude' : -71.116282,
      'last_update' : Date.now()
    });

    place.save(function(err, success) {
      if (err) {
        console.error(err);
      } 
      else{
        console.log('success');
        res.send(200);
      }
    });
  });
  //create votes
 app.get('/create_votes', function(req, res) {
    var vote = new Vote({
      'place' : 'FitRec',
      'username' : 'kanav',
      'time_of_vote' : Date.now(),
    });
  // this updates the score for the respective place with value 
  vote.updatePlace(vote.place, vote.username, 50);
  vote.save(function(err, success) {
      if (err) {
        console.error(err);
      } 
      else{
        console.log('success');
        res.send(200);
      }
    });
  });
}
