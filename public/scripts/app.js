console.log('app.js connected');

angular
  .module('books', [])
  .controller('BookIndexController', BookIndexController);

  BookIndexController.$inject = ['$http'];
  function BookIndexController ($http) {
    var vm = this,

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/api/books'
    }).then(function getSuccessCallback(res) {
      console.log('this is the GET response', res)
      vm.books = res.data;
      console.log(vm.books)
    }, function error(err) {
      console.log('error getting books', err);
    })


  } //END OF CONTROLLER
