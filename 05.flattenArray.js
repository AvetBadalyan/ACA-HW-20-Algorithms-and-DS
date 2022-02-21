/* Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).
input [1, [3, 4, [1, 2]], 10] must return [1, 3, 4, 1, 2, 10]
*/

function concatArrays(bigArray) {
  return bigArray.reduce(function (flat, item) {
    if (Array.isArray(item)) {
      return flat.concat(concatArrays(item));
    } else {
      return flat.concat(item);
    }
  }, []);
}

console.log(concatArrays([1, [3, 4, [1, 2]], 10]));
