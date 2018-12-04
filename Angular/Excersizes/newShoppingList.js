/*var app = angular.module('myModule', []); // This is declaring a module. More on this in a moment

	
		 $scope.beatles = ['John', 'Paul', 'George', 'Ringo']; 
});




function beatles($scope){
 	$scope.beatles = ['John', 'George', 'Paul', 'Ringo']
 }*/


var app = angular.module('myList', []);

app.controller('myList', function($scope){
	var Grocerys = angular.module('myList', []);
 	$scope.myList = [
 	{item:'Apples', cost: 2}, 
 	{item:'Oranges', cost: 2},
 	{item:'Bananas', cost:1}
 	]
 });
 