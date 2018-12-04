NPM // Node Package Manager - like a plugin in jQuery

THE PROBLEM
/*
Sometimes you might need a module or functionality
for your application that is not built into Node. For
these you can import libraries (modules) the same
way we required http.*/

THE SOLUTION
/*But first these modules must be downloaded. Luckily
Node comes with a package manager (aptly named
Node Package Manager - npm). This allows you to
easily download packages making them available to
your project. This creates dependencys that can get pretty crazy...
*/

$ npm install express
var express = require('express');

KEEPING TRACK
/*
Metadata is data that describes other data. 
Meta is a prefix that in most information technology usages means 
"an underlying definition or description." Metadata summarizes 
basic information about data, which can make finding and working with 
particular instances of data easier.

You can also maintain a sort of manifest of your node
app's meta-data in a file called package.json . NPM
will also walk you through the process of
bootstrapping a new application.
Try it:*/
$ npm init

/*You can answer the questions as they come up, if
you're not sure just hit enter and it will enter a
default value.*/

KEEPING TRACK
In the end you should end up with a package.json
file that looks something like this:
{
"name": "npmEx",
"version": "1.0.0",
"description": "An example of bootstrapping a node app with npm init.",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Kanye West",
"license": "ISC"
}

THE WHOLE PACKAGE
/*This package.json file acts as this manifest for your
app. It stores information such as your app's version,
git repo, and any dependencies. Take a look at this
file for a second.
You can also add dependencies to your project.
$ npm install express --save
SAVING FOR LATER

--Save adds the download to the file repo
you don't always save the download

Running this command downloads the dependency
but adding --save also saves it to the package.json .
This makes it easier to install a fresh version of the
app with all its requisite dependencies.
{
"name": "npmEx",
"version": "0.0.1",
"description": "NPM example",
"main": "index.js",
"author": "James York",
"license": "MIT",
"dependencies": { /* added by npm install --save */
"express": "^4.12.4"
}
}
touch .gitignore //or make a file and put this in it :node_modules/ - to keep it out of the repo
git ls-files // gives a list 

git status - node modules is taken off the list

LAB 22B
MAKE A PROJECT USING NPM
INSTRUCTIONS
Create a new project using npm init .
Google and install the npm module mkdirp .
Save mkdirp to your project as a dependency.
Using the mkdirp documentation create a small node script
that, when run, creates a new directory.
NOTE : Open Source Software can be a potential minefield
sometimes the modules don't work exactly the way they say
they do. In those cases, you may need to do a little research
to find out why.
BONUS: Using the command line arguments, refine your script
so that it will accept a parameter and use it for the new
directory's name.

