/*
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?
*/

/*
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
Output: true

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
Output: false
*/

/*
Consider a 2D matrix
[
  [ 1,  2,  3,  4], // Row 0
  [ 5,  6,  7,  8], // Row 1
  [ 9, 10, 11, 12] // Row 2
]

1D Array Equivalent:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Row Calculation:
The row in a 2D matrix can be found by dividing the 1D index by the number of columns.
Formula: row = Math.floor(index / number_of_columns)

1D Array Index: 5
Calculate the corresponding row:
row = Math.floor(5 / 4) = Math.floor(1.25) = 1
row belongs to matrix row 1

Column Calculation:
The column in a 2D matrix can be found by taking the remainder when the 1D index is divided by the number of columns.
Formula: column = index % number_of_columns
Calculate the corresponding column:
column = 5 % 4 = 1
So, index 5 in the 1D array corresponds to matrix[1][1], which is 6.

In the binary search solution:

mid Calculation:
mid is the middle index in the 1D array representation of the matrix.
Mapping mid to 2D:
Row: Math.floor(mid / cols)
Column: mid % cols
Access the element using matrix[Math.floor(mid / cols)][mid % cols].
midElement = matrix[Math.floor(mid / cols)][mid % cols]

*/
function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  let rows = matrix.length
  let cols = matrix[0].length
  let low = 0
  // So, if the matrix has 3 rows and 4 columns, the total number of elements is 3 * 4 = 12.
  // Since array indices start at 0, the last index is total_elements - 1
  let high = rows * cols - 1

  while (low <= high) {
    // this is the mid index for a flattened 1D array
    let mid = Math.floor((low + high) / 2)
    // You don't need to use Math.floor for calculating the column index because the operation mid % cols already gives you the correct integer value directly.
    let midElement = matrix[Math.floor(mid / cols)][mid % cols]

    if (midElement === target) {
      return true
    } else if (midElement < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    10
  )
)
