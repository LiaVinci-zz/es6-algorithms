
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (!str) {
    return false
  } else if (str.length === 1) {
    return true
  }

  // let strMidPoint = str.length / 2
  // let firstHalf = str.slice(0, strMidPoint)
  // let secondHalf = str.slice(strMidPoint * -1)

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false
    }
  }

  return true
}

function palindrome1(str) {
    const reversed = str.split('').reverse().join('')

    return reversed === str
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - 1]
  })
}

module.exports = palindrome
