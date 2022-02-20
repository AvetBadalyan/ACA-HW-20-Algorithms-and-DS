// Write a recursive function to determine whether all digits of the number are odd or not.

function IsEveryDigitOdd(number) {
  if (number >= 10) {
    let lastDigit = number % 10;
    if (lastDigit % 2 === 0) {
      return false;
    }
    number = (number - lastDigit) / 10;
    return IsEveryDigitOdd(number);
  } else {
    return !(number % 2 === 0);
  }
}

console.log(IsEveryDigitOdd(4211133));
console.log(IsEveryDigitOdd(7791));
console.log(IsEveryDigitOdd(5));
