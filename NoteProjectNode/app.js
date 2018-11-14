var express = require('express');
var app = express();

var nannyApplicationController = require('./nannyApplication/nannyApplicationController');
app.use('/', nannyApplicationController);

module.exports = app;