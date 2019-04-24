let sortableArray = [];
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
  CountingSort(sortableArray)
  for (let i = 0; i < sortableArray.length; i++) {
    noStroke();
    fill(sortableArray[i], 100, 100);
    //rect(i, 0, 1, height);
    //fill(255)
    rect(i, (height - sortableArray[i] * height / 360), 1, (sortableArray[i] * (height / 360)));
  }
}

async function CountingSort(array) {
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
      await sleep(10);
      array[j] = i;
      j++;
      count[i]--;
    }
  }
  noLoop();
  return array;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
