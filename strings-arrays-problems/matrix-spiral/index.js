// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  if (!n) {
    return
  }

  let matrix = Array.from({ length: n }, () => new Array(n))
  let counter = 1
  let levels = n
  let row = 0
  let col = 0

  while (counter <= n^n) {
    debugger
    if (col !== levels - 1 && col !== levels - 1) { // Top Edge
      while (!matrix[row][col] && col < levels - 1) {
        matrix[row][col] = counter

        counter += 1
        col += 1
      }
    } else if (col === levels - 1 && row !== levels - 1) { // Right Edge
      while (!matrix[row][col] && row < levels - 1) {
        matrix[row][col] = counter

        counter += 1
        row += 1
      }
    } else if (col === levels - 1 && row === levels - 1) { // Bottom Edge
      while (!matrix[row][col] && col >= 0) {
        matrix[row][col] = counter

        counter += 1
        col -= 1
      }
    } else if (col !== levels - 1 && row === levels - 1) { // Left Edge
      console.log('hello')
      row -= 1
      debugger
      while (!matrix[row][col] && row >= 0) {
        matrix[row][col] = counter

        counter += 1
        row -= 1
      }

      row = 0
      col = 0
      levels -= 1
    }
  }
debugger
  return matrix
}

matrix(5)

module.exports = matrix;
