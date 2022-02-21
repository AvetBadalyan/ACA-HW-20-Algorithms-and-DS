/*
 Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.
input [-9, -4, -4, 3, 12, 4, 5] ; output should be 5

*/

function findSortViolation(arr, i = 0) {
  if (arr[i + 1] - arr[i] < 0) {
    return `the violation is at index ${i + 1}`;
  }
  if (arr.length - 1 === i) {
    return -1;
  }

  return findSortViolation(arr, i + 1);
}

console.log(findSortViolation([-9, -4, -4, 3, 12, 4, 5]));
