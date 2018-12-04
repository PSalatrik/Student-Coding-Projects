Services


/*Services are reusable components that are separated from views and can be used across multiple controllers and views. 
There are lots of ways to define services (they are just functions). 
For now we will define them simply as functions that return objects. 
We will look at some more conventional patterns later that can also be used.
There is a subtle difference between services and factories. 
You may hear the word "factory" thrown around, but we'll get into the difference between the two later 
in the course because they do almost the same thing. We'll start out by focusing on services.
There are also a number of built-in services. 
One of the most useful is $http which provides us access to the browsers 
XMLHttpRequest object and allows us to make AJAX calls to remote sources.*/

              
// service.js var app = angular.module('myModule');
app.factory('myService', function(){  // service logic });              
                          
// controller.js var app = angular.module('myModule', []);
app.controller('myController', function(myService){  // controller logic using myService });              
            

/*Make a web application that allows a user to enter information in one view and 
see all of that information displayed and formatted in another.
Create two views: A form with inputs, and a display page. 
Set up routes for both views, provide some navigation solution to move between each. 
In the form view, ask the user for at least two pieces of data about a single item 
(i.e. name / instrument in our band member example). 
Each view should have their own controller 
When the user submits the form data, persist it so that it may be used for multiple controllers. 
In the display view, format and display the data.*/


API

//One of the most common operations for web applications is to make API calls to external sources. 
//This is commonly called AJAX requests, though that name is not entirely accurate anymore (we're using JSON mostly now).


//Expand the last lab to include external data. 
//Use the $http service to pull in external data. 
//Use the data from . 
//Display the data somewhere in your information view. You may need to use ng-repeat to display multiple things. You'll need to get used to parsing through the body of the json to get to the data you want. https://twlaas.herokuapp.com/ ',6&/$,0(5 Reddit is on the internet and the internet can be a vile place. I think the front page should be okay but I'm just warning you there may be some potty language / tasteless humor / not awesome stuff.


Directives

//Directives are the most important and most powerful part of Angular.
//Directives are the part of angular that allows us to extend native HTML with custom elements and attributes. 
//The result is that this makes our markup a much more expressive and easier to follow.

              
<div class="container">  
	<div id="header">    
	<div class="nav">      
	<div class="nav-item active">
	<a href="/home">Home</a></div>      
		<div class="nav-item"><a href="/about">About</a></div>      
		<div class="nav-item"><a href="/register">Register</a></div>      
		<div class="nav-item"><a href="/settings">Settings</a></div>    
		</div>  
	</div> 
</div>              
        

              
<app-container>  <header>    <nav>      <nav-item>Home</nav-item>      <nav-item>About</nav-item>      <nav-item>Register</nav-item>      <nav-item>Settings</nav-item>    </nav>  </header> </app-container>              
            
.Directives

//We've already made extensive use of directives in Angular. 
//But we've only been using the ones that come pre-packaged with the framework. 
//It is also possible to create our own directives to achieve more specific and custom functionality.
//At their heart, directives are the ability in angular to teach HTML new tricks.
//To create a custom directive, 
//we start by declaring it in much the same way we do a service or controller and providing a callback              

//getter sintax

angular.module('whatever')
	.directive('helloWorld', function(){

	})


//setter sintax
var app = angular.module('myModule', []);

app.directive('helloWorld', function(){
});              
            
//Inside the callback function, return an object literal (directive definition) 
//that has a set of properties that will configure the directive.              

app.directive('helloWorld', function(){  
	return {    
		restrict: "E",    
		template: "<h1>Hello World</h1>",  
		//templateUrl: something.html  
		replace: false  // or true
	}; 
}); 

         
//Property Description 
//restrict 
//Defines how the directive can be used (A for Attribute, E for element, etc.) 

//template 
//Defines the HTML that will be used when this directive is compiled and inserted into the DOM 

//replace 
//Determines whether the directive will be replaced with the template.


Once you have defined your directive. You can use it in your HTML just like a native element or attribute. So our previous directive example is used thusly.              
<hello-world></hello-world>
<!-- or -->
<hello:world></hello:world>  
//storing everything in a array
//minifacation / is refered to as mangeled 

app.controller('name' [$scope; $interval; 'apiService', function($scope, $interval, apiService){
	$scope.things = [1,2,3,4]
}]);
//all the dependencys have to line up in the array and into the function they used in
//html5 compliance tool  - syntax error or your missing a semi colon 
//have to follow html spelling in the html and camelCased in javascript              
            
/*Lab 19
Use basic directives to build a simple expressive html site
Look at the front page of * reddit/r/aww
Look at the front page of * Remake a similar mock layout (not the content) using directives 
Don't worry about making things clickable. 
Just make the big sections of the site with directives reddit/r/aww

 If this were all they did, Directives would still be pretty rad. 
 But they actually are capable of a lot more. 
 One of the most powerful aspects of directives is their access to angular's scope object.

If this were all they did, Directives would still be pretty rad. But they actually are capable of a lot more. 
One of the most powerful aspects of directives is their access to angular's scope object.
Another of the properties that can be defined for a directive is the link property. 
The link property is mainly used for attaching event listeners and doing DOM manipulation. 
To achieve this, the value of the link property is an anonymous function that runs when the directive is compiled.
By default, directives share the scope object with their parent controller. */

Link Function (3 arguments)

app.directive('linkEx', function(){  
	return {    
		restrict: "E",    
		template: "<h1>Hello, {{name}}</h1>",    
		link: function(scope, elem, attrs){      
			scope.name = 'James!'    
		}  
	}; 
});              
            

//The link function's main job is to create event handlers and DOM Manipulation (like in jQuery) 
//In the next example, we bind a color property to the scope and use it to change the color of the heading. 
//In addition, we bind a callback function to the mouseover event which changes the mouse cursor.
              
app.directive('colorText', function() {  
	return {    
		restrict: 'E',    
		replace: true,    
		template: '<h1 style="color:{{color}}">Hello World</h1>',    
		link: function(scope, elem, attrs) {      
			elem.bind('click', function() {        
				elem.css('color', 'black');        
				scope.$apply(function() {          
					scope.color = "black";        
				});      
});      elem.bind('mouseover', function() {        
		elem.css('cursor', 'crosshair');     
		 });    
}  
}; 
}); 


/*The link function accepts three arguments. Argument Description 

scope -  The scope of the directive as defined by the directive definition object 
elem  - The jQLite (a subset of jQuery) wrapped element on which the directive is applied 
attrs - An object of normalized attributes on which the directive is applied

This is not an exhaustive list, but here are some more properties that are useful in the creation of custom directives. 

Prop Description templateUrl - Provides a path to an html file instead of writing the template in place 

transclude - Allows a directive to include content from another template 
scope - Gives the ability to modify the scope of the directive
templateUrl - allows us to specify a path to a file for our template 
instead of hard coding a template right in the directive itself. 
This is typically a better practice, especially as the complexity of templates increases.  */            

app.directive('awesomeDir', function() { 
 return {    
 	restrict: 'E',    
 	replace: true,    
 	template: 'partials/awesome-dir.html'  
 	}; 
});              


Directive Transclude
            
//Transclude is a fancy-sounding word that just allows a directive to allow 
//content from another scope to appear with in it. 
//The best metaphor I've ever heard for transclusion directives is to think of them as 
//a picture frame with the directive making up the frame of the picture. 
//The 'foreign' content is what shows up in the center of the picture and it can be included 
//from an entirely different scope.

              
app.directive('yesTransclude', function() {  
	return{    
		transclude: true,    
		template: '<div>An example of more things <ng-transclude> </ng-transclude></div>'    
		replace: true  
	}; 
});              
            

//By default directives share its parent's scope. We don't always don't want that. If our directive needs to add properties or functions for its own use, we don't want those properties and functions polluting the parent scope. We have a couple of options to mitigate this: A child scope - A scope that inherits the parent scope. An isolated scope - A new scope that does not inherit from the parent and exists on its own.
//In order to create these separate scopes, we use the scope property in our directive definition object.              

app.directive('childScope', function() {  
	return{    
		scope: true,    
		template: '<p>This directive will have an inherited scope.</p>'  
	}; 
});              
  ///to make a child scope just add true to scope - no $ // this means that the scope is now inherited not shared
  //it also means that you can have different stuff inside the scope inside the same controller or something...          

Directive scope

//To create a scope that is completely isolated from its parent...              
app.directive('childScope', function() {  
	return{    
		scope: {},    
		template: '<p>This directive will have an isolated scope.</p>'  
	}; 
});              
            
//Isolating the directive's scope makes it easier to plug in multiple locations throughout your app 
//without having to worry about what scope it will inherit and what will be accessible to it. 
//This does not mean there's no way for an isolated scope to communicate with other components and scopes. 
//But making that work is a pretty advanced subject. For now we'll stop here and cover the more advanced stuff on an \
//as- needed basis.

Closures
//Global/Local scope variables inside functions


//Re-make the 'grid of photos' website from week 
//1 Build a 'Picture Box' directive 
//To make things easy, hard code an object on the scope with the image path / 
//caption for each box Iterate the directive on the page using ng-repeat 

//BONUS: Make the directive clickable to do something for each directive 
//(ex. display the caption in an alert box) 

//BONUS++: Integrate ui-bootstrap and get the caption to show up in a modal
//We will provide some app ideas for those who need it. Your app must include: 
//Multiple routes (at least 2) Each view should have its own controller 
//At least 2 services: One that works internally for you app One that pulls data 
//from an external source At least 2 custom directives Inject at least one 
//external dependency (other than ngRoute) Make use of ng-repeat




