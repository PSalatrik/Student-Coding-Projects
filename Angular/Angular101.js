Intro to Angularjs


/*Angular is a front-end MVC JavaScript framework intended to simplify making robust web applications. 
The overall ethos of the Angular project is 'What if HTML had been developed today from scratch?'. 
To that end, much of Angular's functionality is geared toward extending HTML's natural capabilities to 
make it better suited to support modern web applications.

SPA - singel page app
A relatively recent trend in web design, single page apps have become the standard as opposed to the exception. 
In general, a SPA can be characterized by having an outer 'shell' 
that serves as the header and navigation for the site while the content of the page changes as 
different parts of the site are visited.
It's a great big javascript file similar to jQuery


Model View Controller

All the data that makes up a user profile (Model)
What the user sees - (View)
The logic that brings it all together - (Controller)

MVC is a design pattern that has become ubiquitous in the last few years. 
It describes the relationship between the various parts of a modern web app. 
MVC has evolved into a number of other sub-types (Model View View-Model, Model View Presenter, Model View *) 
but the basic concept is the same across each of these evolutions.
Model: the data View: what the user sees Controller: the logic that brings it all together

' http://angularjs.org Angular can also be referenced remotely via a number of CDNs.
Pop this in at the end of the body of your HTML.*/

<script src="lib/angular.js"></script>              
            
//Directives are Angular's way of extending native HTML by creating custom HTML elements attributes.
//The canonical first Angular example
              
              <DIV NG-APP="">

<div ng-app="">  <input type="text" ng-model="things">//Take the thing (input) in the text box and put it in the things
  <h1>{{things}}</h1> //Angular expression //(two way) data binding the model name has to mach and will 
</div>              

/*            
Directive Description ngApp Declares an element and all its children as an angular app ngModel 
Binds a form control to a property on the scope* * - More on this later
You'll notice that we refer to Angular directives in a couple of different ways. 
You can check the  for a more detailed explanation, but this is largely because HTML is case-insensitive. 
We'll use the denormalized form to refer to directives in the DOM. Angular docs Normalized: case-sensitive, camelCase (e.g. ngApp) 
Denormalized: lower-case, dash-delimited (e.g. ng- model)


DATA BINDING

Data binding is one of the key features that make Angular so powerful. 
You can set certain properties and tell Angular to 'watch' those properties. 
Whenever those properties change during program execution, 
the view updates them on the view automagically. We saw this at work in our very first Angular demo.


Angular Expression

The double curly braces {{ }} from the example are Angular's way of knowing what it needs to evaluate. 
This is a relatively deep well, but suffice it to say that o n e of the things an expression will do is scan the scope (
more later, I swear) 
for any variables of that name and do something with it.
or string operations
We can evaluate mathematical expressions as well.              
*/
<span>  1+2 = {{1+2}} </span>              
            
              
<span ng-init="mood='happy'">  My mood is {{ mood + "!" }} </span> //I'm aware we haven't talked about ng-init yet. 
//Don't freak out we will. -->              
            
//We can evaluate logical operators.
              
<span> true || false  :  {{ true || false}} <br> false || false  : {{ false || false  }}
 <br> true && false  : {{ true && false  }} <br> !true  : {{ !true  }} </span>              
            

/*Code with me! 
1. Set up a new project. (index.html) 
2. Add Angular to your project. (download or CDN) 
3. Add an ngApp directive to your app. 
4. Add two text input fields to your page. 
5. Add an ngModel directive to each input tag, giving them values of "noun" and "adjective". 
6. Add a heading tag that uses two Angular expressions, one for each model. 
7. Compose a simple sentence that allows the user to add words to the sentence by filling out the text inputs.

Demonstrate a basic understanding of Angular data binding. 
Create another new project and include Angular Add several variations of our Mad-Lib example from the previous example 
(Data bound elements) At least 3 different usages of Angular's expressions: Math String operations Logical operators

ngRepeat !!!!NG REPETE is maybe one of the most awesome things about Angular. */

  <div ng-init="beatles=['John', 'Paul', 'George', 'Ringo']">
  
  <h3>Names of The Beatles</h3>    <ul>      <li ng-repeat="beatle in beatles">{{beatle}}</li>    </ul>  </div>
              
            
DEMO
Directive Description ngRepeat The ngRepeat directive instantiates a template once per item from a collection. 
ngInit 
The ngInit directive allows you to evaluate an expression in the current scope.
List the members of your favorite band using ngRepeat. Set up a new project (index.html) and add Angular. Add an ng-app directive to your app. Add a container element with an ngInit with the names of your favorite band as an array of strings. Use ngRepeat to repeat a template for each item in the array.
Use something other than list items for your template. You can use ngRepeat to iterate anything. Be ready to demo!

<div ng-init="Beatles = [
   {name: 'George', instrument: 'guitar' }, 
   {name: 'Paul', instrument: 'bass' }, 
   {name: 'John', instrument: 'guitar'},
   {name: 'Ringo', instrument: 'drums'}
  ]">
    
    <ul>
      <li ng-repeat="Blues Brothers"><span class='member'>{{beatle.name}}</span> plays the <span class='instrument'>{{beatle.instrument}}</span></li>
    </ul>
  </div>









