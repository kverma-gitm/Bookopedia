myApp.controller('indexController', ['$http', '$location', 'queryService', 'authService', function ($http, $location, queryService, authService) {

    var main = this;

    //function to process login
    this.submitLog = function () {

        var data = {
            email: main.email,
            password: main.password
        }

        queryService.login(data)
            .then(function successCallBack(response) {
                if (response.data.error === true) {
                    alert(response.data.message);
                }
                 else {

                    var userId;
                    var data = response.data.data;
                    queryService.userId = data._id;

                    //console.log(main.userId);
                    authService.setToken(response.data.token);
                    $location.path('/dashboard/' + data._id);
                }
            }, function errorCallBack(response) {
                //console.log(response);
                alert("Error!! Check console");
            });
    } //end submitLog

    //function to process signup
    this.submitSign = function () {

        var data = {
            name: main.name,
            email: main.email,
            password: main.password,
            mobileNumber: main.mobileNumber,
            security: main.security,
            answer: main.securityAnswer
        }
        queryService.signUp(data)
            .then(function successCallBack(response) {
                //console.log(response);
                if (response.data.error === true) {
                    alert(response.data.message)
                } else {
        
                        
                        authService.setToken(response.data.token);
                        var data = response.data.data;
                        console.log(data);
                        main.user = data.name;
                        queryService.userName = response.data.data.name;
                        $location.path('/dashboard/' + data._id);
                    
                }
            }, function errorCallBack(response) {
                //console.log(response);
                if (response.status === 400) {
                    alert(response.data);
                } else {
                    alert(response.data.message);
                }
            });

    } //end submitSign

    
    this.submitGoogle = function () {

        queryService.loginGoogle()
            .then(function successCallBack(response) {
                if (response.data.error === true) {
                    alert(response.data.message);

                } else {

                    var userId;
                    var data = response.data;
                    authService.setToken(data.token);
                    
                }
            }, function errorCallBack(response) {
                alert("Error!! Check console");
            });
    }



}]);
