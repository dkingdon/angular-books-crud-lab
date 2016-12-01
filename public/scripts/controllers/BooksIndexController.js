console.log('booksIndex.js is connected');

angular
  .module('books')
  .controller('BookIndexController', BookIndexController);

  BookIndexController.$inject = ['$http'];
  function BookIndexController ($http) {
    var vm = this;
    vm.newBook = {};

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books'
    }).then(function getSuccessCallback(res) {
      vm.books = res.data.books;
    }, function error(err) {
      console.log('error getting books', err);
    });

    // vm.createBook = function () {
    //   $http({
    //     method: 'POST',
    //     url: 'https://super-crud.herokuapp.com/books',
    //     data: vm.newBook,
    //   }).then(function createSuccess(res) {
    //     console.log(res.data);
    //     vm.books.push(res.data);
    //   }, function createError (err) {
    //     console.log('error creating book', err);
    //   });
    // }

    // vm.editBook = function (book) {
    //   $http({
    //     method: 'PUT',
    //     url: 'https://super-crud.herokuapp.com/books/' + book._id,
    //     data: book,
    //   }).then(function editSuccess(res) {
    //   }, function editError(err) {
    //     console.log('error editing book');
    //   });
    // }

    vm.deleteBook = function (book) {
      $http({
        method: "DELETE",
        url: 'https://super-crud.herokuapp.com/books/' + book._id
      }).then(function deleteSuccess(res) {
        var index = vm.books.indexOf(book);
        vm.books.splice(index, 1)
      }, function errorDelete(err) {
        console.log('error deleting book', err);
      });
    }


  } //END OF CONTROLLER
