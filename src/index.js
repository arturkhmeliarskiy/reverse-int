module.exports = function reverse (n) {
  return Number(String(n).split('').filter(val => val !== '-').reverse().join(''));
}
