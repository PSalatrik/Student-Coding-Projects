

/*

///MODULES

A container for the different parts of an app including controllers, services, filters, directives. 
Modules are the building blocks that apps are made of. 
A module's primary job is to serve as place for the pieces of an app to be registered.
We've seen this before. Let's look in more detail              
var app = angular.module('myCoolModule', []); // A module with no dependencies.
var app = angular.module('myOtherCoolModule', ['ngRoute']); // A module with one dependencies              
            
The difference between creation vs. retrieval  */            
var app = angular.module('myCoolModule', []); // This syntax creates a module. It's sort of like a setter*.
var app = angular.module('myCoolModule'); // This syntax retrieves an already created module. It's a getter.
var app = angular.module('myOtherCoolModule'); // This will throw an error because this module hasn't been created.              
            
//Once you have defined a module, you can add other pieces to it such as 
//controllers, services, custom filters, or directives.

              
var app = angular.module('myCoolModule', []);
app.controller('myCoolController', function(){  // cool controller stuff });
app.factory('myCoolFactory', function(){  // cool factory stuff });              
            

//ROUTE

//In a multipage site we can link to different pages using the same anchor tags and href attributes. 
//For a single page application, we need a way to tell the browser to load different content. 
//We can do this with routing.
//Originally routing was built-in to Angular. Later, it was decided that it should be maintained as its own module and repository. So we must link to it and include it as a module dependency in order to use it.


Like other stuff, you can download it or use a CDN              
<script src="lib/angular-route.js"></script>              
                          
var app = angular.module('myModule', ['ngRoute']);              
            
ngView is a directive that goes with the ngRoute service. It will include a rendered template into the main layout (index.html). Every time the current route changes, the included view changes with it according to the configuration of the $route service.
ngView
              
<div ng-view=""></div>
<!-- or -->
<ng-view></ng-view>              
            
For our routes, we will add a config object to our module. 
Inside this config object we will inject the $routeProvider to define our routes and define which controllers are used with what views. The when() function takes a route name as a string and an object with the route's properties such as controller and templateUrl. The otherwise function defines what the router should do for unknown routes. DEMO

              
var app = angular.module('gratefulDead', ['ngRoute']);
app.config(function($routeProvider) {  $routeProvider    .when('/',      {        controller: 'SimpleController',        templateUrl: 'partials/view1.html'      })    .when('/view2',      {        controller: 'SimpleController',        templateUrl: 'partials/view2.html'      })    .otherwise({ redirectTo: '/' }); });              
            
9,(:6
9,(:6 A view is the visible part of the webste (the DOM). When using a router like ngRoute, views are usually partial (incomplete) snippets of HTML that are injected into the viewport as needed.
9,(:6 We can link to these snippets of html in our router configuation using the templateUrl property. We can also define templates inline using the template property but this is usually not recommended for anything but the simplest templates.
/$%
02'8/(6$1'5287,1*
&$7'2*
,16758&7,216 Create a single page app with two views. Create a new project. (index.html, script.js, two partial views) Define a module & controller for this project. Remember to download and include ngRoute. Define two separate routes, and an otherwise() route. Set up a shell page with navigation for moving between both views. In one route, show a picture of a dog. The other, should show a cat.
%2186 Bonus! Add two more routes that feature two more images of two more different species. i.e. cat- dog-ferret-walrus Bonus++ Add the ability to catch errors in your routes. If they user tries to visit a nonexistant page, they are redirected to the home page (cat). Double Bonus++ Add a custom 404 page. Suggestion: Fail Whale

6(59,&(6
6(59,&(6 Services are reusable components that are separated from views and can be used across multiple controllers and views. There are lots of ways to define services (they are just functions). For now we will define them simply as functions that return objects. We will look at some more conventional patterns later that can also be used.
$127(21)$&725,(6 There is a subtle difference between services and factories. You may hear the word "factory" thrown around, but we'll get into the difference between the two later in the course because they do almost the same thing. We'll start out by focusing on services.
%8,/7,16(59,&(6 There are also a number of built-in services. One of the most useful is $http which provides us access to the browsers XMLHttpRequest object and allows us to make AJAX calls to remote sources.
6(59,&(6
              
// service.js var app = angular.module('myModule');
app.factory('myService', function(){  // service logic });              
                          
// controller.js var app = angular.module('myModule', []);
app.controller('myController', function(myService){  // controller logic using myService });              
            
DEMO

Make a web application that allows a user to enter information in one view and see all of that information displayed and formatted in another.
Create two views: A form with inputs, and a display page. Set up routes for both views, provide some navigation solution to move between each. In the form view, ask the user for at least two pieces of data about a single item (i.e. name / instrument in our band member example). Each view should have their own controller When the user submits the form data, persist it so that it may be used for multiple controllers. In the display view, format and display the data.
One of the most common operations for web applications is to make API calls to external sources. This is commonly called AJAX requests, though that name is not entirely accurate anymore (we're using JSON mostly now).
,16758&7,216 Expand the last lab to include external data. Use the $http service to pull in external data. Use the data from . Display the data somewhere in your information view. You may need to use ng-repeat to display multiple things. You'll need to get used to parsing through the body of the json to get to the data you want. https://twlaas.herokuapp.com/ ',6&/$,0(5 Reddit is on the internet and the internet can be a vile place. I think the front page should be okay but I'm just warning you there may be some potty language / tasteless humor / not awesome stuff.