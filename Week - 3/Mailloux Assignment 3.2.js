/*
============================================
; Title:  Pattern Matching Functions 
; Author: Laurie Mailloux  
; Date:   December 10 2019
; Description: Utilizing pattern matching functions
;===========================================
*/

//program start

/*
Expected output
firstName lastName
Exercise 3.2
Today's date

//ouput from the match() function
false
true

//output from the if...else blocks
Truck and Car do not match!
Bike and Bike do match!
Four and Three do not match!

*/

//header
const header = require("./Mailloux-header.js");

// 6 test variables
var testVar1 = "Boat";
var testVar2 = "Airplane";
var testVar3 = "Train";
var testVar4 = "Car";
var testVar5 = "Motorcycle";
var testVar6 = "Truck";

//function that returns name
function fullName(firstName, lastName) {
  return firstName + lastName;
}

//function for dateWriter for month year and day
function dateWriter(year, month, day) {
  return new Date();
}
console.log(header.display("Laurie", "Mailloux", "Assignment 3.2"));

// functions

function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

// does not match
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

// does match
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

//output from the match () function
console.log[match("a", "b")];
console.log[match(2, 2)];

//conditions "if...else" satements.  Include checks for all six (6) test variables
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}

// end prog
