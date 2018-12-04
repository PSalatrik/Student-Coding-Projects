 
//JQUERY

// jQuery is an extremely popular JavaScript library (read: huge collection of functions) that makes writing JavaScript easier and faster.
// jQuery is: small fast feature-rich cross-browser extensively documented extremely popular
//We care that jQuery is kept lean and mean because it's going to make a smaller (negative) impact on our sites' performance.
//jQuery makes the common tasks many web developers have to accomplish available out of the box. 
//fade elements in and out add/remove elements handle events change attribute/property values animation
//jQuery uses automatic feature detection to shield the developer from the many inconsistencies in the way different browsers approach tasks.
//A huge plus of using jQuery is that it has very thorough, clear . documentation
//The enduring popularity of jQuery means that it has an enormous following and tons of people and online resources to learn from. 
//If you run into a problem or question, chances are that someone has already found a solution and written in down on the internet.
//jQuery is still just JavaScript!
//There are a couple of ways that we can include jQuery in our projects: 

//CDN
//A content delivery network (CDN) is a system of distributed servers (network) that deliver webpages and other
 //Web content to a user based on the geographic locations of the user, the origin of the webpage and a content delivery server.

//Download the library and store it locally in your project folder Link to a live version of the library via CDN
 //download CDN stable can change bloats your site makes a call every time you refresh
//For active development, it's fine to link. For production sites, I usually play it safe and source jQuery locally.
//1. Go to 2. Click the link Download the uncompressed, development jQuery 1.11.3. This takes you to a raw text file. 3. Select All > copy > paste into empty file > save As ‘jquery-1.11.3.js’ 4. Place the saved file into a ‘lib’ folder in your site project jquery.com/download
//Or just link to a hosted CDN in a script tag on your page. Both script tags link to a working jQuery file.              

<script src="lib/jquery-1.11.3.js"></script> <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>              
            

///Selectors

Anything look familiar?
              
var divs = $("div"); // All divs on the page
var happyThing = $("#happy"); // Element with id "happy"
var rounds = $(".roundedCorner"); // Elements with class "roundedCorner"              
            
//That's right! jQuery allows us to use the same selectors we've already used in our CSS. 
//Selecting elements this way is faster, more accurate, and requires less code than other methods.
//jQuery even adds CSS-like  to make selecting elements even easier. 

///FILTERS

$( "li" ).filter( ":even" ).css( "background-color", "red" );

// jQuery objects are typically stored in variables. 
//Variables containing jQuery objects conventionally begin with "$" to make it clear that they're jQ u e r y objects rather than DOM 
//elements.              

$('img').fadeTo('slow', 0.5); //if you need to reference later - store it like...

var $img = $('img'); $img.fadeTo('slow', 0.5);              
            
//What was that dollar sign thingy jquery is money($)
//$() is a tiny piece of jQuery magic (read: function) that turns whatever is inside the parentheses into a jQuery object.
//$'< .ready() is a jQuery method which tells a script to wait to execute until an HTML document has loaded.            

$(document).ready(function() {  
	('#header').slideDown('slow'); });  




$(selector).action();              
            
//jQuery makes it simple to accomplish a huge number of common tasks, such as updating elements' attributes or CSS 
//(and pretty much anything else).              

var img = $('#myPicture'); 
img.attr('src'); 
img.attr('src', 'http://myPictureLivesHere.com');


img.css('width'); 
img.css('width', '200px'); 


$(document).ready(function(){
	var width = $('body').css('width');
});  

$(document).ready(function(){
	var width = $('body').css('width');
});


$(body).append(width);           
            
// We can use dot notation to run several methods on the same selector.            
///Chaining

$('.hideBox').hide().delay(1200).fadeIn(800);            
          

//Excersize


//git escape - esc :q!

// Complete the seat reservation app by using JavaScript to make it interactive. 
//Users should be able to choose an available seat to reserve and enter their information into a form. 
//Submitting this form should create an object that represents that user and is associated with that seat. Use jQuery selectors and actions in your JavaScript. Group members should make a branch for the feature they're working on.
//On hover (for reserved seats), make the associated user's information appear on the screen. 
//Go back and refactor the work you've already done once you've gotten the basic functionality worked out! How can you DRY up your code?
 

 //Create a form with at least five separate inputs. 
 //Hide all but the first and show the rest only when the previous input is in focus.

//JQUERY ACTIONS

bind()	//Attaches event handlers to elements
blur()	//Attaches/Triggers the blur event
change()	//Attaches/Triggers the change event
click()	//Attaches/Triggers the click event
dblclick()	//Attaches/Triggers the double click event
delegate()	//Attaches a handler to current, or future, specified child elements of the matching elements
die()	//Removed in version 1.9. Removes all event handlers added with the live() method
error()	//Deprecated in version 1.8. Attaches/Triggers the error event
event.currentTarget	//The current DOM element within the event bubbling phase
event.data	//Contains the optional data passed to an event method when the current executing handler is bound
event.delegateTarget	//Returns the element where the currently-called jQuery event handler was attached
event.isDefaultPrevented()	//Returns whether event.preventDefault() was called for the event object
event.isImmediatePropagationStopped()	//Returns whether event.stopImmediatePropagation() was called for the event object
event.isPropagationStopped()	//Returns whether event.stopPropagation() was called for the event object
event.namespace	//Returns the namespace specified when the event was triggered
event.pageX	//Returns the mouse position relative to the left edge of the document
event.pageY	//Returns the mouse position relative to the top edge of the document
event.preventDefault()	//Prevents the default action of the event
event.relatedTarget	//Returns which element being entered or exited on mouse movement.
event.result	//Contains the last/previous value returned by an event handler triggered by the specified event
event.stopImmediatePropagation()	//Prevents other event handlers from being called
event.stopPropagation()	//Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event
event.target	//Returns which DOM element triggered the event
event.timeStamp	//Returns the number of milliseconds since January 1, 1970, when the event is triggered
event.type	//Returns which event type was triggered
event.which	//Returns which keyboard key or mouse button was pressed for the event
focus()	//Attaches/Triggers the focus event
focusin()	//Attaches an event handler to the focusin event
focusout()	//Attaches an event handler to the focusout event
hover()	//Attaches two event handlers to the hover event
keydown()	//Attaches/Triggers the keydown event
keypress()	//Attaches/Triggers the keypress event
keyup()	//Attaches/Triggers the keyup event
live()	//Removed in version 1.9. Adds one or more event handlers to current, or future, selected elements
load()	//Deprecated in version 1.8. Attaches an event handler to the load event
mousedown()	//Attaches/Triggers the mousedown event
mouseenter()	//Attaches/Triggers the mouseenter event
mouseleave()	//Attaches/Triggers the mouseleave event
mousemove()	//Attaches/Triggers the mousemove event
mouseout()	//Attaches/Triggers the mouseout event
mouseover()	//Attaches/Triggers the mouseover event
mouseup()	//Attaches/Triggers the mouseup event
off()	//Removes event handlers attached with the on() method
on()	//Attaches event handlers to elements
one()	//Adds one or more event handlers to selected elements. This handler can only be triggered once per element
$.proxy()	//Takes an existing function and returns a new one with a particular context
ready()	//Specifies a function to execute when the DOM is fully loaded
resize()	//Attaches/Triggers the resize event
scroll()	//Attaches/Triggers the scroll event
select()	//Attaches/Triggers the select event
submit()	//Attaches/Triggers the submit event
toggle()	//Removed in version 1.9. Attaches two or more functions to toggle between for the click event
trigger()	//Triggers all events bound to the selected elements
triggerHandler()	//Triggers all functions bound to a specified event for the selected elements
unbind()	//Removes an added event handler from selected elements
undelegate()	//Removes an event handler to selected elements, now or in the future
unload()	//Deprecated in version 1.8. Attaches an event handler to the unload event
.html() = //retrives the html inside the first element matched by the selector.

*/





