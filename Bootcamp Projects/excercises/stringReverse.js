

//STRING REVERSE

function reverse(str){

return str.split('').reverse().join('');

}

console.log(reverse("phil"));


//PRIME NUMBERS

function primes(number){
  var factor = [];
  for(var i = 1; i< number; i++){
      while(number % i == 0){
      factor.push(i);
      number=number/i
      }
  }
  console.log(factor);
};







//PALINDROME


var isPalindrome = function(word){

	word = word.split('').join('').toLowerCase();
		return word == reverse(word);
		
}
		console.log(isPalindrome("Race car"));   
    	
			

















