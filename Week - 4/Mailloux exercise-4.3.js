/*
============================================
; Title:  Filtering 
; Author: Laurie Mailloux  
; Date:   December 17 2019
; Description: Adding and iterating
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
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
  console.log(header.display("Laurie", "Mailloux", "Assignment 4.3"));

  //new line
console.log("");
  
//array
var vehicles = ["Wrecker", "Motorcycle", "Van", "Dump Truck", "Car"];

//functions
function getValue(arr, val){
for (var k = 0; k < arr.length; k++){
  if (arr[k] === val)
  console.log(arr[k]);
}

} 
//output
console.log("-- Displaying Array Items --");
for (var x = 0; x < vehicles.length; x++) {
  console.log(vehicles[x]);
}
//new line
console.log("");

console.log("-- Selected Value --");

getValue(vehicles, "Wrecker");

//new line
console.log("");

console.log("-- Selected Value --");
getValue(vehicles, "Dump Truck");


//end program