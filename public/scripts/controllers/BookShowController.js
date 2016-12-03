console.log('bookshow.js coonected');

angular
  .module('book')
  .controller('BookShowController', BookShowController)

  BookShowController.$inject = ['$http'];
  function BookShowController($http) {
    var vm = this;

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books' + $routeParams.id,
    }).then(function showGetSuccess(json) {
      vm.book = json.data;
    }, function showGetError (res) {
      console.log('error on show controller GET', err)
    });
  }
