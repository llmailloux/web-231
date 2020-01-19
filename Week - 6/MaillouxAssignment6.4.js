/*
============================================
; Title: Assignment 6.4 
; Author: Laurie Mailloux  
; Date:   January 19, 2020
; Description: Nested Object Literals
;===========================================
*/

/*
  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//start program

//header
const header = require("./Mailloux-header.js");

console.log(header.display("Laurie", "Mailloux", "Assignment 6.4"));

//new line
console.log("");

//object literal
var ticket = {
  id: 105,
  name: "Help Desk Support",
  dateCreated: new Date(),
  priority: "High",
  person: {
    id: 200,
    firstName: "Bob",
    LastName: "Jones",
    jobTitle: "Programmer I"
  }
};

//output
console.log(
  "Ticket " +
    ticket.id +
    " was created on " +
    ticket.dateCreated.toLocaleDateString() +
    " and assigned to employee " +
    ticket.person.firstName +
    " " +
    ticket.person.LastName +
    " " +
    "(" +
    ticket.person.jobTitle +
    ")."
);
//end program 