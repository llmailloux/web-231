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

   -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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
console.log(header.display("Laurie", "Mailloux", "Assignment 5.4"));

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
//call function
console.log("-- COMPOSER BY RATING --");
console.log("");
composers.map(function(composer) {
  console.log(
       "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName + "\n"
  );
});
console.log("-- COMPOSER BY GENRE --");
console.log("");
composers.map(function(composer) {
    console.log(
         "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName + "\n"
    );
  });
