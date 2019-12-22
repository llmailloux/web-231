/*
============================================
; Title: Discussion Board 4.1
; Author: James Brown
; Date:   12/19/2019
; Description: Code will not execute as there are two errors.
  This code is meant to provide an example of how arrays can be used.
  expected output: The sum of all the indexes in the array is :750
;===========================================
*/


// Welcome message
console.log('\n--Welcome to Exercise 4.1 - Arrays--');


//variable declaration
var arr, index, j;


//multi dimensional arrays that we will pass into function
arr = [
  [10,20,30,40],
  [10,20,30,40],
  [10,20,30,40],
  [10,20,30,40],
  [10,20,30,40]
]; //sum of all numbers here is 500

arr2 = [
  [10,20,30,40,50],
  [10,20,30,40,50],
  [10,20,30,40,50],
  [10,20,30,40,50],
  [10,20,30,40,50]
]; //sum of all numbers here is 750

/*function takes a multi dimensional array as a parameter, loops through the outer (index) and inner indexes (j), while keeping track of sum.
then returns sum.*/
function sumIndexes(arrayParam){
  //local variable to sumIndexes function defining and assignment to keep track of the total
  var sum = 0;
  //outer for loop
  for(index = 0; index < sum.length; index++){
    //inner for loop
    for(j=0; j < arrayParam[index].length; j++){
      sum += arrayParam[index][j];
    }
  }
  return sum;
}


//output
//should log the sum of all the numbers in the array
console.log(`\nThe sum of all the indexes in the array is: ${sumIndexes()}`);


//end program