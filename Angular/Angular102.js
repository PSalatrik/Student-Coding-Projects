

FILTERS


//Filters format the value of an expression for display to the user. 
//Filters can also be used to do in-client searches to... well... filt e r a data set.
//Use the pipe operator in an Angular expression to use a filter on it.              

<div ng-init="theWho=["Roger Daltry", "Pete Townsend", "Keith Moon"]"> 
 	<h3>Members of The Who in uppercase</h3>  <ul>    
 		<li ng-repeat="member in theWho ">{{ member | uppercase }}</li>  
 </ul> </div>              
            
//DEMO
 //Filter Description uppercase Uppercases the output lowercase Lowercases the output orderBy will reorder the data based on 
 //a pre-determined property filter allows a data set to be fuzzy searched limitTo will limit the iterations to a specified number

              
<div ng-init="theWho=['Roger Daltry', 'Pete Townsend', 'Keith Moon']">  
	<h3>Members of The Who in alphabetical order</h3>  <ul>    
			<li ng-repeat="member in theWho | orderBy:member">{{ member }}</li>  
	</ul> 
</div>              
                          
<h3>Members of The Who in reverse alphabetical order</h3> 
	<ul>  <li ng-repeat="member in theWho | orderBy:member:true">{{ member }}</li> 
	</ul>              
            
//DEMO
//The item intialized in the ng-init is an array of objects. We can access the individual object properties in the array using dot notation. 
//We're using ng-model to capture the search term. The search is fuzzy. It filters on name and instrument.

ng-model = []
ng-init //used for testing
ng-repeat ="beatle in beatles"
ngInit // used for testing
ng-app (the whole thing - goes in the body)
ng-controller ($scope)
ng-class
ng-hide


CONTROLLERS

/*Controllers handle the business logic behind views. These are the primary means of controlling the UI.
Their primary role is to expose variables and functionality to expressions and directives.
Our Grateful Dead example using controllers instead of ngInit. 
Again, this example is too big for the slide. DEMO
Most important: I am actually importing an old version of Angular to make this work. 

In Angular 1.3+, defining a simple function is no longer sufficient to define a controller. 
I'm using the older version to demonstrate that a controller is just a function. 
Everything else works exacty as before except our JavaScript is now abstracted into our own 'file'. 
Notice in the controller function we are passing in $scope,*/

$scope 


/*now we can finally talk about this.
Scope is Angular's 'glue object' that marries the variables and properties on a controller to the view.

Allows us to use data in the view / values, 
6&23( In order to take advantage of the Scope object we must inject it.*/

function SimpleController($scope) {  
	$scope.theDead = [    
	{name: 'Jerry Garcia', instrument: 'guitar, vocals'},    
	{name: 'Bob Weir', instrument: 'guitar, vocals'},    
	{name: 'Ron \'Pigpen\' McKernan', instrument: 'keyboards, harmonica, vocals'},    
	{name: 'Phil Lesh', instrument: 'bass, vocals'},    
	{name: 'Bill Kreutzmann', instrument: 'drums'}  ]; }              
            
           /* This is Angular's version of Dependency Injection.


Dependency Injection is a concept in software design that allows for the components of a software project to be loosely coupled. 
This makes them easier to test and change without affecting the other modules that depend on them.
In Angular, software components (modules, services, and directives) are injected by passing 
them into the constructor function of whatever it is you're instantiating. 
Note: This is the conventional way to define a controller. */

var app = angular.module('myModule', []); // This is declaring a module. More on this in a moment

app.controller('myController', function($scope){  // controller logic });              
            
//First we create a module, which we then attach our controller to. We will go into more detail about modules next.
//We register a controller with our new module and give it a constructor function. 
//This function will be run whenever a view that uses this controller is loaded.

 //The HTML         
<div ng-app="myModule" ng-controller="myController">  <ul>      <li ng-repeat="beatle in beatles">{{beatle}}</li>  </ul> </div>            
                      
var app = angular.module('myModule', []); // This is declaring a module. More on this in a moment

app.controller('myController', function($scope){ 
 $scope.beatles = ['John', 'Paul', 'George', 'Ringo']; });            
 

 //different style - samething

 function myController($scope){
 	$scope.beatles = ['John', 'George', 'Paul', 'Ringo']
 }



/*Remake the shopping list program from before, this time using Angular directives, filters and controllers. 
//Create an HTML page with two input fields (Item and Price) and an "add" button. 
//When the user puts an item name and price in the fields and clicks add: 
//The info from the input fields is added to the list. The total updates. Format money values as currency. 
List should be filterable by name and price.
127(6 Use separate files for HTML and JavaScript. You'll need to make a module.
// Use the line from the previous examples. I have intentionally not given you everything you need to complete this lab. Have fun figuring it out, padawan learners.

Create a simple Angular app that talks. A lot. Work in Pairs Create a page with four buttons: Words, More Words, Words with Decorations, More word with Decorations Each button should do the following: Words - add a word at random from a word list you create Words with Decoration - add a word at random from the list of words with some kind of text decoration (underline, random font color / size, animation) More Words - add a short phrase from a phrase list you create More Words with Decorations - add a phrase at random from the list of phrases with some kind of randomized text decoration Some new features to try to incorporate. ng-class, $interval / $timeout, ng-hide / ng-show,
Bonus Points! Bonus: Constrain the random-ness of the text decorations to adhere to some level of cohesive design Bonus++: Try to craft the random strings in such a way that they will make a weird kind of sense Double Bonus++: Use an interval to automatically 'press the buttons' on a set timer Super Double Plus Bonus GO! Write a custom filter and use it in your application
