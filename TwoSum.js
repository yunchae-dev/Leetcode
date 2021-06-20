// 1. Two Sum
// Easy

// 21807

// 742

// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// My solution
var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let x1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let x2 = nums[j];
      if (x1 + x2 === target) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }
};

// Top voted solution: O(n)
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
