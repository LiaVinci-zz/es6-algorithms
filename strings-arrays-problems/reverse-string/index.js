/*
  --- Problem Statement ---
  Given a string, return a new string with the reversed order of characters.

  --- Examples ---
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

// TimeComplexity O(N) SpaceComplexity(2N)
function reverse(str) {
  if (!str || str.length === 1) {
    return str
  }

  let output = ''
  str = str.split('')

  while (str.length > 0) {
    output += str.pop()
  }

  return output
}

function reverseWithEcmaScriptHack(str) {
  if (!str || str.length === 1) {
    return str
  }

  return str.split('').reverse().join('')
}

function reverseWithForLoop(str) {
  if (!str || str.length === 1) {
    return str
  }

  let reversed = ''

  for (let char of str) {
    reversed = char + reversed
  }

  return reversed
}

function reverseWithReduce(str) {
  if (!str || str.length === 1) {
    return str
  }

  return str.split('').reduce((output, char) => {
    return char + output
  })
}

module.exports = reverse
