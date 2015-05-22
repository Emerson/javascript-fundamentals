/*
*   SCOPE
*   =====
*   JavaScript has weird variable scoping rules compared to other languages!
*
*
*   1) Variables are scoped to their enclosing function (not to the block)
*   2) Variables outside of any function are bound to the root scope (e.g. Window).
*/


/*
*   Variables are scope to their enclosing function
*/

function someFunction() {
  var name = 'Susan';
}

console.log(name);                // ReferenceError: name is not defined


/*
*   Variables are not isolated to their block like in other languages
*/
function myName() {

  if (false) {
    var name = 'Susan';
  }
  else {
    var name = 'Fred';
  }

  console.log(name);
}

myName();                         // Fred


/*
*   Variables are available to all nested child scopes
*/

var day = 'Monday'

function myParent() {
  var name = 'Susan';

  function myChild() {
    console.log(day, name);
  }

  myChild();
}

myParent();                     // Monday Susan


/*
*   In the browser, the `window` object is our root scope. Variables
*   defined outside of any function are attached to the window.
*/

var myGlobal = 'hello!';

console.log(window.myGlobal);   // hello!

function doSomething() {
  console.log(myGlobal);        // hello!
}
