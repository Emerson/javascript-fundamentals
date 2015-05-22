/*
*   CONTEXT
*   =======
*   What does the `this` keyword return?
*
*
*   1) The keyword "this" refers to whatever is left of the dot at call-time.
*   2) If there's nothing to the left of the dot, then "this" is the root scope (e.g. Window).
*   3) The keyword "new" binds this to the object just created
*   4) A few functions change the behavior of "this"—bind, call and apply
*
*/


/*
*   The keyword "this" refers to whatever is left of the dot at call-time.
*/

var house = {
  door: 'closed',
  openDoor: function() {
    this.door = 'open';
  }
};

house.door;             // closed
house.openDoor();       // "this" refers to the house object
house.door;             // open

/*
*   If there's nothing to the left of the dot, then "this" is the root scope (e.g. Window).
*/

console.log(this);      // Window { ... }

function myFunk() {
  this.mood = 'funky';
  return this;
}

myFunk();               // Window { mood: 'funky', ... }


/*
*   The keyword "new" binds this to the object just created
*/

var obj = new myFunk(); // { mood: 'funky '}



/*
*   A few functions change the behavior of "this"—bind, call and apply
*/

myFunk.apply({
  temperature: 'hot'
});                     // { temperature: 'hot', mood: 'funky' }
