var maxOrmin = function(num1,num2,boo){

	if( boo === true){
		return math.max(num1,num2);
	}

	else if (boo === false){
		return math.min(num1,num2)
	}	
}

/////////

var numbers = [1,2,3,4,5];

function sillySum(numbers) {
 var count = 0; 
for (var i = 0; i<numbers.length; i++) {
    count += (numbers[i] * i);
    console.log(i);
}
return count; 
}

/////////
var max;
var newArray = [];
function numSquare(max){

	for(i = 0; i < max; i++)
		if (i*i <=max){
			newArray.push(i*i);
		}
		return newArray;
}
//////////
var isPrime = function(num){
	for(i= 2; i<num;i++){
		if(num % i === 0){
			return false;
		}
		else{
			return true;
		}
	}
}	
////////

var isPrime = function(num){
	for(i= 2; i<num;i++){
		if(num % i === 0){
			return false;
		}
		else{
			return true;
		}
	}
}	



function primes(max){
	var primeNumberArray = [];

	for(var i = 0; i < max; i++){

	if (isPrime(i) === true){

		primeNumberArray.push(i);
	}
}
		return primeNumberArray;
	}
	
	primes(100);
	
	









