function MergeSort(array) {
  if (array.length > 1) {
    const middle = array.length / 2;

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const leftResult = MergeSort(left);
    const rightResult = MergeSort(right);

    result = merge(leftResult, rightResult);

    return result;
  } else {
    return array;
  }
}

function merge(left, right) {
  let indexLeft = 0;
  let indexRight = 0;
  let array = [];

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      array.push(left[indexLeft]);
      indexLeft++;
    } else {
      array.push(right[indexRight]);
      indexRight++;
    }
  }
  return array.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
