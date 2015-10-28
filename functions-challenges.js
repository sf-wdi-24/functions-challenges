function maxOrMin(num1, num2, max) {
	if (num1 === num2) {
		return "The variables are equal";
	} else if (((num1 > num2) && max) || ((num2 > num1) && !max)) {
		return num1;
	} else {
		return num2;
	}
}

function sillySum(arr) {
	var count = 0;
	for (i = 1; i < arr.length; i++) {
		count += (arr[i] * i);
	}
	return count;
}

function numSquare(max) {
	var arr = [];
	for(i = 1; (i * i) <= max; i++) {
		arr.push(i * i);
	}
	return arr;
}

function isPrime(num) {
	for(var i = 2; i < num; i++) {
		if (num % i === 0) { return false; }
	}
	return true;
}

function primes(max) {
	var arr = [];
	for (i = 2; i <= max; i++) {
		if (isPrime(i)) { arr.push(i); }
	}
	return arr;
}
