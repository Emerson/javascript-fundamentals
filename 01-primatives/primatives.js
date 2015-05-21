//-- The 9 Primatives -------------------------------------------------------

var theString = 'Hello';

var theNumber = 52;

var theBoolean = true;

var theNull = null;

var theAwesomeObject = {
  isAwesome: true,
  name: 'the awesome object',
  age: 100
};

var theArray = [1, 'two'];

function theFunction(word) {
  return word.toUpperCase();
}

var theRegex = /howdy/;


//-- Falsy Values ---------------------------------------------------------

if(false || 0 || "" || null || undefined || NaN) {
  console.log('We never get here...');
}


//-- Passing by Value vs Reference ----------------------------------------

var anotherString = theString;
anotherString = 'goodbye';

var anotherObject = theAwesomeObject;
anotherObject.age = 101;