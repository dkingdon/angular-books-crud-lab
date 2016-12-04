console.log('pokemon.js connected');


angular
  .module('books')
  .controller('PokemonIndexController', PokemonIndexController);

  PokemonIndexController.$inject = ['$http'];
  function PokemonIndexController ($http) {
    var vm = this;
    vm.newPokemon = {};


    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function getPokemonSuccess(res) {
      vm.pokemon = res.data.pokemon;
    }, function getPokemonError(err) {
      console.log("error getting pokemon", err);
    })


  } //END OF CONTROLLER
