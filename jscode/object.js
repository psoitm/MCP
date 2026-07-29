//Java script objects
// An object is a collection of properties, where each property is a key-value pair.
// Objects can also have methods, which are functions that are associated with the object.  
// Objects are used to store and organize data in a structured way, and they are a fundamental part of JavaScript programming.

// // Example of an object 
// let person = {
//     name: "John",
//     age: 30,
//     phone: "123-456-7890",
//     city: "New York",
//     greet: function () {
//         console.log("This my First Object");
//     }
// }

// // console.log(person.name);
// // console.log(person.greet());
// //  Output: 31
// // //Object inbuilt methods
// // // 1. Object.keys() - returns an array of the object's own property names

// // console.log(Object.keys(person)); // Output: ["name", "age", "city", "greet"]
// // // 2. Object.values() - returns an array of the object's own property values
// // console.log(Object.values(person)); // Output: ["John", 30, "New York", function() { ... }]
// // 3. Object.entries() - returns an array of the object's own key-value pairs
// // console.log(Object.entries(person));
// // Output: [["name", "John"], ["age", 30], ["city", "New York"], ["greet", function() { ... }]]

// let person1 = new Object();
// person1.name = "Alice";
// person1.age = 25;
// person1.city = "Los Angeles";
// console.log(person1); //Output: { name: "Alice", age: 25, city: "Los Angeles" }

// let person2 = Object.create(person);
// person2.name = "Bob";
// person2.age = 35;
// console.log(person2);



let per = new Person4();
console.log(per); // Output: { name: "Charlie", age: 40, city: "Chicago" }