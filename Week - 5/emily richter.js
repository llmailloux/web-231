/*
============================================
; Title:  Discussion 5.1
; Author: Emily Richter
; Date:   9 January 2020
; Description: Map object that displays how
; to say hello in the keyed language.
; There are two errors in this program.
;===========================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Discussion 5.1"));

// Declare the map object
var sayHello = new Map();

// Define keys and values of object
sayHello.set('French', 'Bonjour');
sayHello.set('English', 'Hello');
sayHello.set('German', 'Hallo');
sayHello.set('Spanish', 'Hola');
sayHello.set('Russian', 'Zdravstvuyte');
sayHello.delete('English');

// Output
for (var [key, value] of sayHello) {
  console.log('"' + value + '" is how you say hello in ' + key + '.');
};

// End program