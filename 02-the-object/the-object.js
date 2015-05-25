//-- The Object -----------------------------------------------------------

/*
*   A set of key value pairs, similar to a dictionary or hash in 
*   other languages. You can have any number of keys, which can be
*   any valid string, and the values can be any of the primitives we
*   discussed.
*/

var cliffy = {
  breed: 'mutt',
  age: 5,
  isHungry: false,
  bark: function() {
    console.log('bark bark bark');
  }
};


/*
*   There are a couple ways to get and set object values. One method
*   uses the dot notition, the other method usings square-brackets
*   with strings.
*/

cliffy['breed'];
cliffy.age;

cliffy['isFast'] = false;
cliffy.isNice = false;

delete cliffy.isNice;


/*
*   Objects are passed by reference, other primatives pass by value.
*   This is why jQuery and other utility libraries from methods like
*   .extend().
*/


var a = [1,2,3];
var b = a;

// b.push(4);


/*
*   Another really important aspect of objects is the prototype chain. We
*   won't dwell on this too much, but I did want to quickly show a basic
*   example.
*
*   The prototype property of an object is a special property that can point
*   to another object, and it's used to handle inheritence. When you call a
*   method on an object, Javascript checks the current object for the method,
*   but will move up through the prototype chain to find the method.
*/

var parent = {
  hair: 'red',
  getHairColor: function() {
    return this.hair;
  }
}

var child = Object.create(parent);
child.hair = 'brown';

var grandchild = Object.create(child);

/*
*   When we call .getHairColor() on the parent object, Javascript will set
*   set the `this` variable to the parent object and return 'red';
*   
*   When we call the same method on the child object, Javascript will try to
*   find the `getHairColor()` method on the child object, won't find it. It will
*   then look at the prototype, move up the chain to parent, and find the method on the parent.
*
*   When it runs the function in the parent object it will try to find
*   `this.hair` - which means it will go back to the child object, look for
*   the hair property, and return it.
*
*  The prototype chain can be as long as you need.
*/
