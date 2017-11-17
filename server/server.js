var path = require('path');
var fs = require('fs');
var express = require('express');

//Imports
var indexRoutes = require('./routes/index')

//Create app
var app = express();

//View engine
app.set('view engine', 'html');
app.engine('html', function(path, callbacks) {
  fs.readFile(path, 'utf-8', callbacks)
});

//Middleware
app.use(express.static(path.join(__dirname, '../client')));

//Routes
//app.use('/', indexRoutes);

//Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app
