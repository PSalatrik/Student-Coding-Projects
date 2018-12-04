
var groceryList =[
{name:"bread", price: 3},
{name:"milk" , price: 5},
{name:"eggs", price:  4},
{name:"tomatoes" , price: 6},
];

console.log(groceryList[3]);

console.log("There are " +groceryList.length + " items in my list");

var total = 0;
var list = "";
var cost = "";

groceryList.forEach(function(items){
			
			total += items.price;
			list = items.name;
			cost = items.price;

});



var listOnPage = document.createElement("div");
listOnPage.innerText = list;
document.body.appendChild(listOnPage);

var costOnPage = document.createElement("div");
costOnPage.innerText = cost;
document.body.appendChild(costOnPage);




var totalOnPage = document.createElement("p");
totalOnPage.innerText = total; 
document.body.appendChild(totalOnPage);

 

var newAddition = document.getElementById("addToPage");

var totalOnPage = document.createElement("div");
totalOnPage.innerText = total; 
document.body.appendChild(totalOnPage);

newAddition.addEventListener("click" ,function(e){
	


	e.preventDefault();	
	var totalOnPage = document.createElement("p");
	totalOnPage.innerText = total; 
	document.body.appendChild(totalOnPage);
});




      
       	
document.body.appendChild(newAddition);
		
console.log("Total:" + total + " Buckaroos");


var totalOnPage = document.createElement("p");
totalOnPage.innerText = total; 
document.body.appendChild(totalOnPage);

var listOnPage = document.createElement("div");
listOnPage.innerText = list;
document.body.appendChild(listOnPage);

var costOnPage = document.createElement("div");
costOnPage.innerText = cost;
document.body.appendChild(costOnPage);


//ameOnPage.innerText = groceryList;



//Write a JavaScript function to generate an array. 
//The elements in the array should be integers 
//in a range between two integers given as arguments.              
//makeArray
//(-4, 2);
//>> [-4, -3, -2, -1, 0, 1, 2]*/

var args = [];
function genArgs (){
	for( i = 0; i<=100; i++ )
		args.push(i);
	console.log(args);


}

genArgs();

