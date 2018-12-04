
//PLUGINS


/*Backstreach is the bomb-diggity

 Plugins extend the functionality of jQuery by providing developers with additional methods that can be used on jQuery selections.
 Curb your urge to Google for just a moment and have a look at these lists of jQuery plugins: npm Sitepoint's Popular jQuery Plugins List Unheap
 Some things to keep in mind when deciding whether or not a particular plugin is right for your project: 
 -How many times has it been downloaded? 
 -When was the last time it was updated? 
 -How many open issues are associated with it? 
 -How responsive are its publishers to issues and feature requests?

There are more plugins to display larger versions of images in a modal view than you could shake a stick at, but the original  is still a solid choice. Lightbox
There are plenty of plugins to make creating interactive animations easier. 
One popular (relative) newcomer to the game is . 
is a sister project to jQuery. 
It has a wide variety of user interface functionality that layers on top of jQuery itself. jQuery UI
jQuery UI gives us a ton of options to keep our site as light as possible. 
Using the , we can specify only the interactions, widgets, and effects we actually need. Download Builder

Plugins can be reused to accomplish the same task many times within the same project. 
Plugins can also (obviously) be packaged up and shared with the world to be used in many different projects. 
They're a way to give back to the community.
We can avoid namespace collisions caused by different scripts using the same variable name(s) by wrapping our plugin scripts in an IIFE.
IIFE stands for Immediately Invoked Function Expression. You've probably seen at least one before and accepted that it worked because we told you it did. Now you know what they're for.
If you decide to up your game and publish your jQuery plugin, please note that the jQuery plugin registry now suggests that publishers use npm. Refer to this  for quick and dirty instructions if you're interested in learning more. npm blog post


JQUERY UI
SISTERS? WE'RE CLOSE!
is a sister project to jQuery. It has a wide
variety of user interface functionality that layers on
top of jQuery itself.
jQuery UI
THE DOWNLOAD BUILDER
jQuery UI gives us a ton of options to keep our site as
light as possible. Using the , we can
specify only the interactions, widgets, and effects we
actually need.
Download Builder
JQUERY PLUGINS
Some Plugins ya'll
Alertify.js Swipebox Reveal
Countdown Complexify.js SpaceGallery
Pickadate.js Hook.js Airport
Waypoints HeatMap Skrollr
Pizza ScrollPath 20x20
Lettering.js Bacon! gridster.js
Cycle2 Backstretch Tubular
Raptorize Fool.js BallDroppings.js

CREATING A PLUGIN

WHY CREATE A PLUGIN?
-Plugins can be reused to accomplish the same task
many times within the same project.
-Plugins can also (obviously) be packaged up and
shared with the world to be used in many different
projects.
-They're a way to give back to the community.

PROTECT THE NAMESPACE!

IIFE
We can avoid namespace collisions caused by
different scripts using the same variable name(s) by
wrapping our plugin scripts in an IIFE.
WHAT'S THAT?
IIFE stands for 
/////////////////////////////////////////////////////Immediately Invoked Function Expression. 
You've probably seen at least one before
and accepted that it worked because we told you it
did. Now you know what they're for.
A NOTE ON PUBLISHING
If you decide to up your game and publish your
jQuery plugin, please note that the jQuery plugin
registry now suggests that publishers use npm. Refer
to this for quick and dirty instructions
if you're interested in learning more.
npm blog post
*/
//As we've discussed, one of the biggest problems in JavaScript is the global scope and 
//keeping it as clean as we can. As such, a number of the important techniques and design patterns in JS were developed to address this problem. One such technique is the Immediately Invoked Function Expression (IIFE). It is used to keep the global namespace from being cluttered with all of the variables and functions in a javascript file. When you use an IIFE, all of its variables are private because they are not visible out of the IFFEs scope. Compare these two: vs. Global IIFE
 //vs. Global IIFE

var makeA = function() {  var a = 0;
  return function() {    console.log(++a);  }; };
var a = makeA(); var b = makeA();
a(); a(); b();

              
(function () {  var makeA = function() {    var a = 0;
    return function() {      console.log(++a);    };  };
  var a = makeA();  var b = makeA();
  a();  a();  b(); 

})();              
            
//         In JavaScript, every function, when invoked, creates a new execution context. Because variables and functions defined within a function may only be accessed inside (but not outside) that context, invoking a function provides a way to create privacy.
//Consider this:
              
function makeCounter() {  var i = 0;
  return function () {    console.log(++i);  } }
var counter1 = makeCounter(); var counter2 = makeCounter();
counter1(); // > 1 counter1(); // > 2 counter1(); // > 3 counter2(); // > 1 console.log(i); // > Reference Error.              
            
//Because of this, each counter variable gets it's own scoped variable i. DEMO
//,,)( Because a function defined like this can be invoked by putting () after the function name, like foo(), 
//and because foo is just a reference to the function expression function() { /* code 
//It makes sense that we should be able to invoke a function expression directly by following it with parentheses, right?
function(){}()
,,)(


//iffy?
(function($){
$.fn.greenify =(function(){
	this.css('color', '#BADA55')
	return this;
});
})(jquery)

//There's a bit of a catch! Whenever the interpreter sees the function keyword it assumes it's looking at a f u n c tio n d e cla r a tio n which requires a name. The fix is relatively simple. 
//If you wrap the function expression in parenthesese it will work.
(
	function() { console.log('hi mom'); })() DEMO
//Let's review what function declarations as opposed to function expressions.
//A Function Declaration defines a named function variable without requiring variable assignment. 
//Function Declarations occur as standalone constructs and cannot be nested within non-function blocks.
// It’s helpful to think of them as siblings of Variable Declarations. Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”. i.e.
function sayHi() {  console.log('hi'); }
//A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). 
//Functions defined via Functions Expressions can be named or anonymous. Function Expressions must not start with “function” (hence the parentheses around the self invoking example below)
//anonymous function expression 
var a = function() {    return 3; }
//named function expression 
var a = function bar() {    return 3; }
//self invoking function expression 
(function sayHello() {    alert("hello!"); })();
,,)( 
//IIFEs are a tricky subject to wrap your head around so let's go through it one more time to make sure we have this concept down.
// Remember, an IIFE is an anonmyous function that is invoked as soon as it's created. Let's look at each of those pieces one at a time.
//We've established that IIFEs are an anonymous f u n c tio n e x p r e s sio n 
(-FE).
function () {  //remember how this didn't work before? }();
// Remember to get the interpreter to differentiate between function declarations and 
//function expression the function can't start with the function keyword. Hence, the parentheses. 
//Once we have wrapped it in a set of parentheses, it will be in v o k e d im m e dia t ely (II-).
//get js format
// fn is a object that holds all the jQuery Actions
(function(){  //adding the first set of parenthesis })();

//iffy
(function($){
$.fn.greenify =(function(){
	this.css('color', '#BADA55')
	return this;
	};
})(jquery);

if this is working then this should working

	$(document).ready(function(){
		this.greenify
	})





INSTRUCTOR DEMO
WALK-THROUGH: CREATING A
PLUGIN
CREATING A PLUGIN
The code creates a jQuery object of all <a> elements
using $() , then calls jQuery's css function to set the
text color for all <a> elements.
$('a').css('color', 'red');

CREATING A PLUGIN
This css() function is stored in jQuery’s $.fn object,
where we will also be storing the function (or
functions) that make up our plugin.


$.fn.greenify = function(){
this.css('color', 'green');
};
What does this code sample do?

In jQuery, multiple actions can be linked (or chained)
on one selector, which is accomplished by having all
jQuery methods return the original jQuery object
again

$.fn.greenify = function(){
this.css('color', 'green');
return this;
};


If we use other JavaScript libraries with jQuery, we
may not be able to use the $ variable; we have to
use jQuery.noConflict() .
// Conventional syntax
$('#some-id').click();
//No-conflict syntax
jQuery('#some-id').click();
CREATING A PLUGIN
Our plugin assumes that $ is an alias for jQuery, so
we have to take another step in order to use the $
alias and work well with other plugins.
CREATING A PLUGIN
We place all of our plugin code in an immediatelyinvoked
function expression (iife or 'iffy') to which we
pass jQuery as a parameter named $ .
CREATING A PLUGIN
Immediately invoked functions also allow us to create
local variables without having to worry about
namespace collisions.
(function($){
$.fn.greenify = function(){
this.css('color', 'green');
return this;
};
})(jQuery);

CREATING A PLUGIN
Or, since the this is already a jQuery object, we can
also just return it directly.
(function($){
$.fn.greenify = function(){
return this.css('color', 'green');
};
})(jQuery);

CREATING A PLUGIN
Since most jQuery objects contain multiple DOM
elements, if we want to modify specific attributes of
all of these elements, we need to loop through them.
(function($){
$.fn.changeThings = function(){
return this.each(function(){
});
};
})(jQuery);
LAB 14


BUILD A PLUGIN
INSTRUCTIONS
Create your own jQuery plugin based on the steps
we've discussed.
1. Determine what task(s) your plugin will make
easier.
2. Add your method(s) to jQuery.
3. Return a jQuery object so that other methods can
be chained with yours.
Remember to protect the namespace!

FIGURE IT OUT
Choose a JavaScript library 
and use it to create a
widget that can be added 
to a web page.

EXAMPLES
Leaflet
ChessboardJS
Bounce.js
Please
Shepherd




