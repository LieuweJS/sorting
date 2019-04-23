const sortableArray = [];

for(let i = 0; i < 10; i++) {
  const randomNumb = Math.floor(Math.random() * 1000) + 1;
  sortableArray.push(randomNumb);
}

let sortedArray = BubbleSort(sortableArray);
console.log(sortedArray);

function BubbleSort(array) {
  const length = array.length;
  for(i = 0; i < length; i++) {
    let swapped = false;
    
    for(j = 0; j <  length - i - 1; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }
    if(swapped === false) {
      return array; 
    } 
  }
}
