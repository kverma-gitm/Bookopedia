
myApp.controller('mainController', ['$http','$scope','$location','$routeParams','apiService','queryService' ,function($http,$scope,$location,$routeParams,apiService,queryService){ 

    $scope.inputValue = '';
    $scope.favbooks =[];
    $scope.books = [];
    var userid = $routeParams.userId;

  // get book
    $scope.getBooksFunction = function(book) {
    apiService.getBooks(book).then(function successCallback(response) {
        
        $scope.books = response.data;
        console.log($scope.books);
        
      },
        function errorCallback(response) {
        alert("404 error not found");
        
      });
    
    
    
  }; //function end
  
    //logout
    $scope.logout = function () {
        $location.path('/');
    }

    //function to save fav books 
    $scope.fav = function(id,link){
      
      var data = {

        bookname : document.getElementById("bookname").textContent,
        publish : document.getElementById("publishon").textContent,
        author : document.getElementById("author").textContent,
        link : link,
        userid :userid,
        _id : id ,
        
      }
      console.log(data);
       queryService.fav(data)
            .then(function successCallBack(response) {
                if (response.data.error === true) {
                    alert(response.data.message);
                }
                 else {
                 	
                    alert("Book Saved");
                }
            }, function errorCallBack(response) {
                console.log(response);
                alert("Error!! Check console");

            });
      
      }

      //go to fav books page
      $scope.favpage = function(){

      	$location.path('/fav/'+userid);

      }

      //getting saved fav books
      $scope.getfav = function(){
        console.log(userid);
        queryService.getfav(userid)
                .then(function successCallBack(response) {
                if (response.data.error === true) {
                    alert(response.data.message);
                }
                 else {
                    
                    $scope.favbooks = response.data.data;
                    console.log($scope.favbooks);
                    $location.path('/fav/'+userid);
                    
                }
            }, function errorCallBack(response) {
                console.log(response);
                alert("Error!! Check console");

            });
      }


}]);  //maincontroller end