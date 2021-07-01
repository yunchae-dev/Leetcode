// 20. Valid Parentheses
// Easy

// 7971

// 326

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// My solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //   in order to have paired parantheses, the length must be even number
  if (s.length % 2 !== 0) return false;
  //   create a dictionary for the pairs
  const dic = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  //   create an empty array and push opening parantheses
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let currStr = s[i];
    if (dic[currStr]) {
      stack.push(dic[currStr]);
      //       if a closed parantheses appears, compare it with popped value from stack
    } else if (currStr !== stack.pop()) {
      return false;
    }
  }
  //   stack length should be 0 if all pairs are matched
  return !stack.length;
};

// Top voted solution
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
