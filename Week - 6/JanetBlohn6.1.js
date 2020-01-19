/*
============================================
; Title:  blohn-discussion-6.1.js
; Author: Janet Blohn
; Date:   14 January 2020
; Modified By: N/A
; Description: Discussion 6.1 Objects and Built-in Objects
; A simple JavaScript program using object properties with at
: least (2) errors.
*/

/*
  Expected Output:

First House Type : Ranch
First House Color: White

Second House Type:  Two Story
Second House Color: Blue
*/

// Import blohn-header.js file

var homes = {
  house: {
    houseType: "Ranch",
    houseColor: "White"
  },

  get type() {
    return this.house.houseType;
  },

  get color() {
    return this.house.houseColor;
  },

  set type(newType) {
    this.house.houseType = newType;
  },

  set color(newColor) {
      this.house.houseColor = newColor;
  }
};

console.log("First House Type : " + homes.type);
console.log("First House Color: " + homes.color + "\n")

homes.type = "Two Story";
homes.color = "Blue";

console.log("Second House Type:  " + homes.type);
console.log("Second House Color: " +  homes.color);