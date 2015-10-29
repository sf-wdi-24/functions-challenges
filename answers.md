////////////////////////
/////Solution 1 ///////
//////////////////////

function maxOrMin (num1, num2, boo) {
    if (num1 === num2) {
		return "The numbers are equal";
	}
	else if (typeof boo !=="boolean") {
		return "Enter True or False";
	}
	else if (boo === true) {
			return Math.max(num1,num2);
	}
	else if (boo === false) {
		return Math.max(num1,num2);
	}
}

maxOrMin(100,200,true);

////////////////////////
/////Solution 2 ///////
//////////////////////

function sillySum(arr) {
    var count = 0;
	for (var i=0; i<arr.length; i++) {
		 count += (arr[i] * i);
	}
    return count;
}

var array = [1,2,3,4,5];
sillySum(array);

////////////////////////
/////Solution 3 ///////
//////////////////////

function numSquare(max) {
    var squaredArray = [];
    for (var i = 0; i<max; i++) {
         if (Math.pow(i,2) <= max) { 
         squaredArray.push(Math.pow(i,2)) ;
         }
    }
    return squaredArray;
}


numSquare(100);

////////////////////////
/////Solution 4 ///////
//////////////////////

function isPrime(num) {
	if(num<2) {
    	return false;
    }
        for (var i=2; i<num; i++) {
            if(num % i === 0) {
            	return false;
            }
            else {
                return true;
            }
        }
}

isPrime(130);

////////////////////////
/////Solution 5 ///////
//////////////////////


function isPrime(num) {
    if(num < 2) {
    	return false;
    }
        for (var i = 2; i < num; i++) {
            if(num % i === 0) {
            	return false;
            }
            //Why does this break my code when I comment out the return true below?
            // else {
            //     return true;
            // }
        }
        return true;
}

function primes(max) {
    var array = [];
    for (var i = 2; i<=max;i++) {
        if(isPrime(i)) {
            array.push(i);
        }
    }
    return array;
}

primes(100);