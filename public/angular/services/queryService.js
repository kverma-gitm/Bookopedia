myApp.factory('queryService', function queryFactory($http, authService, $q) {

    var queryArray = {};

    //sign up request
    queryArray.signUp = function (userData) {
        return $http.post('/users/signup', userData);
    }

    //login request
    queryArray.login = function (loginData) {
        return $http.post('/users/login', loginData);
    }

    //login request for facebook
    queryArray.loginFacebook = function () {
        //return $http.get('/auth/facebook');
        window.location.href="/auth/facebook";
    }

    //fav books request
    queryArray.fav = function (id) {
        return $http.post('/users/fav',id);
    }

    //get fav books request
    queryArray.getfav = function (userid) {
        console.log(userid);
        return $http.get('/users/getfav/'+userid);
    }

    //login request for google
    queryArray.loginGoogle = function () {
       
       window.location.replace("/auth/google");
        }

    //login request for reset password
    queryArray.resetpass = function (data) {
        return $http.post('/users/reset', data);
    }

    //login request to get security Question
    queryArray.getquestion = function (data) {
        return $http.post('/users/securityQuestion', data);
    }

    //login request to set the new Password
    queryArray.resetpassword = function (data) {
        return $http.post('/users/resetpassword', data);
    }

  
    return queryArray;

}); //end query service
