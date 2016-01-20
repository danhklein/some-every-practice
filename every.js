module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven(element, index, array) {
  return element%2===0;
}
var goodInput = [2,4,10];
var badInput = [2,4,11];

goodInput.every(allEven);
badInput.every(allEven);

// Check to see if all elements in an array
// are of the same type.

var goodInput =[1,2,3,4];
var badInput = [1,2,3,'4'];

 function allSameType (element, index, array) {
  return typeof element === typeof array[0];
  }

goodInput.every(allSameType);
badInput.every(allSameType);


// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

  var goodInput = [[1,2,3],
                     [4,5,6],
                     [7,8,9]];
   var badInput = [[-1,2,3],
  [4,-5,6],
  [7,8,-9]];

function positiveMatrix (el, index, array) {
  return typeof el === 'object' && el[index] > 0;
};
 goodInput.every(positiveMatrix);
 badInput.every(positiveMatrix);
// Check that all items in an array are strings
// and that they all only contain the same vowels.
 var goodInput = ['amalgam', 'zoom'];
 var badInput = ['zoom', 'oligopoly'];
function allSameVowels (input) {
  return typeof el === 'string' &&
};