/* Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift()) */
// NEED TO FIX BUGS - Maximum call stack size exceeded!!

let moveItemsInsideArray = (array, n) => {
  switch (n) {
    case 0:
      return array;
      break;

    case n < 0:
      const lastItem = array.pop();
      array.unshift(lastItem);
      return moveItemsInsideArray(array, n + 1);
      break;

    default:
      const firstItem = array.shift();
      array.push(firstItem);
      return moveItemsInsideArray(array, n - 1);
      break;
  }
};

console.log(moveItemsInsideArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(moveItemsInsideArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
