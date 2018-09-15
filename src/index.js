module.exports = function getZerosCount(number) {
  var count = 0;
  for (var i = 1; Math.pow(5, i) < number; i++) {
    count += Math.floor(number / Math.pow(5, i));
  }
  return count;
}