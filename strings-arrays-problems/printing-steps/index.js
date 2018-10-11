// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(numberOfSteps) {
  if (!numberOfSteps) {
    return
  }

  let step = 1

  while(step <= numberOfSteps) {
    let arr = new Array(numberOfSteps)

    arr = arr.fill('#', 0, step)
    arr = arr.fill(' ', step)

    step++

    console.log(arr.join(''))
  }
}

function stepsRec(numberOfSteps, step = 1) {
  if (numberOfSteps < step) { return }

  let arr = new Array(numberOfSteps)

  arr = arr.fill('#', 0, step)
  arr = arr.fill(' ', step)

  console.log(arr.join(''))

  stepsRec(numberOfSteps, step + 1)
}

module.exports = steps;
