/*
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.
*/

/*
Input: piles = [1,4,3,2], h = 9
Output: 2
Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

Input: piles = [25,10,23,4], h = 4
Output: 25
*/

// Time complexity O(nlogm)
// where n is the number of piles and m is the maximum value in the piles array
// we return the left pointer, which represents the minimum eating speed that allows Koko to finish eating all the bananas within the given number of hours.
// The time complexity is O(n log m) because we perform a binary search (log m) and for each iteration, we need to iterate through the piles array (n) to calculate the total number of hours.

function minEatingSpeed(piles, h) {
  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let k = 0
    for (const pile of piles) {
      k += Math.ceil(pile / mid)
    }

    // If the total hours k exceeds h, it means that the current eating speed mid is too slow, so we need to increase it. We do this by setting left = mid + 1.
    if (k > h) {
      left = mid + 1
      // If k is less than or equal to h, it means mid might be a valid speed, but we continue searching for a potentially smaller valid speed by setting right = mid
    } else {
      right = mid
    }
  }

  return left
}

console.log(minEatingSpeed([1, 4, 3, 2], 9))
