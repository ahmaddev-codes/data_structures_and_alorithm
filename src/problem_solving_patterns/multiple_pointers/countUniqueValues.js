/** PROBLEM
 * Write a function called countUniqueValues that accepts
 * a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will
 * always be sorted.
 */

/**
 * Accepts a sorted array and counts
 * the unique values in the array
 *
 * @param {array} array - The sorted array.
 * @returns {number} count of unique values in the array
 */
function countUniqueValues(array) {
  var i = 0 //, j = 1 (using the while loop)
  if (array.length === 0)
    return 0

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
  }

  // while (j < array.length) { // while loop implementation
  //   if (array[i] === array[j]) {
  //     j++
  //   } else {
  //     array[i + 1] = array[j]
  //     i++
  //   }
  // }

  return i + 1
}

// Test:
console.log(countUniqueValues([1, 1, 1, 1, 2]))                       // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))  // 7
console.log(countUniqueValues([]))                                    // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1, 'e', 'e', 'f', 'f'])) // 6