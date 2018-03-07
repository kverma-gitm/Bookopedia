myApp.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'views/index.html',

		})

		.when('/signup',{
			templateUrl : 'views/signup.html',
			controller      : 'indexController',
            controllerAs    : 'index'


		})

		.when('/login',{
			templateUrl : 'views/login.html',
			controller      : 'indexController',
            controllerAs    : 'index'


		})

		.when('/dashboard/:userId',{
			templateUrl : 'views/dashboard.html',
			controller      : 'mainController',
            controllerAs    : 'main'


		})

		.when('/fav/:userId',{
			templateUrl : 'views/favbooks.html',
			controller      : 'mainController',
            controllerAs    : 'main'


		})

		.when('/forgotpass', {
            templateUrl: 'views/forgotpass.html',
            controller: 'forgotCtrl',
            controllerAs: 'forgot'
        })


        .when('/resetpassword/:userId', {
            templateUrl: 'views/resetpassword.html',
            controller: 'resetCtrl',
            controllerAs: 'reset'
        })



		.otherwise({
            template: '<p></br><h2 align="center" class="well" style="margin: 10%;">404, page not found</br></h2></p>\
		<p align="center"><a  class="btn btn-danger"   href="#/" >Home</button></p>'
        });

	}]);
