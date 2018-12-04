

			//MORE ON FUNCTIONS

//Functions are the special sauce that makes JavaScript such a cool language. 

//Functions in JavaScript are first class objects, meaning: 
//A function is an instance of the Object type 
//A function can have properties and has a link back to its constructor method 
//You can store the function in a variable 
//You can pass the function as a parameter to another function 
//You can return the function from a function. 
// You can store a function in a variable. Let's look at a few of these.

              
function feedDog() {  return "Kibble, canned food, and water"; }
var eveningChores = feedDog;
eveningChores();


// Or you can do this directly with an anonymous function
// You can pass a function to a function as a parameter. 


//function expression:

var sayHi = function(){
	console.log("Hi")
}

sayHi();

//Test Driven Software - Try Jasmine - Mocha - Saturdays in Ann Arbor - code retrete by the dozen
// Arange (given)- Act(when) - Assert(then)



function doEveningChores(chores) {  
	chores.forEach(function(chore){    
		chore();  
	             
            
// WTF was that forEach() thinger?! Glad you asked. Not only can you pass functions as arguments, 
//you can define them in-line like any other data type literal. forEach is a method on the Array object that takes a function as an argument. That function is called on each element of the array receiving it as an argument. ...you can do the same with objects and arrays
// You can return functions from functions              

function tonightChores(){  return feedDog; }
var tonight = tonightChores(); tonight();              
            

            //VARIABLE SCOPE
//A variable declared within a function has local scope. It is only available to the function in which it's declared.
//Variables with global scope are declared outside of a function. 
//They can be accessed anywhere, but can cause problems with bigger, more complex applications. 
//They (GV) take up memory and may cause namespace conflicts. (Bad things happen when two entirely separate variables have the same name.)
// Variables can have a global or a local scope. 
//Variables in a local scope can access global variables. Global variables cannot access local variables.

              
var one = 1;
function doStuff() {  
	console.log(one);  
	var meaningOfLife = 42; 
}
doStuff(); console.log(meaningOfLife);
// > 1 // > Syntax error: meaningOfLife is not defined.              
            
//( Key difference - there is no block level scoping What would you normally expect the output of this code to be?  
	//!!!!!!!!ORDER MATTERS IN THE LINKS             
var meaningOfLife = 0; 
function doStuff() {
  console.log(meaningOfLife);  if(true) {    var meaningOfLife = 42;  } }
// > undefined (Note: not a syntax error and not 0? Why?)              
 
 

	//THE DOM

//The document object model (DOM) is an interface which allows programs and scripts to dynamically access and 
//update the content, style and structure of an HTML document.
//The DOM is a W3C (World Wide Web Consortium) standard and includes the Core DOM, XML DOM, and HTML DOM. 
//The HTML DOM is a standard model for HTML documents and defines how to get, change, add, or delete HTML elements.

//The DOM is a tree structure and identifies objects (elements / tags) using NODES 

//HTML Element Objects - all cut from the same mold

//body element 
var bodyNode = document.body;
// html element 
var htmlNode = document.body.parentNode;
// Array of all bodies children 
var childNodes = document.body.childNodes;              
            
//The DOM exposes a number of methods that are used to manipulate the structure of a page. 
//Open any web page in your browser, open your developer tools, and run this command in the console.
// Each web page loaded in the browser has its own document object.              
document.write('I changed the whole page! #rekt');     ///this edits any html page         
            
//It’s possible to find elements on the HTML page by parent, sibling, or child node, but that’s time consuming and will make you crazy.
//'20 The better method is to use some of the provided DOM methods by tag, class, or ID.              

<li class="food">Pizza</li> 
<li class="food">Sushi</li> 
<li class="food" id="favorite">Schwarma</li> 
///HTML = Structure, CSS = Style, Javascript = behavier 
//THIS IS HOW WE GET THE STUFF = (get a list of DOM Methods)(old guard)!!!!             
                          
var listItems = document.getElementsbyTagName('li');      // Array 
var listItems = document.getElementsbyClassName('food');  // Array 
var favItem = document.getElementbyId('favorite');        // Object  

//New Guard

document.querySelector(".food");
document.querySelector("#whateves") 

//will only return first selected 

document.querySelectorAll("#whateves")

//will return all the goods
            
//The attributes of HTML elements can also be accessed and modified through the DOM              
//step one
var img = document.getElementById('myImage');
//step 2
img.getAttribute('src'); 
img.setAttribute('src', './images/newImage.jpg');  


            
// You can create nodes using the DOM and manipulate their contents using the ****innerHTML property.
//(everything inbetween the tags, reped as a string, ****Low Security****) 
//You can add them to a page by using `appendChild`.              
var newElement = document.createElement('div');
newElement.innerHTML = '<h1>Hi Everybody!</h1> <p>Hi Dr. Nick!</p>'; document.body.appendChild(newElement); 

///safer use is 
.innerText          

///Events   
            
//Many user interactions, or e v e n t s are registered by the browser. 
//We can write code that t rig g e r s or runs, when a certain event is registered.

 //Event Description 
 load - when a page finishes loading 
 unload - when a page is unloading 
 error - when a JavaScript or asset error occurs 
 resize - when the browser window is resized 
 scroll - when the user scrolls
//Event Description keydown while key is depressed down keyup when depressed key is released keypress when a character is inserted
 //Event Description click button is pressed and released on same element dblclick button is pressed and released twice on same element
  mousedown - button is pressed on an element 
  mouseup - button is released over an element 
  mousemove - mouse moved (not on touch screen) 
  mouseover - mouse moved over an element (not on touch screen) 
  mouseout - mouse moved off of an element (not on touch screen)
//There are also: focus events when focus is on or leaves an object form events for form interactions and many others

//When an event fires (is raised) or occurs it can trigger a function. 
//We can bind or connect an element with an event with an eventhandler

       //DOM Event Handler Old better
       var button = document.getElementsbyTagName("button");

       button.onClick = function(){
       	alert("hi");
       }
       //Dom Event Listeners  New best
       
       button.addEventListener("click",function(){
       	alert("Hello")
       })




 //You should understand and be able to use: Features of functions Local vs global scope The document object model Events

 
//project
 //Extend the shopping list program from the last lab even further. 1. Set up a basic HTML page. 2. Append the items and their prices from the shopping list to the page. 3. Show the total somewhere on the page.
//Add a form with text inputs for Name and Price and a button that allows you to add elements to the shopping list. 
//Clicking 'Add' updates the list on the page. Clicking 'Add' also updates the total. Be prepared to demo your work.
//Write a JavaScript program to calculate the volume of a sphere from a user’s input. 
//Include appropriate error messages as alerts if the input is a negative number or not a number at all.