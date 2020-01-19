/*
============================================
; Title: Assignment 6.3 
; Author: Laurie Mailloux  
; Date:   January 7, 2020
; Description: object literals
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
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
console.log(header.display("Laurie", "Mailloux", "Assignment 6.3"));

//new line
console.log("");

var ticket = {
    name: "Help Desk Support",
    requester: "Bob Jones",
    id : 101
};
console.log ("{id: " + ticket.id + ", name: " + ticket.name + ", requestser: " + ticket.requester + "}")

//end program