module.exports = curryN

function curryN(fn, n) {
  n = n || fn.length
  var fixed = []

  function partial() {
    var args = Array.prototype.slice.call(arguments, 0)

    if (fixed.length + args.length === n) {
      return fn.apply(this, fixed.concat(args))
    }

    fixed = fixed.concat(args)
    return partial
  }

  return partial
}

