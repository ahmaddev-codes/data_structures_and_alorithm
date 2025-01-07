/**
 * A function that accepts two arrays and checks if
 * every values in the first array has its corresponding
 * values squared in the second array
 *
 * Funtion: same
 *
 * - first: first array
 * - second: second array
 *
 * Return: true
 * - if every values in the first array has its corresponding
 *   values squared in the second array */
// NAIVE APPROACH
function same(first, second) {
  if (first.length !== second.length) {
    return false
  }

  for (let i = 0; i < first.length; i++) { // Big O(n)
    let index = second.indexOf(first[i] ** 2) // Big O(n)
    if (index === -1) {
      return false
    }
    second.splice(index, 1)
  }

  return true
}
// Time Complexity: Big O(n^2) - Quardratic

// Test
var start_time = performance.now()
console.log(same([1, 2, 2, 3], [1, 4, 4, 9])) // true
var stop_time = performance.now()
console.log(`It took ${((stop_time - start_time) / 1000).toFixed(4)}s to run`)

console.log(same([1,2,2,3], [4,1,4,9])) // true
console.log(same([1,2,3], [4,1,4,9])) // false
console.log(same([2, 4, 4], [16, 4, 16])) // true
console.log(same([1, 2, 2, 3, 5], [25, 1, 4, 4, 9])) // true
console.log(same([1, 2, 2, 3, 5], [25, 1, 8, 4, 16])) // false

// FREQUENCY COUNTER APPROACH
function sameRefactored(first, second) {
  if (first.length !== second.length)
    return false

  let freqCountFirst = {}, freqCountSecond = {}
  for (let value of first) // Big O(n)
    freqCountFirst[value] = (freqCountFirst[value] || 0) + 1

  for (let value of second) // Big O(n)
    freqCountSecond[value] = (freqCountSecond[value] || 0) + 1

  for (let key in freqCountFirst) { // Big O(n)
    if (!(key ** 2 in freqCountSecond))
      return false

    if (freqCountSecond[key ** 2] !== freqCountFirst[key])
      return false
  }

  return true
}
// Time complexity: Big O(n + n + n) = Big O(3n) -> dropping constants = Big O(n) - Linear

console.log("\nUsing the frequency counter pattern")
console.log("====================================\n")

// Test
var start_time = performance.now()
console.log(sameRefactored([1, 2, 2, 3], [1, 4, 4, 9])) // true
var stop_time = performance.now()
console.log(`It took ${((stop_time - start_time) / 1000).toFixed(4)}s to run`)

console.log(sameRefactored([1,2,2,3], [4,1,4,9])) // true
console.log(sameRefactored([1,2,3], [4,1,4,9])) // false
console.log(sameRefactored([2, 4, 4], [16, 4, 16])) // true
console.log(sameRefactored([1, 2, 2, 3, 5], [25, 1, 4, 4, 9])) // true
console.log(sameRefactored([1, 2, 2, 3, 5], [25, 1, 8, 4, 16])) // false
