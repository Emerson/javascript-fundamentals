//-- Closures -------------------------------------------------------------

/*
*   The textbook definition of a closure is something that retains state
*   and scope after it executes.
*
*   In Javascript, closures occur whenever a function accesses a variable
*   outside it's immediate lexical scope.
*/


/*
*   I've found the best way to understand this is by looking at the
*   event-driven nature of Javascript. Take the following code as
*   an example:
*/

$(document).ready(function() {
  var message = "I'm a closure";

  $('button').on('click', function() {
    alert(message);
  });

});

/*
*   When we reference the message variable in the callback, Javascript
*   knows to create a new execution context and holds the "closure" in
*   memory.
*/