# ACA-HW-20-Algorithms-and-DS

Exercises with recursion, sort etc.

##### 01. Write a recursive function to determine whether all digits of the number are odd or not.

4211133 - false;
7791 - true;
5 - true;

[01.checkoddNumberWithRecursion.js](01.checkoddNumberWithRecursion.js)

---

##### 02. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1).

[56, -9, 87, -23, 0, -105, 55, 1] must return 1; |
[45, -9, 15, 5, -78] must return 5; |
[-5, -9, -111, -1000, -7] must return -1; |

[02.findMinPositive.js](02.findMinPositive.js)

---

##### 03. Given an array of numbers which is almost sorted in ascending order. Find the index where sorting order is violated.

input [-9, -4, -4, 3, 12, 4, 5] ; output should be 5!

[03.findSortViolation.js](03.findSortViolation.js)

---

##### 04. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.shift())

input [6, 78, ‘n’, 0, 1] output should be [78, ‘n’, 0, 1] ;

[04.implementationOfArrayShift.js](04.implementationOfArrayShift.js)

---

##### 05. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

input [1, [3, 4, [1, 2]], 10] must return [1, 3, 4, 1, 2, 10]

[05.flattenArray.js](05.flattenArray.js)

---
