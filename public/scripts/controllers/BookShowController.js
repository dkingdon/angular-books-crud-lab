console.log('bookshow.js coonected');

angular
  .module('books')
  .controller('BookShowController', BookShowController)

  BookShowController.$inject = ['$http', '$routeParams'];
  function BookShowController($http, $routeParams) {
    var vm = this;

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
    }).then(function showGetSuccess(json) {
      vm.book = json.data;
    }, function showGetError (res) {
      console.log('error on show controller GET', err)
    });

    // Deletes book, but has errors. Need to refresh page to see that book was deleted
    vm.deleteBook = function (book) {
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
      }).then(function deleteSuccess(res) {
        var index = vm.books.indexOf(book);
        vm.book.splice(index, 1)
      }, function deleteError(err) {
        console.log('error deleting book', err);
      });
    }

    vm.editBook = function (book) {
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
        data: book,
      }).then(function editSuccess(res) {
        console.log(res);
      }, function editError(err) {
        console.log('error editing book');
      });
    }


  } //END OF CONTROLLER
