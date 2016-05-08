var angular = require('angular');
require('angular-ui-router');

var HomeController = require('./controllers/HomeController');
var CartController = require('./controllers/CartController');
var teaService = require('./services/teaService')
var Router = require('./router');

angular
  .module('app', ['ui.router'])
  .controller( 'HomeController', HomeController )
  .controller( 'CartController', CartController )
  .service('teaService', teaService)
  .config( Router );