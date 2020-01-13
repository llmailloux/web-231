/*
============================================
; Title: Object Collections 
; Author: Laurie Mailloux  
; Date:   January 7, 2020
; Description: 5 Composers 
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
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
console.log(header.display("Laurie", "Mailloux", "Assignment 5.3"));

//new line
console.log("");

//start program
//assign variables
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];
//output

//call function
console.log("-- COMPOSERS --");
composers.forEach(function(composer) {
  console.log(
    "Last Name: " +
      composer.lastName +
      ", Genre: " +
      composer.genre +
      ", Rating: " +
      composer.rating
  );
});
