// 9. Palindrome Number
// Easy

// 3466

// 1770

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

// Constraints:

// -231 <= x <= 231 - 1

// My solution
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //     case where x is negative
  if (x < 0) {
    return false;
    //     case where x is one-digit
  } else if (x > -1 && x < 10) {
    return true;
  }
  let str = x.toString();
  //     split and reverse the integer
  let answer = str.split("").reverse();
  //     check if the reversed number starts with zero
  if (answer[0] == 0) return false;
  //     join and change it into number
  answer = parseInt(answer.join(""));
  return answer === x;
};

// Top voted solution
var isPalindrome = function (x) {
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};
