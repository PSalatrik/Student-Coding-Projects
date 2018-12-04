angular.module('myMod')   ///getter syntax
	.directive('navDir', function(){  
			return {    
				restrict: "EA",    
				template: "<nav>Im the Nav</nav>",  
				//templateUrl: something.html  
				replace: false  // or true
	}; 
});