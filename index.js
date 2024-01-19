// ------------- Declaring Variables -------------

var message = "Hello World"
var age = 20
let greeting = "Happy Birthday" // changeable values
const PI = 3.14 // Unchangeable values


// ----------------- Data Types --------------------

// Primitive Data Types

let messages = "Hello World" // String
let ages = 10 // Number
let isBoolean = true // Boolean

// Reference Types 

let person  = { // Objects
    name: "John Doe",
    age: 21,
}

// Two ways to access data in objects 
// -- (person.name, person.age) dot notation
// -- (person["name"], person["age"]) square bracket notation

let fruits = [  // Arrays
    "Apple",
    "Orange",
    "Durian"
]

// Access to array is index and also start with 0

let add = function (a, b) { // Functions
    return a + b
}

console.log(add(3, 5))