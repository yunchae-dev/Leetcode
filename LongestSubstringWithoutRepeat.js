// 3. Longest Substring Without Repeating Characters
// Medium

// 15822

// 780

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


// My solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  let record = 0;
  let counter = 1;
  
  for (let i = 0; i < s.length; i++) {
//     compare counter with record
    if (counter > record) {
      record = counter;
    }
//     reset counter and set
    counter = 1;
    let letters = new Set();
    letters.add(s[i])
//     do a loop
    for (let j = i + 1; j < s.length; j++) {
      if (letters.has(s[j])) {
        break;
      } else {
        letters.add(s[j]);
        counter++;
      }
    }
  }
  return record;
};

// Top voted solution
var lengthOfLongestSubstring = function(s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for( i = 0 ; i < sLen; i++ ){

    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    if(posIndex > -1){
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};