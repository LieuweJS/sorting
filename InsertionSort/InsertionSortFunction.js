function InsertionSort(array) {
  const length = array.length; 
  
  for(let i = 1; i < length; i++) {
    let key = array[i];
    let j = i - 1;
    while(j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }   
  return array;
}
