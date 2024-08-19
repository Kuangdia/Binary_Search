/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in O(logn) time.
*/

/*
Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3

Input: nums = [-1,0,2,4,6,8], target = 3
Output: -1
*/

// Time complexity = O(logn)
// low/high approach
// good for sorted array and narrows search in half
function search(nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

console.log(search([-1, 0, 2, 4, 6, 8], 4))
