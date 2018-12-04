var name = prompt("what is your name");


if(name=="Phil"){
	alert("You rule");
}
else(name.length<4);{
	alert("Your name is too short");
}


var name = ""
var done = false;

function ask(){
	return prompt("Please enter your name");
}

function helloName(){
while(!done) {
	userimput =ask();
		alert("Please re-enter your full name It's too short.\n Do it again!");
} else{
	alert("Hello" + userimput);
	done = true
		}
	}
}






