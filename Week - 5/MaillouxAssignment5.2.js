/*
============================================
; Title:  ES5 Built in Functions 
; Author: Laurie Mailloux  
; Date:   January 7, 2020
; Description: Array of favorite foods
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

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
  console.log(header.display("Laurie", "Mailloux", "Assignment 5.2"));

  //new line
console.log("");

//assign variable
var food = ["Pizza", "Salad", "Tacos", "Chicken", "Fruit"];

//call function
food.forEach(function(food){
console.log(food);
}); 

// end program2