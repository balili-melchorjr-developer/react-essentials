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

// ----------------- Operators --------------------

// Arithmetic Operators + - * / %

let x = 12
let y = 11
let word = "Math"

// Comparison Operators > < >= <= === !== "This is strict type === !=="

let isGreater = y >= x
let isMatch = "Math" == word

// Logical Operators && || !

// ----------------- Ternary Operators -------------------- "Short line if-else statement"

// conditon ? true : false

let isHot = true
let condition = isHot ? "It is very hot" : "No, it is cold"

// Nested if else statement 

let grade = 70
let mark = ""

if (grade >= 90) {
    mark = "A"
} else if (grade >= 80) {
    mark = "B"
} else if (grade >= 70) {
    mark = "C"
} else {
    mark = "F"
}

const finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F"

// ----------------- Destructuring -------------------- "Unpack Values in Array and Objects"

const objects = ["table", "phone", "apple", "test", 1]
const [furniture, phone, fruit, test, digits] = objects

const persona = {
    name: "John Doe",
    old: 21, 
    birthdate: new Date(),
    status: "Single"
}

const {name, old, birthdate, status} = persona

console.log(name, old, birthdate, status)

// ----------------- Spread Operators -------------------- "Itirables like Array and Objects"

const body = ["Head", "Knees",]
const completeBody = ["Toes", "Shoulder", ...body]

const persons = {
    name: "John Doe",
    olds: "21"
}

const contactPerson = {
    contactNumber: "092099999",
    ...persons
}

const numbers = [1, 2, 3]

function sum(a, b, c) {
    return a + b + c
}

// ---------------------- Array Methods -----------------------------

let salad = ["Macaroni", "Nestle Cream", "Condensed Milk", "Cheese"]

// 1) Push - inserts an element into an array : Notes always add on last item

salad.push("Kaong")

// 2) Pop - the easiest way to remove a single element from an array : Notes always delete on last item

salad.pop()

// 3) Splice - method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place
// splice(startnumber, deleteCount= delete items after startnumber inserted, values)

const months = ["Jan", "March", "April", "June"]

// months.splice(1, 0, "Feb")
// months.splice(2, 3, "May")


// 4) Includes - method determines where an array includes
// a certain value among its entries, returning true or false as appropriate.

console.log(months.includes("Jan"))

// 5) Slice - The slice() method returns a shallow copy of a
// portion of an array into a new array object selected from start to end
// Notes: not modified original array, accepted negative values
// https://www.freecodecamp.org/news/the-javascript-array-handbook/

console.log(months.slice(1,))




