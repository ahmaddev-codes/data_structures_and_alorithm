/**
 * A function called maxSubarraySum that accepts
 * an array of integers and a number, n.
 * The function should calculate the sum of n consecutive
 * elements in the array
*/

// NAIVE APPROACH
/**
 * Calculates the sum of 'n' consecutive elements
 * in the array
 *
 * @param {array} arr - array of integers
 * @param {int} n - number of consecutive elements to add
 *
 * @returns {int} The max sum of n consecutive elements in
 * the array
 */
function maxSubarraySum(arr, n) {
  // check edge case: make sure the array is longer than n
  if (n > arr.length) return null

  // create a max pointer that stores negative infinity in case of negative values
  var max = -Infinity
  // loop until nth number of elements to the end of the array
  for (let i = 0; i < arr.length - n + 1; i++) { // Big O(n)
    // create a temp pointer
    let temp = 0
    // create an inner loop and add the first n consecutive elements in the array
    for (let j = 0; j < n; j++) { // Big O(n)
      // store it in the temp pointer
      temp += arr[i + j]
    }
    // if it is greater than max, let max = temp
    if (max < temp) max = temp
  }

  // return max
  return max
}
// Time Complexity: Big O(n * n) = Big O(n^2) - Quardratic

// Test:
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10

console.log("small array:")
console.time('time_complexity')
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.timeEnd('time_complexity')

console.log("big array")
console.time('time_complexity')
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5], 20)) // 71
console.timeEnd('time_complexity')

console.log(maxSubarraySum([4,2,1,6], 1))       // 6
console.log(maxSubarraySum([4,2,1,6,2], 4))     // 13
console.log(maxSubarraySum([], 4))              // null

// SLIDING WINDOW APPROACH
/**
 * Calculates the sum of 'n' consecutive elements
 * in the array
 *
 * @param {array} arr - array of integers
 * @param {int} n - number of consecutive elements to add
 *
 * @returns {int} The max sum of n consecutive elements in
 * the array
 */
function maxSubarraySumRefactored(arr, n) {
  // check to make sure the array is not less in length than n
  if (n > arr.length) return null

  // create two pointers max and temp
  var maxSum = 0, tempSum = 0
  // loop up to nth element
  for (let i = 0; i < n; i++) {
    // store the sum in maxSum
    maxSum += arr[i]
  }
  // store the value of maxSum to tempSum to compare in second loop
  tempSum = maxSum

  // loop up to end of array
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j]

    if (tempSum > maxSum) maxSum = tempSum
  }

  return maxSum
}
// Time Complexity: Big O(n + n) = Big O(2n) = Big O(n) - Linear

// Test:
console.log("\nRefactored:\n==================\n")
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2)) // 10

console.log("small array")
console.time('time_complexity')
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.timeEnd('time_complexity')

console.log("big array")
console.time('time_complexity')
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5], 20)) // 71
console.timeEnd('time_complexity')

console.log(maxSubarraySumRefactored([4,2,1,6], 1))       // 6
console.log(maxSubarraySumRefactored([4,2,1,6,2], 4))     // 13
console.log(maxSubarraySumRefactored([], 4))              // null