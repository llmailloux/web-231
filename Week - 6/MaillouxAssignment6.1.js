/*
============================================
; Title: Assignment 6.1 
; Author: Laurie Mailloux  
; Date:   January 7, 2020
; Description: find 2 errors
;===========================================
*/

/*
expected output:

  FirstName LastName
  Assignment 6.4
  Today's Date

*/

//start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 6.1"));

//new line
console.log("");

//assign variable
var person = {firstName: "Benard", lastName: "Johns", age: "23", eyeColor: "green"};

console.log("My name is " + person.firstName + " " + person.lastName + ", I am " + person.age + " " + "years old and have " + person.eyeColor + " " + "eyes.")

try {
    var a = 1997;
    var b = 2020;
    sum = ba;
  
 if (sum==23) throw "right year";
 
     console.log(sum);
 
 } catch (err) {
 
     console.log("Catch clause: " + err);
 
  finally {
 
     console.log("Better luck next time");
 
 }