/*
=================================================
; Title:  Exercise 3.4
; Author: Laurie Mailloux
; Date:   15 December 2019
; Modified By: 
; Description: Loops
;================================================
*/

/*
// ouput 
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
 */

//start program

//header
const header = require("./Mailloux-header.js");

//function for dateWriter for month year and day
function dateWriter(year, month, day) {
  return new Date();
}
console.log(header.display("Laurie", "Mailloux", "Assignment 3.4"));

// declare variable
var number;
number = 6;

//title
console.log("--Do the Numbers match Game--");

/*
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 */

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// functions
function match(arg1, arg2) {
  if (arg1 === arg2) return true;
  else {
    return false;
  }
}

// does not match
function logMismatch(arg1, arg2) {
  console.log(arg1 + " does not match " + arg2 + "!");
}

// does match
function logMatch(arg1, arg2) {
  console.log(arg1 + " does match " + arg2 + "!");
}

//for loop
for (var i = 0; i < 8; i++) {
  random = randomNumber();
  if (number === random) {
    logMatch(number, random);
  } else {
    logMismatch(number, random);
  }
}
//end program
