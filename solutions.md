## Solutions

### merge(arr1, arr2)

```
// merge solution

var list1 = [3, 6, 11];
var list2 = [2, 4, 5, 8, 9];
// output should be [2, 3, 4, 5, 6, 8, 9, 11]

var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length > 0 && arr2.length > 0) {

    // compare first element in both arrays
    // remove the smaller number from its original array (using shift)
    // and push that value into result
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }

  }
  // we need concat here b/c there will be a number left over
  // in one of the two arrays
  return result.concat(arr1).concat(arr2);
};

console.log(merge(list1, list2));
```

### letterCount(word)

```
// letterCount solution

var letterCount = function(word) {
  // trim removes spaces
  var letters = word.toLowerCase().trim();
  var result = {};

  for (i = 0; i < letters.length; i += 1) {
    if (result[letters[i]]) {
      result[letters[i]] += 1;
    }
    else {
      result[letters[i]] = 1;
    }
  }
  return result;
};

var myWord = "BANANAS";
console.log(letterCount(myWord));
```

### sillySum(arr)

```
// sillySum solution

var sillySum = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i += 1) {
    total += arr[i] * i;
  }
  return total;
};

var myArray = [1, 2, 3, 4];
console.log(sillySum(myArray));

var anotherArray = [20, 36, 79, 13, 57];
console.log(sillySum(anotherArray));
```

### numSquare(max)

```
// numSquare solution

var numSquare = function(max) {
  var squaresArr = [];

  for (var i = 0; i <= max; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresArr.push(i);
    }
  }
  return squaresArr;
};

console.log(numSquare(100));


// alternate solution

var numSquare = function(max) {
  var squaresArr = [];

  for (i = 1; i * i <= max; i += 1) {
    squaresArr.push(i * i);
  }
  return squaresArr;
};
```

### isPrime(num)
```
// isPrime solution

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(9)); // returns false
console.log(isPrime(7)); // returns true
```

### primes(max)
```
// use the isPrime function from the previous problem, defined again here

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var primes = function(max) {
  for (var i = 2; i <= max; i += 1) {
    if (isPrime(i) === true) {
      console.log(i);
    }
  }
};

primes(100);
```
