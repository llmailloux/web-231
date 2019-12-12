/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/
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
console.log(header.display("Laurie", "Mailloux", "Assignment 3.3"));

//variable
var eventKeyCode = 13;

//switch statement 

switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The space bar was pressed.");
    break;
  case 8:
    console.log("The backspace / delet key was pressed.");
    break;
  default:
    console.log("Unrecognized key.");
    break;
}

/*
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/
