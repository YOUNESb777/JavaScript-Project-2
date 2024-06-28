//JavaScript Project 2
//Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// This Example usage 1:
console.log(reverseString("hello"));  // Output: "olleh"
//Count Characters:
function countCharacters(str) {
    return str.length;
}

// This Example usage:
console.log(countCharacters("hello"));  // Output: 5
//Capitalize Words:
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

//This Example usage:
console.log(capitalizeWords("hello world"));  // Output: "Hello World"

//Array Functions
//Find Maximum and Minimum:
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// This Example usage:
console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5
console.log(findMin([1, 2, 3, 4, 5]));  // Output: 1

//Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// This Example usage:
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15

//Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
}

//This Example usage:
let nums = [1, 2, 3, 4, 5];
console.log(filterArray(nums, num => num % 2 === 0));  // Output: [2, 4]

//Mathematical Functions
//Factorial:
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

//This Example usage:
console.log(factorial(5));  // Output: 120

//Prime Number Check:
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

//This Example usage:
console.log(isPrime(11));  // Output: true
console.log(isPrime(15));  // Output: false

//Fibonacci Sequence:
function fibonacciSequence(count) {
    let fib = [0, 1];
    for (let i = 2; i < count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, count);
}

//This Example usage:
console.log(fibonacciSequence(5));  // Output: [0, 1, 1, 2, 3]






