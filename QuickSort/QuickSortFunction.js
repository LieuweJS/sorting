function QuickSort(array, low, high) {
  const length = array.length;
  let pivot;
  let PartitionIndex;
  if (low < high) {
    let PartitionIndex = Partition(array, low, high);

    QuickSort(array, low, PartitionIndex - 1);
    QuickSort(array, PartitionIndex + 1, high);
  }
  return array;
}

function Partition(array, low, high) {
  let pivotValue = array[high];
  let PartitionIndex = low;

  for (let i = low; i < high; i++) {
    if (array[i] < pivotValue) {
      const temp1 = array[i];
      array[i] = array[PartitionIndex];
      array[PartitionIndex] = temp1;

      PartitionIndex++;
    }
  }
  const temp2 = array[high];
  array[high] = array[PartitionIndex];
  array[PartitionIndex] = temp2;

  return PartitionIndex;
}     
