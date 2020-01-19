/*
============================================
; Title: Assignment 6.2 
; Author: Laurie Mailloux  
; Date:   January 15, 2020
; Description: Exception Handling
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//start program

//header
const header = require("./Mailloux-header.js");

//function that returns name
function fullName(firstName, lastName) {
  return firstName + lastName;
}

//function for dateWriter for month year and day
function dateWriter(year, month, day) {
  return new Date();
}
console.log(header.display("Laurie", "Mailloux", "Assignment 6.2"));

//new line
console.log(
  ""
); 

//code to execute
try {
  var a = 55;
  var b = 10;
  sum = a / b;

  if (sum == 5.5) throw "Bye-Bye";

  console.log(sum);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");
}
//end program