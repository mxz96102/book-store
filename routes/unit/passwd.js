let sha = require('js-sha256').sha256

console.log(sha("123456"))

module.exports = {
  encode(p) {
    return sha(p)
  }
};