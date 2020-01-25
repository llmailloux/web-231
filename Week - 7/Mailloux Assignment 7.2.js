/*
============================================
; Title: Assignment 7.2 
; Author: Laurie Mailloux  
; Date:   January 21, 2020
; Description: Constructor Functions
;===========================================

Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 7.2"));

//new line
console.log("");

//assign variable
let allEmployees = [
  new employee("1", "Thomas", "Edison", "Software Engineer"),
  new employee("2", "Benjamin", "Franklin", "Programmer"),
  new employee("3", "Nikola", "Tesla", "Project Manager"),
  new employee("4", "Charles", "Babbage", "Product Manager"),
  new employee("5", "Alexander", "Bell", "Business Analyst")
];

//id, first name, last name, and title
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//output
allEmployees.forEach(person => {
  console.log(person.id, person.firstName, person.lastName, person.title);
});
//end program
