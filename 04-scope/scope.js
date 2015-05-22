/*
*   SCOPE
*   =====
*   What variables are currently available?
*/



/*
*   In the browser, the `window` object is our main global. Variables
*   defined in the root scope are attached to the window.
*/

// console.log(window)

var MyGlobal = 'hello!';

// console.log(window.MyGlobal);



function doSomething() {
  console.log(MyGlobal);
}


/*
*   Variables defined in a function scope are only visible within
*   the function and any child scopes
*/

function myParent() {
  var name = 'Susan';

  function myChild() {
    console.log(name);
  }

  myChild();
}