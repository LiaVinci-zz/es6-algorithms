// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(numberOfSteps) {
  if (!numberOfSteps) {
    return
  }

  let step = 1

  while(step <= numberOfSteps) {
    let arr = new Array(numberOfSteps * 2 - 1)

    arr = arr.fill(' ', 0, numberOfSteps - step)
    arr = arr.fill('#', numberOfSteps - step, (-1 * (numberOfSteps - step)) || numberOfSteps * 2 - 1)
    arr = arr.fill(' ', (-1 * (numberOfSteps - step)) || numberOfSteps * 2)

    step++

    console.log(arr.join(''))
  }
}

module.exports = pyramid;
