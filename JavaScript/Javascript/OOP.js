

/*-Paradigm OP
-Functional Programing -  Always having a vairable
-Object Oriented Programming (OOP)- The Most popular - 
Any majior lang. is OOP at this point
- most codes have adadipted to being OOP
Javascript supperts a vide varity of styles. Good and Bad.
//prototypical inheriantance
real world = objects
blueprint = classes*/

We can make a constructor Function useing a "NEW" keyword

//Parent Class
var animal = Function (species, name) {  ///ANIMAL CONSTRUCTOR
	this.species = species;                        ////GOOD
	this.greeting = function(){
		console.log('hi i am a' + this.species)
	};
	this.eat = function(){
		console.log('nom nom nom')
	};
};

var koala = new Animal ('koala', true);
var iguana = new Animal ('iguana', false);
console.log(koala);
console.log(iguana);

koala.eat(); //nom nom nom
koala.greeting();
iguana.greeting();
iguana.eat();

//prototype - A()n object that is inhereted for all instances of an object. 
//All objects refer to the one copy. 
//The function is stored on the object and there is only one copy of it.


Animal.prototype.eat = function(){
	console.log('nom nom nom');               ////Better
};

Animal.prototype.greeting = function(){
	console.log('what up doe')
};

/*SUBCLASSES
Animal (class)
 - species
 -furry
 -eat
 -greeting

 if we need more classes we can add a sub class

 -FISH (subclass)
 -furry === false
 -eat
 -greeting
 -species

 -BIRD(subclass)
 -species
 -furry + featherd
 -greeting
 -eat


 We creat another constructor function, 
 take the prototype and apply it to each of the subclasses.
 Advantage - in most codes you can only inhearit from one class. 
 But in JS you can add functions (like a fly method for birds)*/

 //First Subclass
 var Koala = function(diet){
 	Animal.call(this);
 	this.diet = diet
 };

 Koala.prototype =Object.create (Animal.prototype);
 Koala.prototype.constructor = Koala;

 var marnie = new Koala ('eucaluptus');

 marine.greeting();
 marine.eat();


//second subclass
var Tiger = function(diet){
		Animal.call(this, "Tiger", "Kahn");
		this.diet = diet

		Tiger.prototype = Object.creat(Animal.prototype);






