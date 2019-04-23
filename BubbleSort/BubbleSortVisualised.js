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
  if (i < array.length) {
    if (i < array.length) {
      const length = array.length;
      for (j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  } else {
    noLoop();
    console.log(array);
  }
}
