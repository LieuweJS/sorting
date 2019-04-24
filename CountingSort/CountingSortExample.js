let sortableArray = [];
for(let i = 0; i <= 10; i++) {
  SortableArray.push(Math.floor(Math.random() * 1000) +  1); 
}

console.log(CountingSort(sortableArray));

function CountingSort(array) {
  let i = 0;
  let j = 0;
  const length = array.length;
  let count = [];
  for (i; i <= length + 1; i++) {
    count[i] = 0;
  }
  for (i = 0; i < length; i++) {
    count[array[i]] += 1;
  }
  for (i = 0; i <= length + 1; i++) {

    while (count[i] > 0) {
      array[j] = i;
      j++;
      count[i]--;
    }
  }
  return array;
}
