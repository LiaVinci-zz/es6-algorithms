// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  if (!str && (typeof str === 'object' || typeof str === undefined)) {
    return
  }

  let vowelCounter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  let totalVowelCounter = 0

  for (char of str.toLowerCase()) {
    if (vowelCounter.hasOwnProperty(char)) {
      vowelCounter[char] += 1
      totalVowelCounter += 1
    }
  }

  return totalVowelCounter
}

module.exports = vowels;
