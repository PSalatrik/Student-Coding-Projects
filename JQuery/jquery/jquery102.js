JQUERY EVENTS / METHODS


///Functions as arguments is using functions inside (paramaters).

.click(function(){

})

///Functions stored in variables 

var name = Function(){
	return "something";
}

//return a function from a function
function doEveningChores(chores){
	chores.forEach(function(chore))
}
doEveningChores()() --- looks weird but works because DEC is a referance to feed dog.



.READY

//JavaScript, jQuery needs the browser to construct the DOM before it can select anything.
//We can place our script tags at the very end of the body of our HTML. 
//That way, all the HTML has already been loaded before the scripts are run. Wrapping our code in the .ready() 
//method means the browser will still wait for the DOM to load before running any scripts, regardless of where they're placed.              
$(document).ready(function(){  // JavaScript-y things here });              
            
//We can simplify this method by using a shorthand one! 
//Code inside this very common shorthand method will be run automatically once the page loads.              
$(function(){  // JavaScript-y things here });              
            
//Other options include relying on the load event (if your script depends on other assets) 
//or simply placing scripts at the very end of the body of your HTML. 
//In the latter case, developers will often still use the .ready() method in case the script tag is moved later.

.HTML

//The .html() method retrieves the HTML inside the first element matched by the selector. This includes any descendants.
// It can also be used to update that content.

<div class="demo-container" >  <div class="demo-box" >Demonstration Box </div></div>

$("div.demo-container").html(); 

The above would return:
<div class="demo-box" >Demonstration Box </div>


.text() 

//.text()method retrieves the HTML inside the first element matched by the selector. 
//This also includes any descendants. It can also be used to update that content.
	$( "div.demo-box" ).text("New Demo Box Text!"); 

The above would change the text from "Demonstration Box" to "New Demo Box Text!".


UPDATING CONTENT

 .html() and .text() //methods can not only retrieve content, but update it as well.
 .replaceWith() // method replaces matched elements with new content and returns the replaced elements.
 .remove() //method removes any elements in the matched set.


CREATING NEW CONTENT 
//The .before() method inserts content before the matched element(s).              
$( ".inner" ).before( "<p>Test</p>" );              
            
//The .after() method inserts content after the matched element(s).              
$( ".inner" ).after( "<p>Test</p>" );              
            
//The .prepend() method inserts content inside the matched element(s) immediately after the opening tag.              
$( ".inner" ).prepend( "<p>Test</p>" );              
            
//he .append() method inserts content inside the matched element(s) immediately before the closing tag.              
$( ".inner" ).append( "<p>Test</p>" );              
            

EFFECTS            
//Effects generally enhance the interactive components of our sites. 
//These days, we can accomplish many of the same tasks with pure CSS, but certain older browsers don't 
//play nicely with our shiny CSS3 animations.
//When an element is hidden, other elements may move to take up the empty space left in the page. 
//When an element is shown, others will move to make room.



TOGGLING
//BRING IN / BRING OUT
//Methods with toggle in their name will look at the current state of the 
//selected element(s) and switch to the opposite.

  $(document).ready(function(){
  	$('div').click(function(){
  		$(this).toggle();
  	})
  })


.hide() //Hide the matched elements. 
.show() //Display the matched elements. 
.toggle() //Display or hide the matched elements.

CUSTOM 

.animate() //Perform a custom animation of a set of CSS properties. (GO DOWN THE RABBIT HOLE)


$("").animate({
	"border-radius: 50%",       
	"font-size: 10em",
	"height: 25%", })

animate(properties[, duration][, easing][, callback])
animate(properties[, options])

properties (Object): A hash containing the values that should be reached at the end of the animation.
duration (Number|String): The duration of the effect in milliseconds or one of the predefined strings: “slow” (600ms), “normal” (400ms), or “fast” (200ms). The default is “normal”.
easing (String): The easing function name to use when performing the transition. The default value is “swing”.
callback (Function): A function to execute when the animation is completed for each animated element.
options (Object): A hash containing a set of options to pass to the method. The options available are the followings:
//-takes a object as it's argument
//-keep them short

//.delay() Set a timer to delay execution of subsequent items in the queue. 
//.finish() Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements. 
//.stop() Stop the currently-running animation on the matched elements.

 FADE EFFECTS
//.fadeIn() Display the matched elements by fading them to opaque.
// .fadeOut() Hide the matched elements by fading them to transparent. [duration], [complete]
// .fadeTo(250  , .15 ) Adjust the opacity of the matched elements. (two arguments by default)
//.fadeToggle(   ,   ) Display or hide the matched elements by animating their opacity.
			//fadeToggle(2500) --- goes in between two fades
 SLIDING EFFECTSS
//.slideUp() Hide the matched elements with a sliding motion. 
//.slideDown() Display the matched elements with a sliding motion.
// .slideToggle() Display or hide the matched elements with a sliding motion.



EVENTS METHODS

//jQuery's event methods are used to cause certain code to take effect 
//when the user interacts with the browser. 
//This code is called a handler because it tells JavaScript how to handle the event.

//.on

//As of jQuery 1.7, the .on() method is all we need to attach handlers to events. 
//Previously, we would've used different methods for each type of event we wanted our code to respond to.
//similir to addEventListener
//First, we need to select the affected element(s).              
$('button')              
            
//2. We'll use the .on() method to handle the event.              
$('button').on()              
            
//3. The first argument we pass to the .on() method is the event we want to respond to.              
$('button').on('click')              
            
//The second argument we pass to the .on() method is the code we want to be triggered 
//by the event in the form of either a named or anonymous function.              
$('button').on('click', function(){  console.log('You clicked a button!'); });              

$().click(function(){


addClass
removeClass

excersize            
//Practice using jQuery methods on a simple web page. 
//Create a simple HTML page that includes an unordered list. 
//Each < li > should fade to 0.25 opacity when the user hovers over it. 
//Each < li > should change background colors when clicked on. 
//When the user clicks on a < li >, the word 'Clicked!' should appear inside it.
// Changes triggered by a click should change back when the < li > is clicked again. 

//Apply what we've learned about effects and events to enhance your shopping list app.
//enhance your shopping list app.


