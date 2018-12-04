/*$(document).ready(function(){

	
	$('button').on("mouseover", function(){
		$("div").boldify();
	});
});*/
(function(){

var animals = [
	{name:'cow', sound:'moo'},
	{name: 'sheep', sound:'baaah'},
	{name: 'dog', sound:'arff'}
    ];

function seeAndSay(){                   
	animals.forEach(function(animal){
	animals.color = grey;
	console.log('The ', + animals.name, + 'says '+ animals.sound, +'!' + 'And ', + animal.color, + " 'is the color');
	
});

});

seeAndSay();
})();
