var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("The skylight is like skin for a drum i'll never mend");
	response.end();
}).listen(8888)




var http = require('http');
http.createServer(onRequest).listen(8888);
function onRequest(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.write("Why don't we do it in the road");
	response.end();
}

// Math Array

function add (number1, number2){
	return number1 + number2;
}

function subtract(number1, number2){
	return number1 - number2;
}

function multiply(number1, number2){
	return number1 * number2;
}

function modulus(number1, number2){
	return number1 % number2;
}


var mathArray =[
add,
subtract,
multiply,
modulus
]
function execute(mathArray){
	console.log(mathArray[0]());
}




var http = require('http');
http.createServer(onRequest).listen(8888);
function onRequest(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.write();
	response.end();
}


///////Exports
var hello = "hi";
var farewell = "bye"

function greet(){
	return hello;
}

function bye(){
	return farewell;
}

///Option A

module.exports.greet = greet
module.exports.bye = bye

///revaling module pattern
///option B
module.exports = {
	greet: greet,
	bye: bye
}

//next file

var hello = require("/whateverfile")

console.log(hello.greet)
consloe.log(hello.bye)


/*
var http = require('http');
http.createServer(onRequest).listen(8888);
function onRequest(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write('Hello, World');
response.end();
}
*/



/*console.log("Hello Node");


var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });   headers 200 = all is well / content type = what is it
response.write('Hello, World');
response.end();
}).listen(8888);
*/