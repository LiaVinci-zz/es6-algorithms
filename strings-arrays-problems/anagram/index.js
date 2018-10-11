// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if ((!stringA && (typeof stringA === 'object' || typeof stringA === undefined)) ||
      (!stringB && (typeof stringB === 'object' || typeof stringB === undefined))) {
    return
  }

  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  if (stringA.length !== stringB.length) {
    return false
  }

  let charCounter = {}

  for (let i = 0; i < stringA.length; i++) {
    let charA = stringA[i]
    let charB = stringB[i]

    charCounter[charA] ? charCounter[charA]++ : charCounter[charA] = 1
    charCounter[charB] ? charCounter[charB]-- : charCounter[charB] = -1

    if (charCounter.hasOwnProperty(charA) && charCounter[charA] === 0) {
      delete charCounter[charA]
    }

    if (charCounter.hasOwnProperty(charB) && charCounter[charB] === 0) {
      delete charCounter[charB]
    }
  }

  return Object.keys(charCounter).length === 0
}

function anagrams1(stringA, stringB) {
  return stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
