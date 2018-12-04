angular.module('myMod')   ///getter syntax
	.directive('myPosts', function(){  
			return {    
				restrict: "EA",    
				template: "<h1>I'm a Post</h1>",  
				//templateUrl: something.html  
				replace: false  // or true
	}; 
});