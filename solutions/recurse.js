module.exports = getDependencies

function getDependencies(tree) {
  var result = {}

  function iterator(deps) {
    if (!deps) return

    Object.keys(deps).forEach(function(name) {
      result[name + '@' + deps[name].version] = true
      iterator(deps[name].dependencies)
    })
  }

  iterator(tree.dependencies)

  return Object.keys(result).sort()
}

