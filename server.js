// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB   = require('./config/database.js')
var MongoStore = require('connect-mongo')(session);

var http     = require('http');

// configuration ===============================================================
mongoose.connect(configDB.url()); // connect to our database
var db = mongoose.connecion;

// set up our express application
app.use(express.logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use("/public",express.static(__dirname + '/public'));

// routes ======================================================================
require('./app/routes.js')(app, passport, http); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('Find the buzz on port ' + port);
