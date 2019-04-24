const sortableArray = [];
let i = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  for (let i = 0; i < width; i++) {
    sortableArray.push(Math.floor(Math.random() * 360) + 1);
  }
}

function draw() {
  background(0);
  QuickSort(sortableArray, 0, sortableArray.length-1);
  for (let i = 0; i < sortableArray.length; i++) {
    noStroke();
    fill(sortableArray[i], 100, 100);
    rect(i, 0, 1, height);
  }
}






async function QuickSort(array, low, high) {
   const length = array.length; 
   let PartitionIndex;


  if(low < high) {
    let PartitionIndex = await Partition(array, low, high);
    await Promise.all([
    //changes the high closer to the middle
    QuickSort(array, low, PartitionIndex - 1),
    //changes the low closer to the middle    
    QuickSort(array, PartitionIndex + 1, high)])
  }  
  return array;
}
        

async function Partition(array, low, high) {
   let PartitionIndex = low;
   await sleep(200)
   for(let i = low; i < high; i++) {
    if(array[i] < array[high]){
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
