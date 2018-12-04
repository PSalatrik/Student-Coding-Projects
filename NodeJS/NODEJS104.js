EXPRESS.JS
/*EXPRESS
Express is a web application framework for Node JS.
It simplifies creating HTTP servers and creating REST
APIs. Which leads us to...
REST
REST
Representational State Transfers (REST) is an
architecture style for designing networked
applications. The idea is that, rather than using
complex mechanisms such as CORBA, RPC or SOAP
to connect between machines, simple HTTP is used
to make calls between machines.
REST relies on HTTP actions for its end points,
meaning we can use all of the DOM's built in
methods to interact with backend systems.
*/
ARCHITECHTURE
EXPRESS JS EXAMPLE

var express = require('express');
var app = express();
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
res.send('Hello World!');
});
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});

HTTP METHODS
GET
POST
PUT
DELETE
others, but these are the big ones.
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
res.send('Hello World!');
});
// accept POST request on the homepage
app.post('/', function (req, res) {
res.send('Got a POST request');
});
// accept PUT request at /user
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user');
});
// accept DELETE request at /user
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user');
});

POSTMAN
/*Postman is a RESTful client that is available as a
chrome webstore extension. Let's install it and take a
look.
INSTALLING POSTMAN
You can just go to and it will link you
directly to the chrome store extension.
getpostman.com
LAUNCH POSTMAN
The interface to postman can be a little confusing so
we'll go through it bit by bit now.
DEMO!
EXERCISE!
SIMPLE EXPRESS API
Create a simple REST API using Node and Express.
Test it using Postman.*/


DEPLOYING
/*So you've got an awesome new node app but it only
runs on your laptop. Well, now we should talk about
making it available to the rest of the world. Deploying
our app means we will install it on a web server so
that it can be accessed from anywhere on the
internet.
HEROKU
HEROKU
Heroku is a platform as a service. Heroku supports a
bunch of different languages, is fairly easy to use
once you get used to it, and has a nice free tier for
developers looking to rapidly prototype. It's a very
popular service with web developers. It's what we'll
use to learn to deploy applications, though there are
a number of other options.*/
LAB 24
DEPLOY YOUR EXPRESS APP TO
HEROKU
DEPLOY TO HEROKU
Team Exercise! Pick your own teams of 3 or 4
Create a simple web API that performs several different (small) tasks on at
least 3 different routes.
The routes should use at least two different HTTP verbs.
Get the app running locally and test it with Postman.
Google and follow the "Getting Started with Node on Heroku" guide
provided by the Heroku Dev Center.
Once you deploy the sample app provided by the guide, replace the
index.js with your own code and any other files you have created.
Commit and re-deploy.
Try testing your app with Postman.
There is less work to do on this exercise than some of the previous team
projects. It is recommended that your teams mob on the project on a large
screen and switch drivers frequently