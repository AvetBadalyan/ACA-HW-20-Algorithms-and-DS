/* Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift())
input [6, 78, ‘n’, 0, 1] output should be [78, ‘n’, 0, 1] ;

*/

function implementArrayShift(arr, i = 0) {
  if (i === arr.length) {
    arr.pop();
    return arr;
  }
  arr[i] = arr[i + 1];

  return implementArrayShift(arr, i + 1);
}

console.log(implementArrayShift([6, 78, "n", 0, 1]));
