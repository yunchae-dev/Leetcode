// 35. Search Insert Position
// Easy

// 3843

// 306

// Add to List

// Share
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// My solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //   check and compare with target
  let i = 0;
  while (nums[i] < target && i < nums.length) {
    i++;
  }
  return i;
};

// Top voted solution
function searchInsert(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
}

function binarySearch(array, target, start, end) {
  // If the target is less then the very last item then insert it at that item index
  // because anything index less then that has already been confirmed to be less then the target.
  // Otherwise insert it at that item index + 1
  // because any index grater then that has already been confirmed to be greater then the target
  if (start > end) return start;

  const midPoint = Math.floor((start + end) / 2);

  // found target
  if (array[midPoint] === target) return midPoint;

  // search the left side
  if (array[midPoint] > target)
    return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target)
    return binarySearch(array, target, midPoint + 1, end);
}
