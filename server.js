/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var sessionSecret = "";
if (process.env.SESSION_SECRET) {
  sessionSecret = process.env.SESSION_SECRET;
} else {
  sessionSecret = "dwseojdowedjdmk";
}


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());
app.use(expressSession({secret: sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || '3000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

var serverSide = require("./server/test-mongodb/app");
serverSide(app);

require("./project/app")(app);
app.listen(port);

// // For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//
//
// server.listen( port , () => console.log('Running'));


