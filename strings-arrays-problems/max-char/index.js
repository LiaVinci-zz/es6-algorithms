// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if ((!str && typeof str === 'object') || typeof str === undefined) {
    return str
  }

  let charCounter = {}
  let maxChar = {
    counter: 0,
    character: ''
  }

  for (let char of str) {
    charCounter[char] ? charCounter[char]++ : charCounter[char] = 1

    if (charCounter[char] > maxChar.counter && char !== maxChar.character) {
      maxChar.counter = charCounter[char]
      maxChar.character = char
    }
  }

  return maxChar.character
}

module.exports = maxChar;
