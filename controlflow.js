// Dave Sloan JavaScript functions challenge
// I did not enjoy this homework - it seemed pretty advanced for our first JavaScript day.  I would probably have been more comfortable if there wer 10 questions and the first 6 were super easy, just to warm up. 
// I'm struggling with JavaScript but I'm not sure what about it is hard to me.  Will discuss with you guys. 




function maxOrMin (num1, num2, boo) {
	if ((boo === true) && (num1 > num2)) {
		return num1; 
	} else 
		return num2; 
}
maxOrMin(7,8); 

function maxOrMin (num1, num2, boo) {
    
	if (boo === true) {
	return Math.max(num1,num2);
	}
    else if (boo === false) {
    return Math.min(num1,num2);
}
    else {
    console.log("hi there"); 
    }
}
maxOrMin(7,8, true); 

//SillySum solution

var numbers = [1,2,3,4,5];

function sillySum(numbers) {
 var count = 0; 
for (var i = 0; i<numbers.length; i++) {
    count += (numbers[i] * i);
    console.log(i);
}
return count; 
}
sillySum(numbers);

//Square root solution

//Return an array, so a new array
//of perfect square numbers like 1, 4, 9, 12, 25, 36, 49, 64, 81, 100
//up to but not exceeding a max number, like 101. 
// so put these perfect squares in my array if they are less than my max number

function numSquare(max) {
    var newArray = []; 
for (var i = 0; i < max; i++) {
    if ((i * i) <= max) {
     newArray.push(i*i);
    }
}
    return newArray; 
}
numSquare(101);

//Prime number solution

//Create a function that returns true if the number passed in is a prime number and false if not.
// Create a function
//return true or false, so boolean
//pass number
//if number is prime then true, prime means divisible by itself and 7, if modulus is not 0
// if number is not prime then false

function prime(num) {
    for (var i = 2; i < num; i++) {
    if (num % i === 0) {
    return true; 
    }  else {
    return false;
}
}
}
prime(101);

// Prime checker solution
// This one was rough due to the callback function.  Pretty confused about i in one function vs i in another function.  Got lots of help. 

function primeChecker(num) {
   if (num === 0 || num == 1) 
        return false;
   if (num === 2) 
        return true;
   for (var i = 2; i < num ;i++) {
       if (num % i === 0) 
        return false;
   } 
   return true;
}


function primes(max) {
   var prime_List = [];
   for (var i = 0; i < max; i ++) {
       if (primeChecker(i) === true) {
           prime_List.push(i);
       }
  }
        return prime_List;
}
primes(101);



