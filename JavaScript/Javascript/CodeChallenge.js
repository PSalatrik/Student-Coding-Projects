
function vowelCounter(myName){
	var vowels = ["a", "e", "i", "o", "u"];
	var myVowels = [];
	myName = myName.toLowerCase();

	for(var i=0, i< myName.length, i++)
		for(var j =0; j<= vowels.length;j++){
				if(words.charAt(i) === vowels[j]){
					myVowles.push(myName.charAt(i)){
				}
			}		
		}

console.log(myVowels);





}
vowelCounter("Phil");