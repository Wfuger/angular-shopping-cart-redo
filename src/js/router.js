
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
      .state('about', {
        url: '/about',
        scope: true,
        template: '@@import _about.html',
        controllerAs: 'vm',
        controller: 'AboutController'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
module.exports = Router;
