"use strict";
// // const greet = (name : String , age: number , surname : String , isOld : boolean) : string =>
// //   {
// //     if(isOld ===false){
// //        return `Hello,${name}, welcome to TS CodeTribe and ${name} 's age is ${age} and her surname is ${surname}`
// //     }else{
// //        console.log("start again")
// //     }
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const employee1 = {
    fullName: ["Justin", "Mahwibila"],
    age: 25,
    department: "ICT",
    skills: ["HTML", "Java", "Coding"],
    isActive: true
};
const employee2 = {
    fullName: ["Khumo", "Mokoena"],
    age: 19,
    department: "Education",
    skills: ["listening", "Math", "Teaching"],
    isActive: false
};
const logEmployee = (employee) => {
    console.log('---Employee Details---');
    // Handle fullName separately
    const [firstName, lastName] = employee.fullName;
    console.log(`fullName : ${firstName} ${lastName}`);
    // Handle other properties with proper typing
    const { fullName } = employee, rest = __rest(employee, ["fullName"]);
    Object.keys(rest).forEach((key) => {
        const value = rest[key];
        if (key === 'skills') {
            console.log(`${key} : ${value.join(" ")}`);
        }
        else if (key === 'isActive') {
            console.log(`${key} : ${value ? "Yes" : "No"}`);
        }
        else {
            console.log(`${key} : ${value}`);
        }
    });
};
logEmployee(employee1);
logEmployee(employee2);
