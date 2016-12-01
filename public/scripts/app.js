console.log('app.js connected');

angular
  .module('books', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/booksIndex.html',
        controllerAs: 'bookIndexCtrl',
        controller: 'BookIndexController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  } //END OF CONTROLLER
