/*
============================================
; Title:  Discussion 6.1
; Author: Emily Richter
; Date:   16 January 2020
; Description: Create JavaScript program using
; object properties with two errors.
;===========================================
*/


// Declare object and properties
var seriesHP = new Object ()

seriesHP.author = "J.K. Rowling";
seriesHP.publisher = "Scholastic";
seriesHP.book1 = {
  title: "Harry Potter and the Sorcerer's Stone",
  yearPublished: 1997};
seriesHP.book2 = {
  title: "Harry Potter and the Chamber of Secrets",
  yearPublished: 1998};
seriesHP.book3 = {
  title: "Harry Potter and the Prisoner of Azkaban",
  yearPublished: 1999};
seriesHP.book4 = {
  title: "Harry Potter and the Goblet of Fire",
  yearPublished: 2000};
seriesHP.book5 = {
  title: "Harry Potter and the Order of the Pheonix",
  yearPublished: 2003};
seriesHP.book6 = {
  title: "Harry Potter and the Half-Blood Prince",
  yearPublished: 2005};
seriesHP.book7 = {
  title: "Harry Potter and the Deathly Hallows",
  yearPublished: 2007};

// Output
console.log("Book 3: " + seriesHP.book3.title + "\nYear Published: " + seriesHP.book3.yearPublished);

// End program