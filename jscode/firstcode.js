//console.log("Hello Javascript!");
// a = "hhjhjhsjdjsadhadhd";
// console.log(a);
// This is a single line comment
/*This is a multi-line comment
This is a multi-line comment
This is a multi-line comment
This is a multi-line comment
*/
// Variables in JavaScript
//var nameofvariable=value
// var studentName = "John";
// let age = 30;
// var phone = 1234567890;
// studentName = "Sandeep";
// age = 25;
// phone = 9876543210; // This will cause an error because phone is a constant
// console.log(studentName);
// console.log(age);
// console.log(phone);

// Data Types in JavaScript
// String
// let name = "true";
// //Number
// let age = 30;
// //Boolean
// let isStudent = true;
// //Null
// let student = null;
// //Undefined
// let address;
// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(student);
// console.log(address);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof student);
// console.log(typeof address);



// console.log(typeof a);


// Operations in JavaScript
// Arithmetic Operators
// let a = 10;
// let b = 5;
// let c = a + b; // Addition
// let d = a - b; // Subtraction
// let e = a * b; // Multiplication
// let f = a / b; // Division
// let g = a % b; // Modulus
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// // Assignment Operators
// let x = 10;
// x += 5; // x = x + 5
// x -= 5; // x = x - 5
// x *= 5; // x = x * 5
// x /= 5; // x = x / 5
// x %= 5; // x = x % 5
// console.log(x);
// Comparison Operators
// let p = 5;
// let q = 5;
// // console.log(p == q); // Equal to
// // console.log(p === q); // Strict equal to
// console.log(p != q); // Not equal to
// console.log(p > q); // Greater than
// console.log(p < q); // Less than
// console.log(p >= q); // Greater than or equal to
// console.log(p <= q); // Less than or equal to

// Logical Operators
//  let a = false;
// let b = false;
// console.log(a && b); // Logical AND
// console.log(a || b); // Logical OR
// console.log(!a); // Logical NOT

// let a = 10;
// let b = 5;
// // let c = a++; //10
// // let d = ++b;  //6
// // let e = a;   //11
// // console.log(c);
// // console.log(d);
// // console.log(a);
// let x = a++ + ++b + ++a + ++b;
// //10+6+12+7=35
// console.log(x);

//Conditional Statements in JavaScript
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }
//else if
// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 70) {
//     console.log("Grade C");
// } else if (marks >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }

//Switch case
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//Ternary operators  in Js
// let age = 18;
// let result = (age >= 18) ? "You are an adult." : "You are a minor.";
// // console.log(result);
// //Ternary operators  in Js  for multiple conditions
// // let marks = 85;
// let grade = (marks >= 90) ? "Grade A" : (marks >= 80) ? "Grade B" : (marks >= 70) ? "Grade C" : (marks >= 60) ? "Grade D" : "Grade F";
// console.log(grade);
// Loops in JavaScript
// For loop
//While loop

// while (true) {
// console.log("This will run infinitely");
// }
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// Do-while loop
// let j = 5;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);
// For loop
// for (let k = 0; k < 5; k++) {
//     console.log(k);
// }

//Sum of first 5 natural numbers using for loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // sum = sum + i
// }
// console.log(sum);

// list of Loop programs
// 1. Sum of first 5 natural numbers
// 2. Print multiplication table of a number
// 3. Find factorial of a number
// 4. Check if a number is prime
// 5. Reverse a number
// 6. Find sum of digits of a number
// 7. Find product of digits of a number
// 8. Check if a number is palindrome
// 9. Print Fibonacci series
// 10. Find GCD of two numbers

//Functions in JavaScript
// function functionName(parameters) {
//     // function body
// }
// function add(a, b, c) {
//     return a + b;
// }
// let result = add(51, 10);
// console.log(result);
// function greet(name) {
//     console.log("Hello " + name);
// }
// greet("Sandeep");
// greet("John");
// greet("Alice");
//Anonymyse function
// let greet = function (name) {
//     console.log("Hello " + name);
// }
// greet("Sandeep");
// greet("John");
// greet("Alice");
//Arrow function
// let greet = (name) => {
//     console.log("Hello " + name);
// }
// greet("Sandeep");
// greet("John");
// greet("Alice");

// let add = (a, b) => a + b;
// let result = add(51, 10);
// console.log(result);
//recursive function
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let result = factorial(5);
// console.log(result);
//Array in JavaScript
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// arr.push("Hello");
// arr.pop();
// arr.shift(); // removes the first element from the array
// console.log(arr);
// all array methods
// 1. push() - adds an element to the end of the array
// 2. pop() - removes the last element from the array
// 3. shift() - removes the first element from the array
// 4. unshift() - adds an element to the beginning of the array
// 5. indexOf() - returns the index of the first occurrence of an element in the array
// 6. lastIndexOf() - returns the index of the last occurrence of an element in the array
// 7. includes() - returns true if an element is present in the array, otherwise false
// 8. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// 9. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// 10. forEach() - executes a provided function once for each array element
// 11. map() - creates a new array populated with the results of calling a provided function on every element in the calling array
// 12. filter() - creates a new array with all elements that pass the test implemented by the provided function
// 13. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// 14. sort() - sorts the elements of an array in place and returns the sorted array
// 15. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.



//Array declaration
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = new Array();
// arr2.push(1);
// arr2.push(2);
// arr2.push(3);
// arr2.push(4);
// arr2.push(5);
// // console.log(arr1);
// console.log(arr2);


//String in JavaScript
// let str = "Hello World!";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(6));
//reverse a string
// let str = "Hello World!";
// let reversedStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr = reversedStr + str.charAt(i);
// }
// console.log(reversedStr);
// let str = "Hello World! Welcome to JavaScript.";
// // console.log(str.split("").reverse().join(""));
// let test = str.split(" ");
// console.log(test[4]);
// console.log(str.includes("JavaScript"))
//String methods in JavaScript
// 1. length - returns the length of the string
// 2. toUpperCase() - converts the string to uppercase
// 3. toLowerCase() - converts the string to lowercase
// 4. charAt(index) - returns the character at the specified index
// 5. indexOf(substring) - returns the index of the first occurrence of the specified substring, or -1 if not found
// 6. lastIndexOf(substring) - returns the index of the last occurrence of the specified substring, or -1 if not found
// 7. includes(substring) - returns true if the string contains the specified substring, otherwise false
// 8. split(separator) - splits the string into an array of substrings based on the specified separator and returns the array
// 9. replace(searchValue, newValue) - returns a new string with the first occurrence of the specified search value replaced by the new value
// 10. replaceAll(searchValue, newValue) - returns a new string with all occurrences of the specified search value replaced by the new value
// 11. trim() - removes whitespace from both ends of the string and returns a new string
// 12. substring(startIndex, endIndex) - returns a portion of the string between the specified start index and end index (end index not included)
// 13. substr(startIndex, length) - returns a portion of the string starting from the specified start index and having the specified length
// 14. concat(string1, string2, ...) - concatenates the specified strings and returns a new string
// 15. startsWith(substring) - returns true if the string starts with the specified substring, otherwise false
// 16. endsWith(substring) - returns true if the string ends with the specified substring, otherwise false
// 17. repeat(count) - returns a new string that is the result of repeating the original string the specified number of times
// 18. match(regex) - returns an array of all matches of the specified regular expression in the string
// 19. search(regex) - returns the index of the first match of the specified regular expression in the string, or -1 if not found
// 20. toString() - returns a string representation of the string object  
let s1 = new String("Hello World!");
let s2 = "Hello World!";
console.log(s1);
console.log(typeof s1);
console.log(typeof s2);
//String is a primitive data type in JavaScript, but when we create a string using the String constructor, it creates a string object. The typeof operator returns "object" for string objects and "string" for string literals.
// String vs Object in JavaScript
// // 1. String is a primitive data type, while Object is a complex data type.
// // 2. String is immutable, while Object is mutable.
// // 3. String can be created using string literals or the String constructor, while Object can be created using object literals or the Object constructor.
// // 4. String has built-in methods for manipulating strings, while Object has built-in methods for manipulating objects.
// // 5. String is used to represent text, while Object is used to represent real-world entities with properties and behaviors.
//List of String programs
// 1. Reverse a string
// 2. Check if a string is a palindrome
// 3. Count the number of vowels in a string
// 4. Count the number of words in a string
// 5. Find the longest word in a string
// 6. Replace a word in a string with another word
// 7. Check if a string contains a substring

// List of array and string programs
// 1. Reverse an array
// 2. Check if an array is a palindrome
// 3. Count the number of occurrences of an element in an array
// 4. Find the largest element in an array
// 5. Find the smallest element in an array
// 6. Sort an array in ascending order
// 7. Sort an array in descending order
// 8. Remove duplicates from an array
// 9. Find the common elements between two arrays
// 10. Merge two arrays into one array
// 11. Reverse a string using an array
// 12. Check if a string is a palindrome using an array
// 13. Count the number of occurrences of a character in a string using an array
// 14. Find the longest word in a string using an array
// 15. Replace a word in a string with another word using an array  












