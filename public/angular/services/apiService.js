myApp.factory('apiService', function apiFactory($http) {

  var baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  var apiFactory = {};

 
  apiFactory.getBooks = function(book) {
    return $http.get(baseUrl + book);
  }
  return apiFactory;


}); //end apiFactory service