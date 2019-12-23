/*
 
    

============================================

 
    

; Title: Discussion 4.1

 
    

; Author: Kimberly Pierce

 
    

; Date:   17 December 2019

 
    

; Modified By: Kimberly Pierce

 
    

; Description: Array with two errors

 
    

;===========================================

 
    

*/

 
   
//create array
var names = [ "Karen" , "Janet" , "Susan" , "Jennifer" ];

//modify array elements
names [ 2 ] = "Mind your own business, Susan!" ;
names.unshift ( "These ladies would like to speak to your manager!" );

//pass array through function
function getNames (arr){
for ( var index = 0 ; index < arr.length; index ++){
console.log(arr[index]);
}
}

//function output
getNames(names); 