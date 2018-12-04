
angular.module('myMod')   ///getter syntax
	.directive('masthead', function(){  
			return {    
				restrict: "EA",    
				template: "<header>I'm a header</header>",  
				//templateUrl: something.html  
				replace: false  // or true
	}; 
});