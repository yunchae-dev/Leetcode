// 28. Implement strStr()
// Easy

// 2565

// 2499

// Add to List

// Share
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

// My solution
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //   1. get needle's string length: n
  //   2. do a loop through haystack
  //   3. find a character that matches with needle's first chracter
  //   4. if it matches, check if all adjacent letters match
  //   5. return the index of the first matching character
  if (haystack.length < needle.length) return -1;
  if (needle.length === 0) return 0;

  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (haystack.charAt(i) === needle.charAt(j) && j < needle.length) {
      i++;
      j++;
    }
    if (j === needle.length) {
      return i - j;
    } else {
      i = i - j;
      j = 0;
    }
  }
  return -1;
};

// Top voted solution
const strStr = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0; // the only mandatory check here is (needle === '')
  if (haystack.length < needle.length) return -1; // the other ones are for efficiency

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // start looping through haystack until the remaining substring is shorter than needle
    if (haystack[i] === needle[0]) {
      // as soon as we see a character that matches the first character of needle
      for (let j = 0; j < needle.length; j++) {
        // start looping through both needle and haystack
        if (needle[j] !== haystack[i + j]) {
          // as soon as the characters don't match
          break; // break out of the loop and return to looping through haystack
        } else if (j === needle.length - 1) {
          // otherwise, if we looped through the entire needle and all of the characters matched
          return i; // return the index of the first character of haystack with which we started the loop
        }
      }
    }
  }

  return -1; // return -1 if there wasn't a match
};
