module.exports = printShortMessages

function printShortMessages(messages) {
  return messages
    .map(function(message) { return message.message })
    .filter(function(message) { return message.length < 50 })
}

