// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  if (!num && typeof num === 'object' || typeof num === 'undefined') {
      return num
  }

  let output = 0
  let isNegative = false

  if (num < 0) {
    isNegative = true
    num = num * -1
  }

  while (num % 10 !== num) {
    let mostRightDigit = num % 10

    output = (output + mostRightDigit) * 10
    num = (num - mostRightDigit) / 10
  }

  output += num % 10

  return isNegative ? output * -1 : output
}

function reverseInt1(num) {
  const reversed = num.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(num)
}

module.exports = reverseInt;
