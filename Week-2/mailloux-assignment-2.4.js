/*
============================================
; Title:  Mailloux Function Properties 
; Author: Laurie Mailloux  
; Date:   8 December 2019
; Description: How to define and call function properties
;===========================================
*/


/*
expected output - 

  FirstName LastName
  Assignment 2.4
  Today's Date
 Hello my name is Laurie Mailloux!
 Today's date is 12/8/19 and the current temperature is 37 degrees.
 I am 47 years old and my savings account goal is  $10000 dollars.

*/

//program start

const header = require('./Mailloux-header.js'); //header

//function that returns name
function fullName (firstName, lastName){
return firstName + lastName;
}

//function for dateWriter for month year and day
function dateWriter (year, month, day){
    return new Date (); 
}

//function for temperature
function formatNumber (temperature, numberOfFixedPositions){
    return temperature.toFixed (numberOfFixedPositions);
}

//function for age
function convertToInt(age) {
    return parseInt(age);
  }

  //function for savings
function convertToFloat (savings){
    return parseFloat(savings);
}

//output 

console.log(header.display("Laurie", "Mailloux", "Assignment 2.4"));

console.log("Hello my name is"+" "+fullName("Laurie ", "Mailloux")+"!");

console.log("Today's date is "+" "+dateWriter(2019, 12, 8).toLocaleDateString()+" "+"and the current temperature is"+" "+formatNumber(37)+" "+"degrees.");

console.log("I am"+" "+convertToInt("47")+" "+"years old and my savings account goal is"+" "+convertToFloat("10000")+" "+"dollars.");