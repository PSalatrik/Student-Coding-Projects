var app = angular.module('angularRoutes', ['ngRoute']);



	app.config(function($routeProvider) {  
		$routeProvider    
			.when('/',  {
				controller: 'SimpleController', 
				templateUrl: 'partials/view1.html'
		   }) //no semicolon
	   		.when('/view2', {
	   			controller: 'SimpleController', 
	   			templateUrl: 'partials/view2.html' 
	   	   }) //no semicolon   
	   	.otherwise({ redirectTo: '/' }); 

	});      