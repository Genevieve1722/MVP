var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "ideas"
//mongoose.connect('mongodb://localhost/ideas');

// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;