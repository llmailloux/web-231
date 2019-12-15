/*
============================================
; Title:  week 3: discussion 3.1
; Author: Micah Connelly
; Date:   12 December 2019
; Modified By: Micah Connelly
; Description: Creating a function with two errors
;===========================================
*/

/*
  Expected output: This function will not... function. But it's supposed to output a true/false result.
*/

// function properties
var today = new Date;
var Thursday = Boolean;


// functions

// a function checking if today is Thursday and setting boolean based truthiness
 function isTodayThursday() {
  if (today.getDay() == 4) {
    return Thursday = true;
  } else {
    return Thursday = false;
  }
}

// output
console.log("Is today Thursday?" + " " + isTodayThursday());

// end program