/*
============================================
; Title: Assignment 1.5
; Author: Laurie Mailloux 
; Date: 11/29/2019
; Description: Three employees with first and 
last name, address, pay rate, and date of hire.
;===========================================
*/

//my output looks like this
/*
Jazmyn Booth 
 11541 W 1222 S 
 20.0 
 4/20/1998

Brenda Smith 
 104 Railroad Street 
 14.0 
 5/19/2002
 
Lillie White 
 6625 Armory Road 
 15.0 
 4/20/1998
 */


// Declared variables
var firstName1 = "Jazmyn";
var lastName1 = "Booth"; 
var newline = "\n";
var address1 = "11541 W 1222 S";
var a  = 20.00; 
var payRate1 = a.toFixed(1);
var date1 =  new Date(1998, 3, 20);
var hireDate1 = date1.toLocaleDateString();

var firstName2 = "Brenda";
var lastName2 = "Smith"; 
var newline = "\n";
var address2 = "104 Railroad Street";
var g = 14.00;
var payRate2 = g.toFixed(1);
var date2 =  new Date(2002, 4, 19);
var hireDate2 = date2.toLocaleDateString();

var firstName3 = "Lillie";
var lastName3 = "White"; 
var newline = "\n";
var address3 = "6625 Armory Road";
var n = 15.00;
var payRate3 = n.toFixed(1);
var date3 =  new Date(2005, 1, 5);
var hireDate3 = date1.toLocaleDateString();


//output
console.log (firstName1, lastName1, newline, address1,  newline, payRate1, newline,  hireDate1, newline);
console.log (firstName2, lastName2, newline, address2,  newline, payRate2, newline,  hireDate2, newline);
console.log (firstName3, lastName3, newline, address3,  newline, payRate3, newline,  hireDate3);







