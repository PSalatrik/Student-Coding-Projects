NODEJS
/*Since its inception, JavaScript has run in the browser.
But really, that's just a context. It defines what you
can do with the language. It doesn't encompass all of
what JavaScript is capable of. JavaScript is a complete
language with all of the features of other mature
programming languages.*/

// NODEJS

// NodeJS is just another context. By using the same
// runtime engine as Chrome (Google's V8 VM), NodeJS
// has become a platform on which we may run
// JavaScript code on a server.
// GOODBYE, HOST OBJECTS!
// Keep in mind that a lot of the browser-related objects
// we're used to having access to are no longer
// available when we remove our JavaScript from the
// browser! Objects like Document , Window , and
// XMLHttpRequest are known as host objects and are
// context-specific.

// HELLO, NODE!
// Follow along. Make a new file called hellonode.js .*/

// console.log('Hello, Node!');
// $ node hellonode.js

// /*You should see 'Hello, Node!' printed in your
// terminal.

// WHY NODE?
// BLOCKING...
// Imagine you're standing in line at your favorite Coney
// Island. You know exactly what you want and you'd
// like to be in and out quickly. Unfortunately, there's a
// tourist ahead of you who is more concerned about
// the fact that it's called a Coney Island and isn't in New
// York than ordering food. They're blocking you from
// doing what you went there to do.

// VS. NON-BLOCKING
// Now imagine the person at the counter looks up,
// sees you ready and waiting, and takes your order
// while the obnoxious tourist is making a decision. This
// is how Node processes requests!

// EFFICIENT
// Rather than running multiple threads (having more
// than one line at the Coney Island), Node figures out
// which tasks are ready to be completed so that it's not
// sitting and waiting around for a single process to
// complete.
// NODE SERVER

// NODE SERVER
// An example of a very simple HTTP server in
// implemented in node.
// server.js*/

var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200, { Content-type: "text/plain" });
response.write('Hello, World');
response.end();
}).listen(8888);

//wtf is a port number - 
//a port number is a local browswer port ex: Local:8888

// NODE SERVER
// $ node server.js
// Navigate to http://localhost:8888 
// and you should see a page that says hello world
// THE BROWSER?
// I know what you might be thinking. "I thought you
// said we were done with the browser." We are, our
// javascript in this case is being executed on the server
// instead of inside the browser. Furthermore what we
// said about document and window holds true. Don't
// believe me? Try console logging out the document
// object and see what happens.
// ...but it's still a web server so we visit it using a
//browser.

FUNCTIONS REVIEW

FUNCTIONS REVIEW
Functions can be passed as arguments.

function say(word) {
console.log(word);
}


function execute(someFunction, someArgument) {
someFunction(someArgument);
}
execute(say, 'hello');   
//pass by referance: no parenthese - the whole thing without excuteing...you get whetever it returns
//if it does not return anything it returns undifined. what does it do:
// well, it logs the code of the function...A function that does not return anything returns undefined
//
// > hello



FUNCTIONS REVIEW
Or functions can be defined in-place.
function execute(someFunction, value) {
someFunction(value);
}
execute(function(word){
console.log(word)
}, "hello");
// > hello


DISSECTING OUR SERVER
/*So this ability to define functions in place gives us
some freedom as to how we implement our server.
Let's look at two different ways to do it.
HTTP SERVER AGAIN
Here is the method we used before. As you can see,
we're defining this function in place.*/


// server.js
var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write('Hello, World');
response.end();
}).listen(8888);



HTTP SERVER AGAIN
/*In this example we define a function separately and
then pass that function's reference into the
createServer function. This example should work
exactly the same.*/


// server.js
var http = require('http');
http.createServer(onRequest).listen(8888);
function onRequest(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
response.write('Hello, World');
response.end();
}

WHICH ONE IS RIGHT?
//In this case, there's no real 'right' answer. It's more of
//a matter of taste and a decision that a team will
//typically standardize on. If you're working by yourself,
//do whichever method makes the most sense to you.

EXERCISE!
ALL THE MATHS!!
/*Write four functions that perform basic arithmatic
operations over a set of numbers (Add, Subtract,
Multiply, Modulus). Store these functions in an array.
Create an execute function that executes each
arithmatic function with a given set of numbers (eg.
1-12). Write your program in node*/

SIMPLE NODE APP
//Write a simple node server that will return a favorite lyric.

REQUIRE AND EXPORTS
/*In Node, variables and functions are only available in
the file in which they are declared i.e. variables,
functions, classes and class members. So assuming a
file called example.js*/

var x = 4;
function addX(value) {
return value + x;
}

/*Another file cannot access the variable x or the
function addX . Node's primary building block is the
module which corresponds to a file. So you can think
of the file example.js as a module in which
everything is private.*/

REQUIRE
/*We've already seen how to require Node's built in
modules like http . We can also use require to
import our own modules.
*/var ex = require('./example');
//The argument in the require function is a path to
//the file we want to import. The trailing '.js' is optional.

// So using this functionality we can build self-contained
// modules of code that only expose whatever data and
// functionality that we want.
// But this will only work if our module is exporting
//something.*/

EXPORT
/*In order to expose a variable or function from a node
module you must add it to the module.exports
object.*/

var x = 4;
function addX(value) {
return value + x;
}
module.exports.x = x;
module.exports.addX = addX;
EXPORTS
Another option is to export an object.
var User = function (a, b) {
}
module.exports.user = User;
//vs

module.exports = User;
EXPORTS
//The difference ends up being in how you use it later.
var user = require('./user')
var newUser = new user.User();
//vs

var newUser = new user();
// EXPORTS
// This practice helps to keep from polluting the global
// scope with too many variables.
// LAB 22A


// LYRIC RANDOMIZER

// INSTRUCTIONS
// Expand on the previous example.
// Create a new file that is just a collection of lines of
// lyrics from songs you like.
// Add the array to the module.exports object.
// Import the module in your main app file.
// Change your server to return a single random lyric.
// or
// Alternatively, you can put the randomization logic
// in the module itself.