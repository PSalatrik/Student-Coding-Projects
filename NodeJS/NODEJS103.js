TOOLS
GOALS FOR THIS UNIT
1. Review
2. Preprocessors
Stylus
3. Taskrunners
Gulp
QUESTIONS?
REVIEW
WHAT'S A PREPROCESSOR?
CSS preprocessors convert whatever we write in our
chosen preprocessor's syntax into the same vanilla
CSS we’ve been writing for the past month or so.
Since we're not writing vanilla (plain) CSS anymore,
we're not confined by the limits of CSS's syntax.

PREPROCESSORS
COMMON FEATURES
Variables
Mixins
Nested Rules
Color functions
Scope
Conditionals
Operations
Expression evaluation
SOUND FAMILIAR?
Preprocessors extend the CSS language and allow us
to think about our styles in a more programmatic
way.
THE CONTENDERS
LESS
is a very popular preprocessor. If you download
the source files for Bootstrap, you'll find the styles
written in LESS.
LESS
SASS
(or Syntactically Awesome Stylesheets) is a
stylesheet language initially designed waaaaay back
in 2006. It is also an extremely popular option.
Sass
STYLUS
The most obvious difference when writing ,
right off the bat, is the syntax. While Stylus will also
compile vanilla CSS, it will also take variations that
make curly braces, semi-colons, and colons optional.
Stylus
SHOOTOUT!
We're going to be delving into Stylus in this course,
but we also don't want you to be sheeple. Take a look
at this that Tuts+ put
together!
comparison of preprocessors
STYLUS
MIXED SYNTAX
We can write our Stylus files in a mix of variations of
the syntax. Even if we mix variations within the same
Stylus file, the code will be compiled to the same CSS.
/* style.styl */
h1 {
color: #0982C1;
}
/* omit brackets */
h2
color: #0973B1;
/* omit colons and semi-colons */
h3
color #FF81D3
TRANSPARENT MIXINS
Unique to Stylus, transparent mixins enhance our
stylesheets by allowing us to write properties
normally.
border-radius()
-webkit-border-radius: arguments
-moz-border-radius: arguments
border-radius: arguments
button {
border-radius: 5px 10px;
}
button {
-webkit-border-radius: 5px 10px;
-moz-border-radius: 5px 10px;
border-radius: 5px 10px;
}
NAKED VARIABLES
We don't need to prefix our Stylus variables. They
may optionally be prefixed with a '$' character.
#prompt
width: w = 200px
margin-left: -(w / 2)
#prompt {
width: 200px;
margin-left: -100px;
}
BLOCK PROPERTY ACCESS
We can access values defined within the current
block by prefixing the name of the property with '@'
to reference the value.
#prompt
width: 200px
margin-left: -(@width / 2)
#prompt {
width: 200px;
margin-left: -100px;
}
GETTING SET UP
INSTALLATION
You should have Node and npm on your machine at
this point, so just run the following command:
$ npm install stylus -g
COMPILING CSS
Once Stylus is installed, seeing the compiled CSS is as
simple as running the stylus command with the files
you want stylus to compile as an argument.
$ stylus styles.styl
compiled styles.css
COMPILING CSS
Adding the -w will set up a watcher that runs in the
background and recompiles the stylesheets on save:
$ stylus -w styles.styl
watching /usr/local/lib/node_modules/stylus/lib/functions/index.styl
compiled styles.css
watching styles.styl
ON GITHUB
Want even MORE information? Check out
.
the project
on GitHub
LAB 23A
SIMPLE WEBSITE
INSTRUCTIONS
Create a website project with some basic CSS Styling
compiled from Stylus files.
1. Set up a new project. (index.html, styles.styl)
2. Style the project using Stylus syntax.
3. Features to play with: Mixed syntax, Variables,
mixins, functions ( lighten and darken )
4. Set up the project so that the CSS file is updated
each time the Stylus file is saved using the watcher
flag -w .
BONUS: As above but with Jade

TASK RUNNERS
WHAT ARE THEY GOOD FOR?
Task runners allow us to be THAT much more lazy in
development. They take care of the many, many
menial tasks associated with writing code that aren't
actually writing code.
AUTOMATION
We can automate all kinds of things!
Compiling CSS
Running a suite of tests
Minifying styles & scripts
Compressing images
Launching a server
Refreshing the browser
THE CONTENDERS
BROCCOLI
is a relatively new option that produces
more concise code because it relies more on the
command line for tasks' parameters. It's a promising
project, but still in a somewhat unstable Beta phase.
Broccoli
GRUNT
is an extremely popular tool with a huge
community around it. It is a very mature tool, and
there are a lot of related resources as a result.
Grunt
GULP
We'll be using throughout the rest of this
course. Gulp uses a system that involves piping files
through a series of functions. It is gaining popularity
and has a ton of great plugins to get us started.
Gulp
GETTING SET UP
INSTALLATION: GLOBAL
We need to install Gulp globally by running the
following command:
$ npm install --global gulp
INSTALLATION: LOCAL
We install Gulp to be used in a specific project by
navigating to that project's root directory and running
the following command:
$ npm install --save-dev gulp
WORTH NOTICING
We've seen the flag --save used in connection with
npm before. When we use --save-dev , it operates
very similarly but it saves as a developer dependency.
That means that this particular library or module is
needed to develop this application but is not
necessary for this app to run.
GET READY
Create a gulpfile.js and save the following code in it:
var gulp = require('gulp');
gulp.task('default', function() {
console.log("Ooooh! Aaaaaah!");
});
TRY IT OUT!
Run the following command:
$ gulp
[15:02:09] Using gulpfile ~/example/gulpfile.js
[15:02:09] Starting 'default'...
Ooooh! Aaaaaah!
[15:02:09] Finished 'default' after 118 μs
TASKS
WHAT'S GOING ON?!
It's okay if you're a little confused at this point. We
haven't seen JavaScript look quite like this before. It
can be a little shocking at first. Not to worry!
THE BREAKDOWN
1. We first need to require Gulp itself in our project.
We do this by assigning it to a variable. By
convention, such variables are typically named after
the plugins they represent.
var gulp = require('gulp');
THE BREAKDOWN
2. The .task() method is run on the gulp object to
create a Gulp task.
var gulp = require('gulp');
gulp.task();
THE BREAKDOWN
3. The first argument passed to the .task() method
is the name being given to the task. The task can be
run from the command line with gulp followed by
the task name. If that name is default , the task will
be run when the user types the gulp command.
var gulp = require('gulp');
gulp.task('styles');
THE BREAKDOWN
4. The second argument passed to the .task()
method is an optional array of dependencies. These
are other tasks that must be run before the current
task.
var gulp = require('gulp');
gulp.task('styles', ['clean:styles']);
THE BREAKDOWN
5. The third and final argument passed to the
.task() method is a function that tells the task what
to do.
var gulp = require('gulp');
gulp.task('styles', ['clean:styles'], function() {
// Do stuff
});
PLUGINS
EXTENDING GULP
Just as when we were discussing jQuery, Gulp plugins
increase the variety of tasks we're able to complete
using Gulp. We'll go over some common tasks as well
as plugins we can use to accomplish those tasks.
WORKFLOW
AUTOMATING WORKFLOW
There are several more general tasks (which may
even be used by other tasks) that many developers
find useful. These may include:
Refreshing the browser
Loading dependencies
Starting a server
Removing unused files
REFRESHING THE BROWSER
Though it takes only a couple of seconds to manually
refresh the browser, those seconds add up when you
consider how many hundreds of times you might do
it in a day. We can use the gulp-livereload plugin to
help us automate this small task.
STARTING A SERVER
We can easily start a local server using the gulpnodemon
plugin.
gulp.task('serve', function( ) {
nodemon({ script: 'app.js' });
});
CONCATENATING FILES
We can combine multiple files into one as part of the
process of making our sites load faster using the
gulp-concat plugin. This can be used to combine
any number of files into one and then pipe it into a
destination folder.
gulp.task("concatScripts", function() {
gulp.src([
'js/jquery.js',
'reveal/js/reveal.js',
'lightbox/js/lightbox.js',
'js/main.js'])
.pipe(concat("app.js"))
.pipe(gulp.dest('js'));
});
LAB 23B
SIMPLE WEBSITE WITH GULP
INSTRUCTIONS
Work in pairs!
Refactor the morning's website project by automating
some of the tasks associated with it. These should include:
Compiling the CSS
Concatenating all JavaScript files into one, minified file
Then, research and find a new gulp plugin (one that wasn't
mentioned in the slides / lecture). Use the documentation
to add it to your project, implement one of its basic tasks in
your gulpfile, and build a small demo of what it does.
Bonus: Get karma and gulp-jasmine working together to
run unit tests in your project.