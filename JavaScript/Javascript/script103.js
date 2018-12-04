
//ARRAYS


// In JavaScript, an array is a data structure consisting of a collection of elements (values or variables), 
//each identified by at least one array index or key.
// Arrays in JavaScript are special because the individual elements can be anything that can be stored in a variable.
//(02
//comapring a array to another array is very hard
// A perfectly legal array in JavaScript 

var myArray = [  'thing',  12,  ['another', 'array'],  { my: 'object' },  function() {} ];              
            

//Granted, most of the time arrays are collections of like elements, but this is a feature that is used 
//all over JS i.e. function argument lists.
// Fortunately, other array functionality works as expected (if you've worked in other languages before).              

var coolColors = [  'green',  'blue',  'purple' ];
coolColors.length // 3 (number of items in array)              
            
//Bracket notation can also be used to reassign elements in an array OR add new elements.  
//subsutions are everywhere            

var coolColors = [  'green',  'blue',  'purple' ];
coolColors[1] = 'lavender'; coolColors[3] = 'indigo'; coolColors.length; // > 4

var names = [
	"bob",
	"bill",
	"mary"
];
for(i=0; i< names.length; i++){
	console.log(names,[i]);
}

CODE CHALLENGE!!!
PRIME FACTORS
function primes(number){
  var factor = [];
  for(var i =2; i<= number; i++){
      while(number % i == 0){
      factor.push(i);
      number=number/i
      }
  }
  return factor
};
primes(1);


//Notice anything unexpected in that last example? Assigning a new color to index 3 
//increased the length of our 3-item coolColors array. That's because indexing begins with 0.              

var coolColors = [  'green',  'blue',  'purple' ];
coolColors[0]; // > 'green'              
            
//The length property returns the length of an object. E.g., if the object is an array, the number of elements is returned; 
//if a string, the number of characters.              

var rainbow = ["red", "orange", "yellow", "green", "blue"]; 
var name = "Aisha"; rainbow.length // > 5 name.length // > 5              
         


//METHODS  


//often Methods take functions as argumentss
//Array methods
//(Check out a Methods Index Online)
// Methods are very similar to functions, but they have a more specific purpose. 
//Methods allow objects (which we'll talk about in more depth very soon) do things or have things done to them.
//Often, methods will be used to do the following: 
//Return some information about the object 
//Change something about the object
//There are a number of methods given to us for free by the JavaScript language. 
//You don't need to understand exactly h o w they work for right now, but you should know how to make affective use of them. 
//We'll go over several examples:
//The toString() method is used to convert many other types of data into a string that represents that data.              

var ageAtHeart = 5; 
var ageAsString = ageAtHeart.toString(); // > "5"              
            
//The charAt() method returns the character at a specified index of a string.              

var faveThings = "raindrops on roses"; 
var zeroIn = faveThings.charAt(0); // > "r"              
            
//The concat() method is used to combine multiple strings into one. It can also be used to join arrays together.              

var faveThings = "raindrops on roses"; 
var badThings = " when the dog bites"; 
var newString = concat(faveThings, badThings); // > "raindrops on roses when the dog bites"              
            
//The indexOf() method returns the first index at which the specified value occurs.              

var faveThings = "raindrops on roses"; 
var rainbow = ["red", "orange", "yellow", "green", "blue"]; 
faveThings.indexOf("r"); // > 0 rainbow.indexOf("orange"); // > 1              
            
//The pop() method removes the last element in an array and returns it. (removes the last element of a array)             
var rainbow = [
"red", 
"orange", 
"yellow", 
"green", 
"blue"]; 

rainbow.pop(); // > "blue" rainbow; // > "red", "orange", "yellow", "green"              
            
//The push() method adds one or more elements to the end of an array and returns the updated length of the array.              

var rainbow = ["red", "orange", "yellow", "green", "blue"]; 
rainbow.push("indigo", "violet"); // > 7 rainbow; // > "red", "orange", "yellow", "green", "blue", "indigo", "violet"              
            
//The shift() method removes the first element in an array and returns it.              

var rainbow = ["red", "orange", "yellow", "green", "blue"]; 
rainbow.shift(); // > "red" rainbow; // > "orange", "yellow", "green", "blue"              
            
//The unshift() method adds one or more elements to the beginning of an array and returns the updated length of the array.              
var rainbow = ["red", "orange", "yellow", "green", "blue"]; rainbow.unshift("pink"); // > 6 rainbow; // > "pink", "red", "orange", "yellow", "green", "blue"              


//FOR EACH LOOP

//The forEach() method accepts a function as an argument. That functions accepts an element from the array as an argument. 
//Then the body of that function is executed f o r e a c h (see what they did there?) element in the array. 
//forEach() is an even safer option for iterating over an array than a regular for loop.              
var rainbow = 
["red", "orange", "yellow", "green", "blue"]; 

//!!!forEach(annomus function(element of array))

rainbow.forEach(function(element)
  { console.log(element) });


names.forEach(function(element)){
	console.log(element);
}            
            
  
///There is no point in trying to memorize all of this nonsense. 
//You MUST learn to FIND the answers you seek! See this giant and try some of them out. 

//forIn

var obj = {
a: 1,
b: 2,
c: 3

};
 for( var prop in obj){
    var key = "b"
    console.log(prop[key]);
 }
//u can use [] to get property values 
//instead of . notation (prop.b) for some reason like you don't know what the key would be.
var p = document.createElement('p');
p.myThing = 'cool'

if(p.hasOwnProperty(prop){
  console.log(prop)
});


  ///only pulls propertys on the object (idderate over all the propertys in a abject)
// like forEach to a array for..in is for a object....sort of




//OBJECTS

//Objects are a data structures that allow us to store collections of data including 
//properties (variables) which can include arrays, other objects, or functions.

              var myInfo = {
              	name: 'James',  
              	age: 36,  
              	married: true,  
              	likes: ['Mythbusters', 'Jim Butcher', 'JavaScript'],  
                family: [ 
                {
                	name: "Rebecca", relation: "spouse"
                },   
               {
               	name: "Evangeline", 
                relation: "daughter"
            },    
              { name: "Josephine", 
                relation: "daughter"
               },  
               ],  
               listFamilyMembers: function() { } 
           };              
            
//Object properties can be accessed using dot notation.  kind of like a "Key-Value pair"             
var name = myInfo.name; 
var age = myInfo.age; 
var maritalStatus = myInfo.married; 
var familyMembers = myInfo.listFamilyMembers();              
            
//You can also use dot notation to add new properties to objects.              
myInfo.hobbies = ['video games', 'quadcopters', 'volunteering']; myInfo.pets = 4;              
            


///THIS

//" This " is a keyword that is helpful for use within objects and functions. 
//"This" always refers to a single object, but when and where it is used determines which object.
//In the global context, "this" refers to the global object. Inside a function, "this" varies depending on how it is called.
//When using "this" within an object method (a function defined within an object), it refers to that particular object.
 // > "My name is Curly Sue"        


// You should understand and be able to use: Zero-based indexing Arrays 
//Array Methods For Each loop Objects Functions as arguments "this"
//Extend the shopping list program. 
//1. Create several grocery item objects with properties of name and price. 
//2. Store the grocery item objects in an array. 
//3. Loop through the array and print out the name and price on a new line.
// 4. Total up the amount with a label ‘total’. Be prepared to demo your work. 

// console =(object) . =(dot notation)  log =(property of console and function) ("Hello World")= (argument)





