/**
 * Given two strings, Write a function called validAnagram that
 * accepts two strings and checks if the second string is an anagram
 * of the frist string.
 *
 * Funtion: validAnagram
 * string1: first array
 * string2: second array
 *
 * Return: true
 * - if every values in the first string is an anagram of the second string */
function validAnagram(string1, string2) {
  if (string1.length !== string2.length)
    return false

  let freqCountStr1 = {}
  let freqCountStr2 = {}

  for (let value of string1)
    freqCountStr1[value] = (freqCountStr1[value] || 0) + 1

  for (let value of string2)
    freqCountStr2[value] = (freqCountStr2[value] || 0) + 1

  for (let key in freqCountStr1) {
    if (freqCountStr2[key] !== freqCountStr1[key])
      return false
  }

  return true
}

// Test
console.log(validAnagram("", "")) // true
console.log(validAnagram("aaz", "zaa")) // true
console.log(validAnagram("qwerty", "qeywrt")) // true
console.log(validAnagram("car", "rat")) // false
console.log(validAnagram("testtwisttime", "timetwisttest")) // true