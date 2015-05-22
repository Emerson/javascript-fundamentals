//-- The Function ---------------------------------------------------------

function sayItLoud(word) {
  console.log(word.toUpperCase());
}

var sayItSoft = function(word) {
  console.log(word.toLowerCase());
};


//-- Expression vs Declaration --------------------------------------------

// alert(foo())
// var foo = function() { return 'hi'; }


//-- Arguments ------------------------------------------------------------

function someArguments(one, two, three) {
  debugger;
  console.log(one);
  console.log(two);
  console.log(three);
}


//-- Functions are First Class --------------------------------------------

function add(first, second, callback) {
  console.log(first + second);
  if(callback) {
    callback();
  }
}

// add(2, 3, function() {
//   console.log('Done!');
// });