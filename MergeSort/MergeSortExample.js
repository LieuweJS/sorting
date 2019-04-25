let array = [];

for (let i = 0; i <= 10; i++) {
  array.push(Math.floor(Math.random() * 1000) + 1);
}

console.log(MergeSort(array));

let array = [];
console.log(mergeSort(array));

function merge(left, right) {
  let array = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  array = array.concat(left).concat(right);
  left.splice(0, left.length);
  right.splice(0, right.length);

  return array;
}

function MergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let result = [];
  let length;
  let i;
  let j;

  for (i = 0, length = array.length; i < length; i++) {
    result.push([array[i]]);
  }
  result.push([]);
  for (let limit = length; limit > 1; limit = Math.floor((limit + 1) / 2)) {
    for (j = 0, k = 0; k < limit; j++, k += 2) {
      result[j] = merge(result[k], result[k + 1]);
    }
    result[j] = [];
  }
  return result[0];
}
