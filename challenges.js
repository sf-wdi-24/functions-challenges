function Maxormin (num1, num2, max) {
    if (num1 == num2) {
        return num1 + " = " + num2;
    }
    if (max === undefined || typeof max != "boolean" ) {
        return "Max = " + Math.max(num1,num2) + ", Min = " + Math.min(num1,num2);    
    } else if (max) {
        return "Max = " + Math.max(num1,num2);
    } else if (!max) {
        return "Min = " + Math.min(num1,num2);
    }
}
console.log(Maxormin(2,3,"hi"));

function sillySum(arr) {
    return arr.map(function (value,index) {
        return value * index;
    });
}

console.log(sillySum([1,2,3,4,5,6]));

function numSquare(max) {
    var result = [];
    var start = 0;
    while (Math.pow(start,2) <= max) {
        result.push(Math.pow(start,2));
        start++;
    }
    return result;
}

console.log(numSquare(100));

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));

function primes(max) {
    var x = 0;
    var result = [];
    while (x <= max) {
        if (isPrime(x) === true) {
            result.push(x);
        }
        x++;
    }
    return result;
}

console.log(primes(97));