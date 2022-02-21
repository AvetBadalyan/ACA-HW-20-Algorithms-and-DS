/* Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function sumOfDigits(number) {
  number = Math.abs(number);
  return String(number)
    .split("")
    .reduce(function (aggr, digit) {
      if (aggr + digit >= 10) {
        return sumOfDigits(aggr + Number(digit));
      }
      return aggr + Number(digit);
    }, 0);
}

console.log(sumOfDigits(56)); // 2
console.log(sumOfDigits(29)); // 2
console.log(sumOfDigits(999)); // 9
