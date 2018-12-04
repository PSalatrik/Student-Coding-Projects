angular.module('myMod')   ///getter syntax
	.directive('themsTheRules', function(){  
			return {    
				restrict: "EA",    
				template: "<h2>I'm the rules</h2>",  
				//templateUrl: something.html  
				replace: false  // or true
	}; 
});