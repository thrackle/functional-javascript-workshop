module.exports = repeat

function repeat(operation, num) {
  var start = Date.now()

  function next() {
    if (num <= 0) return
    operation()
    num--

    var elapsed = Date.now() - start
    if (elapsed > 250) setTimeout(next, 1)
    else next()
  }

  next()
}

