angular.module('myMod')   ///getter syntax
	.directive('theLogin', function(){  
			return {    
				restrict: "EA",    
				template: "<form>I'm a Form</form>",  
				//templateUrl: something.html  
				replace: false  // or true
	}; 
});