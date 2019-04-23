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
  BubbleSort(sortableArray, i)
  i++;
  for (let i = 0; i < sortableArray.length; i++) {
    noStroke();
    fill(sortableArray[i], 100, 100)
    rect(i, 0, 1, height)
  }
}

function BubbleSort(array, i) {
  const length = array.length; 
  
  if(i < length) {
    let key = array[i];
    let j = i - 1;
    while(j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  } else {
    noLoop();
    console.log(array);
  }
}
