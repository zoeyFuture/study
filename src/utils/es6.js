export let count = 10;

export function addCount(num) {
  count += num;
  return false;
}

export function getCount() {
  return count;
}