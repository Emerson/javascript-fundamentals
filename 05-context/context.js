/*
*   CONTEXT
*   =======
*   What does the `this` keyword return?
*/


/*
*   By default, the `this` keyword refers to the window object
*/

// console.log(this);


/*
*   Within an object, the this keyword usually refers to the object itself
*/

var house = {
  door: 'closed',
  openDoor: function() {
    this.door = 'open';
  }
};


/*
*   In a function the `this` keyword is defined as the window object unless
*   you use the `new` keyword
*/

function myFunk() {
  this.mood = 'funky';
  return this;
}
