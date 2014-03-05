function repeat(operation, num) {
  if (num <= 0) return
  operation()

  return repeat.bind(this, operation, --num)
}

function trampoline(fn) {
  return function() {
    var next = fn.apply(this, arguments)
    while (next) {
      next = next()
    }
  }
}

module.exports = function(operation, num) {
  return trampoline(repeat)(operation, num)
}

