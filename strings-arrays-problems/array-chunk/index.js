// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if ((!size && (typeof size === 'object' || typeof size === undefined)) || !Array.isArray(array)) {
    return
  }

  if (!array.length) {
    return [[]]
  }

  let leftOvers = array.length % size
  let leftOversArr = []
  let output = []

  if (leftOvers) {
    leftOversArr = array.slice(array.length - leftOvers)
    array.splice(array.length - leftOvers)
  }

  while (array.length > 0) {
    output.push(array.slice(0, size))
    array.splice(0, size)
  }

  return leftOvers ? [...output, ...[leftOversArr]] : output
}

module.exports = chunk;
