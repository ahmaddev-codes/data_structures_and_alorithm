/**
 * Write a function called sumZero that accepts a sorted array
 * of integers.The function should first find the pair where
 * the sum is zero, then return an array that includes both values
 * that sums up to zero or undefined if a pair does not exist.
 */

// NAIVE APPROACH
/**
 * Accepts an array and checks for the first pair that sums to zero
 *
 * @param {array} array - The array to check for pair that sums to zero
 * @returns {array} Array of pair that sums to zero
 */
function sumZero(array) {
  for (let i = 0; i < array.length; i++) { // Big O(n)
    for (let j = i + 1; j < array.length; j++) { // Big O(n)
      if (array[i] + array[j] === 0)
        return [array[i], array[j]]
    }
  }
}
// Time complexity: Big O(n^2)
// Test:
console.time("time_complexity")
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.timeEnd("time_complexity")

console.log(sumZero([-2, 0, 1, 3]))           // undefined
console.log(sumZero([1, 2, 3]))               // undefined

// Refactored using MULTIPLE POINTER APPROACH
function sumZeroRefactored(array) {
  let left = 0, right = array.length - 1
  while (left < right) { // Big O(n)
    if (array[left] + array[right] === 0)
      return [array[left], array[right]]
    else if (array[left] + array[right] > 0)
      right--
    else
      left++
  }
}
// Time complexity: Big O(n)
// Linear Time Complexity
console.log("\nRefactored code:\n===============\n")
// Test:
console.time("time_complexity")
console.log(sumZeroRefactored([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.timeEnd("time_complexity")
console.log(sumZeroRefactored([-2, 0, 1, 3]))           // undefined
console.log(sumZeroRefactored([1, 2, 3]))               // undefined
