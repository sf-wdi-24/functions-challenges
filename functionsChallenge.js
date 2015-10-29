// Define a function maxOrMin that takes three parameters: two numbers
// and a boolean. Have it return the larger of the two numbers if the
// boolean is true, otherwise have it return the lesser of the numbers.
function maxOrMin(num1, num2, max) {
	if(max===true){
		return (num1>num2 ? num1 : num2);
	} else if (max===false) {
		return (num1<num2 ? num1 : num2);
	} else {
		console.log("Third parameter needs to be true or false.");
	}
}
console.log("maxOrMin: " + (maxOrMin(2,1,true) === 2));
console.log("maxOrMin: " + (maxOrMin(2,1,false) === 1));
console.log("maxOrMin: " + (maxOrMin(3,3,true) === 3));


// Write a function that takes an array of numbers and returns the
// sum of each number multiplied by its index.
function sillySum(arr) {
	var count = 0;
	for(var i = 0; i<arr.length; i++){
		count += (arr[i] * i);
	}
	return count;
}
console.log("sillySum: " + (sillySum([1,2,3]) === 8));
console.log("sillySum: " + (sillySum([4,7,3]) === 13));


// Create a function called numSquare that will return an array
// of all perfect square numbers up to, but not exceeding a max number.
function numSquare(max) {
	var arr = [0];
	for(var i = 0; arr[arr.length - 1]<max; i++){
		arr.push(i*i);
	}
	arr.shift();
	arr[arr.length - 1]>max ? arr.pop() : arr;
	return arr;
}
console.log("numSquare (max: 16): " + numSquare(16));
console.log("numSquare (max: 25): " + numSquare(25));


// Create a function that returns true if the number passed in is a prime number and false if not.
function isPrime(num) {
	for(var i = 2; i<=(Math.sqrt(num)); i++){
		if(num%i === 0) {
			return "Not prime";
		} else if(num%i !== 0) {
			
		} else {
			console.log("Something went wrong");
		}
	}
	return "Prime number";
}
console.log("isPrime?(165): " + isPrime(165));
console.log("isPrime?(77): " + isPrime(77));
console.log("isPrime?(165): " + isPrime(7));
console.log("isPrime?(4): " + isPrime(4));


// Using your isPrime function, create a function primes that will return an
// array of all prime numbers up to, but not exceeding a max number.
function primes(max) {
	var arr = [];
	for(var i = 0; i<max; i++){
		if(isPrime(i) === "Prime number"){
			arr.push(i);
		}
	}
	return arr;
}
console.log("Array of Primes up to 20: " + primes(20));
console.log("Array of Primes up to 35 " + primes(35));
console.log("Array of Primes up to 111: " + primes(111));