//max or min

var maxOrMin = function(num1, num2, max) {
    if (max == true && num1 > num2) {
        return num1;
}   else if (max == true && num2 > num1) {
    return num2;
}   else if (max == false && num1 > num2) {
    return num2; 
}   else {
    return num1;
}
}
maxOrMin(7, 2, false)


//silly sum

function sillySum(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++ ) {
        count += (arr[i] * i)
    }
    return count;
}

console.log(sillySum([5, 4, 8, 2]))


//num square

function numSquare(max) {
    var perfectSquares = [];
    for (var i = 0; i < max; i++) {
      if (Math.sqrt(i) % 1 === 0) {
        perfectSquares.push(i);
      }
    }
    return perfectSquares;
}
console.log(numSquare(50))


// is prime num

function isPrime(num) {
    if (num % 2 === 0) {
        return false;
    }        
    for (var i = 3; i < num; i=i+2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}   
console.log(isPrime(17))


// primes max

function isPrime(num) {
    if (num % 2 === 0) {
        return false;
    }        
    for (var i = 3; i < num; i=i+2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}   


function primes(max) {
    var primeArray = [];
    for (var i = 0; i <= max; i++) {
        // if i is prime, then push i onto prime array
        if (isPrime(i)) {
            primeArray.push(i);
        }
    }
    return primeArray
}

console.log(primes(17))