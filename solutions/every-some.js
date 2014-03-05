module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(isAGoodUser)
  }

  function isAGoodUser(user) {
    return goodUsers.some(function(good) { return user.id === good.id })
  }
}

