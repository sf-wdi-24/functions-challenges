var maxOrMin = function (num1, num2, boolean) {
	if (num1 === num2) {
		return 'these two numbers are equal';
	}
	if (boolean) {
		return Math.max(num1,num2) + ' is larger';
	} else if (!boolean) {
		return Math.min(num1,num2) + ' is smaller';
	}
};

console.log(maxOrMin(2,3,false));

function sillySum(arr) {
   count =  arr.map(function (value,index) {
        return value * index;
 	});
   counts = count.reduce(add);
   function add(a,b) {
   return	a + b;
   }
   return counts;
 }

console.log(sillySum([1,2,3]));

var numSquare = function(max) {
	var squareArray = [];
	for(var a = 0; a < max; a++){
		squareArray.push(Math.pow(a, 2));
	}
	return squareArray;
};

console.log(numSquare(10));

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	var prime = true;
	for( var a = 2; a < num; a++) {
		if (num % a === 0) {
			prime = false;
		}
	}
	return prime;
}

console.log(isPrime(43));

var primes = function(max) {
	var a = 0;
	var primesArray = [];

	while (a <= max) {
		if (isPrime(a)) {
			primesArray.push(a);
		}
		a += 1
	}
	return primesArray;
};

console.log(primes(40));

