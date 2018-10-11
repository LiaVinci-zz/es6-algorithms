// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoizeFib(fn) {
  let cache = {}

  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    cache[args] = fn.apply(this, args)
    return cache[args]
  }
}

function slowFib(num) {
  if (num < 2) {
    return num
  }

  return fib(num - 1) + fib(num - 2)
}

const fib = memoizeFib(slowFib)

module.exports = fib;
