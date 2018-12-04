/*Javascript
JS is interpreted not compiled

//singel line comment

/* comment like in css

DATA TYPES:
-interger
-boolean
-string
-array
-objects
-function



elements = (values or variables)

values


VARIABLES

var is a box that we are going to put some stuff in 
//remember that we we name a variable it's just a name of a box

name your var

var firstName

Step 1 (declair) a variable
put each ver on one line

Step 2 put something in the box (initialize)

var school="grandCircus";
var andreSays="anybody want a peanut";

Rules for naming

1.Must begin with a letter,_, $ (case sensitive)
2. Cannot start with a number
3.Can contaiN letters, numbers

var tempF = 40;
var tempC = tempF - 32 * (5/8);
var casual = "sweater";
var semiFormal = "sportCoat";
var formal = "tuxiedo";
console.log(tempC);

console.log("Let's calculate the temprature"+" and see what to ware");
var tempF = 20;
var tempC = tempF - 32 * (5/8);
console.log("The Tempature is " + tempC +" degrees out");

if(tempF < 54 && casual){
  console.log("It's cold out you should ware a "+ "" + casual);
}else{
  console.log("It's kind of mild you should ware a "+ semiFormal);
}

if(tempF >= 54 && tempF <= 70 && semiFormal){
  console.log("It's mild out you should ware a " + semiFormal);
  }else{console.log("It's to hot or to cold for that outfit");
       }

if (tempF > 70 && formal){
  console.log("It's nice out you should ware a" + formal );
} */

var currentTemp = 120;
var eventType = "";
var fasionAdvice = "";

if(currentTemp < 54){
	fasionAdvice += "It's cold ware a coat"
}

if(currentTemp >= 54 && currentTemp <70){
	fasionAdvice += "It's not so cold ware a sweater"
}

if(currentTemp > 70){
	fasionAdvice += "It's hot just ware a tee shirt"
}else{ fasionAdvice +="It's warm, ware whetever"}

if(eventType =="formal"){
	fasionAdvice += "It's formal, ware a suit"
}

if(eventType =="semiFormal"){
	fasionAdvice += "It's semi-formal, ware a nice shirt"
}
if(eventType == "casual"){
}else{
	fasionAdvice += "It's casual, ware whatever"
}

/*console.log(fasionAdvice);


//types of opperators
Uniary Operator - 1 argument
Binary Operator - 2 argument
Turnary Operaitor - 3 arguments ( like shorthand inline if statement)



console.log(true ? 'yes': 'no');

vax x=20
console.log ( x>20 ? "you can vote" : "not yet")

//Turnary Opperators can make toggeling easier



Write a javascript program that, given a radius, calculates the following properties about a circle: 
	- diameter - rad * 2 
	- circumference 3.14 * 
	- area 3.14 * rad2(squared)
	
Format the output and log the results to the console. */

var radius =25
var diameter= radius * 2;
var circumfrence= 3.14 * radius;
var area = 3.14 * (radius *2);



console.log(area)




