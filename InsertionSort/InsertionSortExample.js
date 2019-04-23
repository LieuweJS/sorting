const sortableArray = [];

for(let i = 0; i < 10; i++) {  
  sortableArray.push(Math.floor(Math.random() * 1000) + 1;);
}
const sortedArray = InsertionSort(sortableArray);
console.log(sortedArray);

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
