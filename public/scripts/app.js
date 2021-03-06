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
      .when('/books/:id', {
        templateUrl: '/templates/book-show.html',
        controllerAs: 'bookShowCtrl',
        controller: 'BookShowController'
      })
      .when('/pokemon', {
        templateUrl: '/templates/pokemonIndex.html',
        controllerAs: 'pokemonIndexCtrl',
        controller: 'PokemonIndexController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  } //END OF CONTROLLER
