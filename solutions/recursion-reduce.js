module.exports = reduce

function reduce(arr, fn, initial) {
  var index = 0

  function next(result) {
    if (index > arr.length - 1) return result
    result = fn(result, arr[index++], index, arr)
    return next(result)
  }

  return next(initial)
}

