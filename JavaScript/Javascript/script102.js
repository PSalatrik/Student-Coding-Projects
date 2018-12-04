/* LOOPS

for Loop
	
for ([initialization]; i < n; [final-expression]) {   // repeating things }
for var (i = 0; [condition]; [final-expression]) {   // repeating things }

*/


for( i=0; i<=50; i+=2){
	console.log(i);
}

/*

while
only has a condition
while (condition) {
// repeating things
}
infanite loops are bad do not give it a condition that wont end
example 
while(i<10)

var a = 0;
var j = 0;
while (a < 30) {
a++;
j += a;
}

var queryFound = false
var query = "Jeff"
while(!queryFound){
	if(thing===thingWereloogingfor){
	
	]}

	*/

var age = 10
while(age <= 17){
	age++
	console.log("You are " + age + " years old");
	if(age === 17){
	}

}


/*
Do (the thing)...While (till while tells you to stop)

do
// repeating things
while (condition); ******will always run once

var faveFruit = alert("What's your favorite fruit?");
while (faveFruit !== "apples") {
faveFruit = alert("What's your favorite fruit?");
}
var faveFruit;
do
faveFruit = alert("What's your favorite fruit?");
while (faveFruit !== "apples");

n

////FUNCTIONS

//function Use(paramaters){in the beginning} Use("arguments to call the function");


   allow us to reuse parts of our code

   function beAwesome() {
// go on being awesome
}
beAwesome(); *****use a semicolon after every instruction

declare
function
name
function nameOfFunction
declare ()
function nOfFunction (){
	//things the function does
}

nameOfFunction(someParamater)

paramater is a ver just for this function

pass data to the paramater

define a function with paramater

call a function with a argument

*/
function sayHi(name) {
console.log("Hi, " + name + "!");
}
sayHi("Jeseekia");
// Will output "Hi, Jeseekia!" - net is a agrument

function sayHi(name,age) {
console.log("Hi, " + name + "! It's so cool that you're " + age + "!");
}
sayHi("Jeseekia",25);
// Will output "Hi, Jeseekia! It's so cool that you're 25!"
/*

Parameters
When calling our function, we are not limited to
passing in values.
We can also pass in variables with predefined values.

RETURNING VALUES
We can get output from our function by returning
values.
This allow us to use output from one function in
another USE AS A LAST STATMENT BECAUSE NOTHING WILL SHOW UP*/

function sayHi(name,age) {
console.log("Hi, " + name + "! It's so cool that you're " + age + "!");
}
var myName = "Jeseekia";
var myAge = 25;
sayHi(myName,myAge);
// Will output "Hi, Jeseekia! It's so cool that you're 25!"

function getArea(length,width) {
return length * width;
}
getArea(10,6);
// Will return 60

var [


]


 function  fullList (list,total)
