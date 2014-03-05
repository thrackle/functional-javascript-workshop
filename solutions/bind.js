module.exports = createLogger

function createLogger(namespace) {
  return console.log.bind(console, namespace)
}

