/*
============================================
; Title:  Predicates 
; Author: Laurie Mailloux  
; Date:   December 17 2019
; Description: predicates/filter/sorting
;===========================================
*/

/*
  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

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
console.log(header.display("Laurie", "Mailloux", "Assignment 4.4"));

//new line
console.log("");

//array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//function
function getState(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

var foundState = states.filter(element => getState(element, "Iowa"));

console.log("-- ORIGINAL ARRAY --");
for (var x = 0; x < states.length; x++) {
  console.log(states[x]);
}

//new line
console.log("");

var sortedStates = states.sort();

console.log("-- SORTED ARRAY --");
for (var x = 0; x < sortedStates.length; x++) {
  console.log(sortedStates[x]);
}

//new line
console.log("");

console.log("-- SELECTED VALUE --");
for (var x = 0; x < foundState.length; x++) {
  console.log(foundState[x]);
}
