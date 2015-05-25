//-- The Function ---------------------------------------------------------


/*
*   Functions are just objects. When you define a function, Javascript
*   creates an object that has three properties already defined:
*   name, length, and prototype.
*/

function sayItLoud(word) {
  console.log(word.toUpperCase());
}

/*
*   Because functions are just objects, they can do everything that
*   normal objects can do.
*/

sayItLoud.test = "I'm just an object";


/*
*   When you define a function inside of an object they are usually referred to
*   as a method. When you run a method that was defined in an object,
*   javascript will set the `this` keyword to the object that called the method.
*/

var cliffy = {
  legs: 4,
  numberOfLegs: function() {
    return this.legs;
  }
};

/*
*   When the function returns, the `this` value will be set back to
*   whatever it was before.
*/


/*
*   The `this` keyword can be tricky. It's set based on the object that
*   calls it, not where the function was actually defined.
*/

function getAge() {
  return this.age;
}

var person1 = {
  age: 50,
  getAge: getAge
}

var person2 = {
  age: 19,
  getAge: getAge
}


/*
*   If you call getAge() outside of an object, the `this` variable will be
*   set to the window object, or undefined if you're in strict mode.
*/



/*
*   If you really need to use a function and want to force the `this` keyword
*   to a specific value, you can use the `call()`, `apply()`, or `bind()` methods
*   to do it. We won't go through all of them, but you can see an example here:
*/

var person3 = {
  age: 25
};

getAge.call(person3);




/*
*   The way you define your functions really matters. Even a small
*   difference like assigning a function as an expression (using the var
*   keyword) versus defining a function as a declaration can have profound
*   side effects.
*/


/* 
*    alert(foo())
*    var foo = function() { return 'hi'; }
*
*    alert(bar())
*    function bar() { return 'hi'; }
*/




/*
*   As we've seen above, functions have arguments. You can have as many
*   arguments as you like, and are free to pass in fewer or more arguments than
*   your function expects. If you pass in fewer arguments, the
*   values will be undefined, if you pass in more, you can pull them off of
*   `arguments` object.
*/

function someArguments(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}


/*
*   Since functions are just objects, they are considered "first-class" and can be passed
*   around like any other primative. This means we can use a function itself as an
*   argument to a function. We refer to these as callbacks, and they are used extensively
*   throughout Javascript.
*/

function add(numOne, numTwo, callback) {
  console.log(numOne + numTwo);
  if(callback) {
    callback();
  }
}

// add(2, 3, function() {
//   console.log('Done!');
// });


/*
*   We should also talk about scope. Scope in simple terms
*   is just the question "what varaibles and methods" do I have access to
*   right now. Javascript has functional scope rather than block scope, which
*   is easier to understand by looking at some code snippets.
*/


function blockScope() {
  if(true) {
    var block = 'hello'
  }
  console.log(block);
}

/*
*   Instead of block scope, Javascript has functional scope. In short, this
*   this means that any variables declared inside a function will be visible
*   to the entire function, including nested functions.
*   
*/

function functionScope() {
  var names = [];

  function populateNames() {
    var javascriptMasters = ['Crockford', 'Osmani', 'Katz'];
    names = names.concat(javascriptMasters);
  }

  populateNames();

  return names;

}