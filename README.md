# Functions Challenges

Evening challenges for the functions module.

### Maxormin(num1, num2, max)

Define a function ```maxOrMin``` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.




function maxOrMin (num1, num2, max) {
    if (max == true) {
        return Math.max(num1,num2);
    }  else {
        return Math.min(num1,num2);
    }
    };


maxOrMin(4,3,false);








### sillySum(arr)

Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

```count += (number * index)```






var array = [1,2,3,4,5];




function sumArray (array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
    count += (i * array[i]);
        
    }
    return count;
    
}

sumArray(array);






### numSquare(max)

Create a function called numSquare that will return an array of all perfect square numbers up to, but not exceeding a max number.







function numSquare(num) {
    var perSquare = [];
    for (var i = 0; i < num; i++) {
        if (Math.pow(i,2) <= num) {
            perSquare.push( i* i);
        }
    }
        return perSquare;
    
}    


numSquare(100);













### isPrime(num)

Create a function that returns true if the number passed in is a prime number and false if not.

### primes(max)

Using your isPrime function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.







function primeChecker(num) {
    if (num == 0 || num == 1) return false;
    if (num == 2) return true;
    for (var i = 2; i < num ;i++) {
        if (num % i == 0) return false;
    } 
    return true;
}


function prime_from_0_to_x(x) {
    var prime_List = [];
    for (var i = 0; i < x; i ++) {
        if (primeChecker(i) == true) {
            prime_List.push(i);
        }
   }
         return prime_List;
}

prime_from_0_to_x(50);
