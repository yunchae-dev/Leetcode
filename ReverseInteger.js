// 7. Reverse Integer
// Easy

// 4954

// 7516

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

// My solution
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //     case where x === 0
  if (x === 0) {
    return 0;
  }
  let arr = [];
  //     change order of x and push into array
  let str = x.toString();
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str.charAt(i));
    console.log(str.charAt(i));
  }
  //     remove '0's in cases where '0' comes at the front
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      break;
    } else {
      arr.shift();
    }
  }
  //     put minus sign into the front in cases where x is negative
  if (arr[arr.length - 1] === "-") {
    arr.pop();
    arr.unshift("-");
  }
  //     join and parse into integer
  let answer = parseInt(arr.join(""));
  if (answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return answer;
  }
};

// Top voted solution
var reverse = function (x) {
  const absReversed = Math.abs(x).toString().split("").reverse().join("");
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};

// Other good solution
function reverse(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let ret = 0;
  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    ret *= 10;
    ret += num;
  }
  if (ret > Math.power(2, 31)) return 0;
  return isNegative ? ret * -1 : ret;
}
