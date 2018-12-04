 
 1. Review 2. Requests & Responses 3. Submitting Forms 4. Error Handling


AJAX - Asynchronous Programming

//AJAX was originally an acronym for (data change formats) Asynchronous JavaScript And XML. 
//These days, people still use it, but the term Ajax actually refers to a group of web technologies used for asynchronous programming.
//We're going to use "AJAX" moving forward.
//When we use AJAX, the browser can request data without needing to wait to load the rest of the page. 
//(like when a couple letters typed into a browser serch and top serched for those letters show up) or....
//(like when a map loads with out reloading the whold page)
//This works for loading an entire page as well as just parts of a page.
//AJAX makes the web kick ass like a good little modern internet

//AJAX works in two steps: 
//1. The browser requests information from a server. 
//2. The browser processes the server's response. (The stuff the server does in between these two steps?)
//That's a bunch of server-side nonsense that we don't need to worry about right now.

//interaction with the DOM 
//The browser uses the XMLHttpRequest object in both AJAX steps.
//inbeading  youtube or API
//javascript can only single thread (one thing at a time)
//Async - a slide of hand - still only doing one thing at a time - 
//it can push other prosesses to the background (event loop is the key) [keeps running] and waits till they are done
// (event loop) call stack - all the instructions gets q'ed up - setInterval - 
//everything is being added async
var i = 0;
setInterval(function(){
  console.log(i);
  ///accepts a call back in a function and a time
 i++
},100);

//We begin by creating an instance of the XMLHttpRequest object and storing it in a variable.              
//event.preventDefault is a thing about stoping the page from reloading


API REQUEST  via AJAX/JSON


//xhr = the prosses of sending and recieving a request
var xhr = new XMLHttpRequest();              
  //We use the open() method to prepare the request.              
var xhr = new XMLHttpRequest(); xhr.open();              
            
//The first parameter of the open() method takes either 'GET' or 'POST' 
//and specifies how the request should be sent.              
var xhr = new XMLHttpRequest(); xhr.open('GET');              
            
The second parameter of the open() method takes the path to the page that will handle the request.              
var xhr = new XMLHttpRequest(); xhr.open('GET', 'data/data.html');              
            
The third parameter of the open() method takes a Boolean value that indicates whether or not the request is asynchronous.              
var xhr = new XMLHttpRequest(); xhr.open('GET', 'data/data.html', true);              
            
Once the request has been prepared, we use the send() method to (you guessed it) send the request to the server.              
var xhr = new XMLHttpRequest(); xhr.open('GET', 'data/data.html', true); xhr.send();              
            
Optionally, we can pass additional information to the server using the send() method. In the absence of any such information, you may see the keyword null passed.              
var xhr = new XMLHttpRequest(); xhr.open('GET', 'data/data.html', true); xhr.send(null);              
            
The onload event is triggered when a response is received from the server and loaded.              
var xhr = new XMLHttpRequest();
xhr.onload
xhr.open('GET', 'data/data.html', true); xhr.send(null);              
            
//We can use the onload event to trigger a function.              
var xhr = new XMLHttpRequest();
xhr.onload = function() {}
xhr.open('GET', 'data/data.html', true); xhr.send(null); 

//404 error page not loading
//405 error method not allowed
//200 everything worked well             
            
//Within that function, we need to make sure the server responded successfully 
//by checking for a status of 200.              
var xhr = new XMLHttpRequest();
xhr.onload = function() {  if (xhr.status === 200) {
  } }
xhr.open('GET', 'data/data.html', true); xhr.send(null);              
            
//If the response is okay, we can go ahead and use the information from the server to update the page.              
var xhr = new XMLHttpRequest();
xhr.onload = function() {  if (xhr.status === 200) {    // Stuff that uses the server's response  } }
xhr.open('GET', 'data/data.html', true); xhr.send(null);              
 
//JSON VALIDATER shows all the info to recreate any page selected (.stringify sends a string across the wire instead of bianary)
//use - we have a website and we want to add some social media features
// -API interaction and stuff???           
//(key and value are put in strings in the massive payload)
//WEBSERVICE ENDPOINT

JQUERY AND AJAX
//jQuery provides four methods to handle our AJAX requests.
//$.get() $.post() $.getJSON() $.getScript()
//In addition to the four methods already mentioned, 
//jQuery provides us with the $serialize() method, which takes all the information contained in a form, 
//puts it into a string we can send to the server (encoding characters when necessary).
//Select the form.

encodeURI('javascript is great!!' <>@ ^&) (hex code $serialize)

$.get(http:cliffbells.com/json , function(responce){
	console.log(responce.kind)

});
         BREAKDOWN     
$('#register')              
            
//Using the on() method, we'll create a block of code to be run when the form is submitted. 
//The first argument is the trigger and the second is the function that will respond to that trigger.              
$('#register').on('submit', function(e){
});              
            
//We can prevent the form from submitting immediately (which would be its default behavior).              
$('#register').on('submit', function(e){  
	e.preventDefault(); });              
            
//To prepare the form data to be sent to the server, we use the .serialize() method.              
$('#register').on('submit', function(e){ 
 e.preventDefault();  
 var details = $('#register').serialize();
 });              
            
//The $.post() method sends the data.              
$('#register').on('submit', function(e){ 
 e.preventDefault();  
 var details = $('#register').serialize();  
 $.post('register.php', details, function(data) {
  }); 
});              
            
//The function passed to the $.post() method indicates where the result should be displayed.              
$('#register').on('submit', function(e){  
	e.preventDefault();  
	var details = $('#register').serialize();  
	$.post('register.php', details,
	 function(data) {    $('#register').html(data);  }); });              
            

//Every so often, you will make a request of the server and it will fail. 
//This is inevitable, so be ready!
// Plan ahead for moments like these so your page isn't completely broken with every little thing that doesn't go as expected.

//The following methods can be chained after any of jQuery's shorthand AJAX methods.
//Code passed to the done() method will only run if the request is completed successfully.
//Code passed to the fail() method will only run if the request is n o t completed successfully.
//Code passed to the always() method will run regardless of the status of the request.

group work
 //Take the JSON payload available from /r/aww (check with the instructor before using anything else) 
 //and use the data to create a “feed”. 
 //1. Break into small groups and delegate tasks. 
 //2. Look at the raw JSON to see how objects are organized. 
 //3. Create a webpage that pulls information from the payload.
//Create a "back to top" button that persists near the bottom of the screen and scrolls 
//(as opposed to jumps) back to the top of the page without reloading it.



