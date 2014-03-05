module.exports = countWords

function countWords(inputWords) {
  return inputWords.reduce(function(map, word) {
    map[word] = (map[word] || 0) + 1
    return map
  }, {})
}

