// the basic DB information

var user = process.env.BuzzyDBUser;
var password = process.env.BuzzyDBPassword;
user = 'fwheat'
password = 'samsamsamiam'
var url = 'mongodb://' + user + ':' + password + '@kahana.mongohq.com:10041/BuzzyNode';

exports.url = function(){
  return 'mongodb://' + user + ':' + password + '@kahana.mongohq.com:10041/BuzzyNode' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
}