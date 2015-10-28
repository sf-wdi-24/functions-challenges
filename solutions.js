// Maxormin(num1, num2, max) - Define a function maxOrMin that takes three parameters: two numbers and a boolean. Have it return the larger 
//of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.


function Maxormin(num1, num2, max){
	var minnum=0;
	var maxnum=0;
	if(num1 > num2){
		max = num1;
		min = num2;
	}
	else{
		maxnum = num2;
		minnum = num1;
	}
	if(max){
		return maxnum;
	}
	else{
		return minnum;
	}
}


//sillySum(arr) - Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

function sillySum(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum+=arr[i]*i;
	}
	return sum;
}

//numSquare(max) - Create a function called numSquare that will return an array of all perfect square numbers up to, but not exceeding a max number.

function numSquare(max){
	var arr=[];
	for(i = 1; i * i <= max; i++){
		arr.push(Math.pow(i, 2));
	}
	return arr;
}

//isPrime(num) - Create a function that returns true if the number passed in is a prime number and false if not.

function isPrime(num){
	for(i = 2; i < num; i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
}

//primes(max) - Using your isPrime function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.

function primes(max){
	var arr = [];
	for( j = 1; j < max; j++){
		if(isPrime(j)){
			arr.push(j);
		}
	}
	return arr;
}




































