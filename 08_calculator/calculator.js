const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(array) {
  return array.reduce((sum, item) => sum * item, 1);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let result = 1; 
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
