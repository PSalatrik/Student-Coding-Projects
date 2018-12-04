
var shape = function(type, sides){
	this.type = type;
	this.sides = sides;

};


var triangle = new shape("triangle", 3);
console.log(triangle);

shape.prototype.sides = function(){
console.log(this.a);
console.log(this.b);
console.log(this.c);
};

shape.prototype.kind = function(){
	console.log("YO! I am a "+ this.kind +"triangel");
};




shape.prototype.paramater = function(){
	this.a = 5
	this.b = 5
	this.c = 8
} ;
console.log(shape.prototype.paramater);


Triangel.prototype = Object.create(shape.prototype);
triangel.prototype.constructor = shape;

var finalTriangel = function(){
	this.kind =" three sided ";
}   

