//!  Wk3-01 ===== Arithmetic ===== Fill in the body of each function with the code required
var add = function(num1, num2) {
return num1 + num2;
};
var subtract = function(num1, num2) {
return num1 - num2;
};
var multiply = function(num1, num2) {
return num1 * num2;
};
var divide = function(num1, num2) {
return num1 / num2;
};

//! Wk3-02 ===== Odd or Even ===== Write code to return the string "odd" if `num` is an odd number and return the string "even" if `num` is an even number
var oddOrEven = function(num) {
if (num % 2 === 0) {
return "even";
} else { 
    return "odd";
}
};
//! OR you can also use ternary operator
var oddOrEven = function(num) {
    return (num % 2 === 0) ? "even" : "odd";
};


//! Wk3-03 ===== Log Nums ===== Write code to print all numbers from 1 to `num`. Assume `num` will be a positive number
var logNums = function(num) {
for (var i = 1; i <= num; i++) {
console.log(i);
}
};
//! OR you can also use while loop
 var logNums = function(num) {
    let i = 1;
    while (i <= num) {
        console.log(i);
        i++;
    }
};

//! Wk04-01 ===== Log Even Nums ===== Write code to print all even numbers from 0 to `num`. Assume `num` will be a positive number
var logEvenNums = function(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
//! OR can also increment by 2
var logEvenNums = function (num) {
  for (var i = 0; i <= num; i += 2) {
    console.log(i);
  }
};


//! Wk04-02 ===== Countdown ===== Write code to print all numbers from `num` down to 1. You may assume `num` will be a positive number
var countdown = function(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
};


//! Wk04-03 ===== Sum Array ===== Write code to add all the numbers in `arr` and return the total
function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};
//! OR with While loop
function printNumbers(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
}

//Running Sum
var runningSum = function(nums) {
  let result = [];
  let sum = 0;
  for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      result.push(sum);
  }
    return result;
};


//! Wk05-01 ===== Fizz Buzz ===== 
// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number
function fizzBuzz(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 15 === 0) {
            console.log("FizzBuzz");
        } else if (numbers[i] % 3 === 0) {
            console.log("Fizz");
        } else if (numbers[i] % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(numbers[i]);
        }
    }
};


//! Wk05-02 ===== Max Run ===== Write code to return the largest number in the given array
function findLargestNum(arr) {
    var largestNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
};
//! OR using the Math.max()
function findLargestNum(arr) {
   return Math.max(...arr);
};
//! OR spread operator  (I haven't tested this one)
function findLargestNum(arr) {
    return Math.max.apply(null, arr);
};


//! Wk05-03 ===== Vowel Count ===== Write code to return the the number of vowels in `str`
var vowelCount = function(str) {
var vowels = "aeiouAEIOU";
var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
};
//! OR .match() method  
// `[aeiou]` is a set of vowels (lower and upper case), 
// g stands for global, meaning that this will search for all occurrences and i for ignore case meaning it will match both lowercase and uppercase characters
// this expression will look for any occurence of vowels (capital or not) in the string, 
// the match method will return an array that include all the vowels if any in the string. 
// And by counting the length of the array we can get the number of vowels in the string.
var vowelCount = function(str) {
    var matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};


//! Wk06-01 ===== Is Palindrome ===== Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
// The function in the loop is iterating over charactersArr and checking if each character is in the validCharacters array 
// (which is defined as all the lowercase alphabet letters). If it is, it is pushed to the lettersArr array, if not it is ignored. 
// Then the lettersArr is joined together and compared to the reverse of it if they are equal this means that the input string is a palindrome, 
// if not then it's not a palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    var charactersArr = str.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    return lettersArr.join('') === lettersArr.reverse().join('');
};


//! Wk06-02 ===== Factorial ===== Write code to create a function that returns the factorial of `num`; factorial = n(n-1)
// using a loop
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;  // this is the multiplication operator  (result * i)
    }
    return result;
};
//! OR 
// RECURSION can be used to have the function call itself until the base reaches 1
// Here's an example of how the recursion works for the input num=4:
// the first time the function is called with num=4, it will check if the num is 
// equal to 1 and return 1 as the base case is reached, but it's not so it will call itself with num-1 = 3 as an argument.
// the second time the function is called with num=3, it will check again if the num is 
// equal to 1 and return 1 as the base case is reached, but it's not so it will call itself with num-1 = 2 as an argument.
// the third time the function is called with num=2, it will check again if the num is 
// equal to 1 and return 1 as the base case is reached, but it's not so it will call itself with num-1 = 1 as an argument.
// the forth time the function is called with num=1, it will check again if the num is 
// equal to 1 and return 1 as the base case is reached, so the recursion stops.
// And after all these recursive calls, the function will return the result of each 
// recursive call multiplied by the current num and it will return the factorial of 4 = 432*1 = 24. 
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
};


//! Wk06-03 ===== Title Case  =====  Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
function capitalizeWords(str) {
    // split the string into words
    let words = str.split(" ");
    // loop through the words and capitalize the first letter
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // join the words back together and return the result
    return words.join(" ");
}
let originalString = "hello world";
console.log(capitalizeWords(originalString)); // "Hello World"


//! Wk 09-01 ===== Character Count ===== Write code to create a function that accepts a string and returns 
// an object containing the number of times each character appears in the string
function countChars(str) {
    // create an empty object to store the character count
    let charCount = {};
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // if the character is already in the object, increment its count
        if (char in charCount) {
            charCount[char]++;
        } else {
            // otherwise, add the character to the object and set its count to 1
            charCount[char] = 1;
        }
    }
    return charCount;
};
let originalString1 = "hello world";
console.log(countChars(originalString1)); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }


//! Wk 09-02 ===== Product of Largest Two ===== Write code to create a function that accepts an 
// array of numbers, finds the largest two numbers, and returns the product of the two
function largestTwoProduct(numbers) {
    // sort the array in descending order
    numbers.sort((a, b) => b - a);
    // multiply the first two elements in the array
    return numbers[0] * numbers[1];
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(largestTwoProduct(numbers)); // 36
//! OR with a for loop
function largestTwoProduct(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }
    return largest * secondLargest;
};


//! Wk09-03 ===== Camel Case ===== Write code to create a function that accepts a string and returns the string in camelCase
var camelCase = function(str) {
    var result = "";
    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split("");
        if (i > 0) {
        letters[0] = letters[0].toUpperCase();
        }
        result += letters.join("");
    }
    return result;
  };
//! OR This function uses Regular expression /[\s|_|-]+/ to split the string into words, 
// this regular expression will match spaces, underscores or dashes as word delimiters.
// In the loop, it takes the first word and lowercases it, for the rest of the words it 
// takes the first character capitalizes it and append it to the previous word and lowercases the rest.
function toCamelCase(str) {
    let words = str.split(/[\s|_|-]+/);
    let camelCased = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return camelCased;
}
let originalString2 = "hello_world";
console.log(toCamelCase(originalString2)); // "helloWorld"


//! Wk10-01 ===== Linear Search ===== Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods
function findTarget(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
};
let numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // EXAMPLE
let target = 5;
console.log(findTarget(numbArray, target)); //4
//! OR Array.prototype.indexOf() method returns the first index which a given element could be found
function findTarget(numbers, target) {
    return numbers.indexOf(target);  // will return -1 if target not found
};


//! Wk10-02 ===== Is Unique ===== Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`
var isUnique = function(arr) {
    var numMap = {};
    for (var i = 0; i < arr.length; i++) {
      var currentNumber = arr[i];
      if (numMap[currentNumber] === true) {
        return false;
      }
      numMap[currentNumber] = true;
    }
    return true;
  };
//! OR using .Set object method
// This function uses the Set object to store unique elements of the input array. 
// The Set object will automatically remove any duplicates, so if the size of the Set is the 
// same as the input array, it means there are no duplicates and it returns true, otherwise it returns false.
function noDuplicates(nums) {
    let numSet = new Set(nums);
    return numSet.size === nums.length;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(noDuplicates(nums)) // true


//! Wk10-03 ===== Is Anagram ===== Write code to create a function that accepts two strings
// Anagram - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// In this function, it first create character count object of both the input strings, by lowercasing the 
// strings and iterating over them and counting the characters, then it compares the two character count objects 
// and if any character count is different it returns false, otherwise it returns true.
function areAnagrams(str1, str2) {
    let charCount1 = {};
    let charCount2 = {};
    //create character count object for both strings
    for (let char of str1.toLowerCase()) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for (let char of str2.toLowerCase()) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    //compare the character count objects
    for (let key in charCount1) {
        if (charCount1[key] !== charCount2[key]) {
            return false;
        }
    }
    return true;
};
let str1 = "cinema";
let str2 = "iceman";
console.log(areAnagrams(str1, str2)) // true


//! Wk11-01 ===== Most Songs In Playlist ===== Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
function maxSongs(songs) {
    // Sort the list of songs in non-descending order
    songs.sort((a, b) => a - b);
    // Initialize a variable to store the total duration of the songs in the playlist
    let totalDuration = 0;
    // Initialize a variable to store the number of songs in the playlist
    let numSongs = 0;
    // Iterate over the list of songs
    for (let i = 0; i < songs.length; i++) {
        // If adding the current song to the playlist will not exceed 60 minutes
        if (totalDuration + songs[i] <= 60) {
            // Add the currentsong to the playlist and update the total duration
            totalDuration += songs[i];
            numSongs++;
        } else {
            // If adding the currentsong to the playlist will exceed 60 minutes,
            // stop iterating and return the number of songs in the playlist
            return numSongs;
        }
    }
    // Return the number of songs in the playlist
    return numSongs;
};


//! Wk11-02 ===== Is Perfect Square ===== Write code to create a function that accepts a number and returns 
// true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method
function isPerfectSquare(n) {
    if (n<0) return false;
    let i=1;
    while (i*i <= n) {
        if (i*i === n) {
            return true;
        }
        i++;
    }
    return false;
}
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(9)); // true
console.log(isPerfectSquare(10)); // false
console.log(isPerfectSquare(-9)); // false
//! OR Math.sqrt
// add check to make sure input is not negative
function isPerfectSquare(n) {
    if(n<0) return false;
    let square_root = Math.sqrt(n);
    return (square_root**2 === n) 
}
console.log(isPerfectSquare(-4)); // false


//! Wk11-03 ===== Array Search ===== Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array
function countX(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "X") {
                count++;
            }
        }
    }
    return count;
};
let arr = [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']];
console.log(countX(arr)); // 6
//! OR use .reduce() method and spread operator
// where acc is the accumulator, and curr is the current value
function countX(array) {
    return array.reduce((acc, curr) => acc + curr.filter(val => val === 'X').length, 0)
}
let arrayX = [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']];
console.log(countX(arrayX)); // 6
let arr1d = ['X', 'O', 'X','X','X'];
console.log(countX(arr1d)); // 3
// acc is being used to keep track of the count of the elements 'X' and curr is the current 
// element of 2D array that reduce method is currently processing. filter method filters out all the 
// elements of the current array which are equal to 'X', length of that array is added to the accumulator.
// In short, acc is used as a container to hold the running total and curr is used to refer to the current 
// element of the array being processed by the reduce() method.


// convert boolean to string
function booleanToString(b){
return b.toString();
}
