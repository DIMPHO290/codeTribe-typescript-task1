// const greet = (name : String , age: number , surname : String , isOld : boolean) : string =>
//   {
//     if(isOld ===false){
//        return `Hello,${name}, welcome to TS CodeTribe and ${name} 's age is ${age} and her surname is ${surname}`
//     }else{
//        console.log("start again")
//     }
// }
// console.log(greet("Dimpho" , 23 ,"Mahwibila" , false));
"use strict";
const greet = (name) => {
    return `${name}`;
};
console.log(greet("Dimpho"));
//Basic Type
//Number
let age = 25;
let price = 135.8;
let hex = 0xff;
//String
let firstName = "Dimpho";
let greeting = `Hello ,${firstName}`;
//Boolean
let isLoggedIn = true;
let hasPermission = false;
//Example
const showBoolean = (name) => {
    return `${name}`;
};
console.log(showBoolean(isLoggedIn));
//Array
//The ways to define arrays
//first
let numbers = [1, 2, 3, 4];
let fruits = ["Apples", "Banana", "Orange"];
//Example
const showArray = (name) => {
    return name;
};
console.log(showArray(numbers));
//second way
let scores = [100, 10, 25];
//Tuple
//Arrays with fixed length and types in specific postion
let user = ["Dimpho", 23];
const showTuple = (name) => {
    return name;
};
console.log(showTuple(user));
//object
//Basic Object type
let person = { firstName: "Dimpho", age: 23 };
const showObject = (name) => {
    return name;
};
console.log("My name is ", person.firstName);
console.log(" Age ", person.age);
let studentTut = { name: "Dimpho", score: 56 };
function displayStudent(student) {
    console.log(student.name);
}
displayStudent(studentTut);
let myCar = { brand: "bmw", year: 2023, isNew: true };
function displayCarBrand(car) {
    console.log(car.brand);
}
displayCarBrand(myCar);
