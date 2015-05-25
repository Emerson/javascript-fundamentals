//-- The 9 Primatives -------------------------------------------------------

// undefined

var theNull = null;

var theString = 'Hello';

var theNumber = 52;

var theBoolean = true;

var theAwesomeObject = {
  isAwesome: true,
  name: 'the awesome object',
  age: 100
};

// -- Technicially objects ------------------------------------------------

var theArray = [1, 'two'];

function theFunction(word) {
  return word.toUpperCase();
}

var theRegex = /howdy/;


//-- Falsy Values ---------------------------------------------------------

if(false || 0 || "" || null || undefined || NaN) {
  console.log('We never get here...');
}