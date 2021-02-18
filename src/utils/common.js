
let count = 10;

function addCount(num) {
  count += num;
  return false;
}

function getCount() {
  return count;
}

module.exports = {
  count,
  addCount,
  getCount,
}