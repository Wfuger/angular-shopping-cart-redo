var angular = require('angular');
require('angular-ui-router');

var HomeController = require('./controllers/HomeController');
var AboutController = require('./controllers/AboutController');
var Router = require('./router');

angular
  .module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .controller( 'AboutController', AboutController )
  .config( Router );