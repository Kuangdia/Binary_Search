/*
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,
*/

/*
Input: nums = [3,4,5,6,1,2], target = 1
Output: 4

Input: nums = [3,5,6,0,1,2], target = 4
Output: -1
*/

function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // Check if the left half is sorted
    // In a normal sorted array, the element at the beginning of the range (nums[left]) should be less than or equal to the element at the midpoint (nums[mid]). If this condition holds true, it indicates that there are no pivot points within this half (pivot points are where the order breaks due to rotation), and hence, it is sorted.

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        // If the target value is between nums[left] and nums[mid] (inclusive of nums[left] and exclusive of nums[mid]), then the target must lie within this sorted segment. Hence, the search space is narrowed to this segment by moving the right boundary to mid - 1
        right = mid - 1
      } else {
        // If the target value is not within this range, it must be in the other half of the array. Therefore, adjust the left boundary to mid + 1 to search in the right half.
        left = mid + 1
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

console.log(search([1, 3], 3))
