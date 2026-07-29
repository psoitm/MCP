let arr = [2, 5, 6, 8, 11];
//filter and reduce and map methods
// 1. Filter method - creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = arr.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
//map method - creates a new array with the results of calling a function for each element in the original array.
let doubledNumbers = arr.map(function (num) {
    return num * 3;
});
console.log(doubledNumbers); // Output: [4, 10, 12, 16, 22]
//reduce method - executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr.reduce(function (accumulator, num) {
    return accumulator + num;
}, 0);
console.log(sum); // Output: 32


sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 = sum + arr[i];
}