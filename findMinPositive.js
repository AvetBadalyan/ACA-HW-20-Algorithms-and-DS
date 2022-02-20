/* Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1). */

const findMinPositive = function (array, minimum = Infinity) {
  if (array.length === 0) {
    if (minimum === Infinity) {
      return -1;
    }
    return minimum;
  }

  let lastItem = array.pop();

  if (lastItem > 0 && lastItem < minimum) {
    minimum = lastItem;
  }

  return findMinPositive(array, minimum);
};

console.log(findMinPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMinPositive([45, -9, 15, 5, -78]));
console.log(findMinPositive([-5, -9, -111, -1000, -7]));
