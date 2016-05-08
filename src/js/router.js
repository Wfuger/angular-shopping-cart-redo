
var Router = (
  function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/',
        scope: true,
        template: '@@import _home.html',
        controllerAs: 'vm',
        controller: 'HomeController'
      })
      .state('cart', {
        url: '/cart',
        scope: true,
        template: '@@import _cart.html',
        controllerAs: 'vm',
        controller: 'CartController'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
module.exports = Router;
