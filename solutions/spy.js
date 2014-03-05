module.exports = Spy

function Spy(target, method) {
  if (!(this instanceof Spy)) return new Spy(target, method)

  var self = this
  this.count = 0

  var wrapped = target[method]
  target[method] = function wrapper() {
    self.count += 1
    return wrapped.apply(target, arguments)
  }
}

