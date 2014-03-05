module.exports = loadUsers

function loadUsers(userIds, load, cb) {
  var running = userIds.length
  var result = []

  userIds.forEach(loadAsync)

  function loadAsync(id, index) {
    load(id, function(user) {
      result[index] = user
      done()
    })
  }

  function done() {
    if (--running > 0) return
    cb(result)
  }
}

