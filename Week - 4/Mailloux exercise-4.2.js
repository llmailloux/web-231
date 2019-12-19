/*
============================================
; Title:  Arrays and Operators 
; Author: Laurie Mailloux  
; Date:   December 17 2019
; Description: Creating a string array
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
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
  console.log(header.display("Laurie", "Mailloux", "Assignment 4.2"));
  
//new line
console.log("");

//array
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//functions
function getFruit(arr) {
    for (var k = 0; k < arr.length; k++){
        console.log(arr[k]);
    }
}

//Output from the getFruit() function
getFruit(fruits);

//end program