let w;
let h;
let l = 0;
let currIndex = 0;
let index = 0;

let prevArray = [];

function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  let array = [];
  for(let i = 0; i < width; i++) {
  array.push(Math.floor(Math.random() * height) + 1) 
  }

  MergeSort(array);
}


function drawArray(array) {
  background(0)
  for (let i = 0; i <= w; i++) {
    noStroke();
    fill(255)
    rect(i, h - array[i], 1, array[i]);
  } 
}

async function MergeSort(array) {
  if (array.length > 1) {
    const middle = Math.round(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);
    await sleep(10)
    const leftResult = await MergeSort(left);
    await sleep(10)
    const rightResult = await MergeSort(right);
    await sleep(10)
    const result = await merge(leftResult, rightResult);
    await drawArray(result)

    return result;
  } else {
    return array;
  }
}

async function merge(left, right) {
  let i = 0;
  let j = 0;
  let array = [];
  let amountNew = 0;
  while (i < left.length || j < right.length) {
    if (i === left.length) {
      array.push(right[j]);
      j++;
    } else if (j === right.length || left[i] <= right[j]) {
      array.push(left[i]);
      i++;      
    } else {
      array.push(right[j]);
      j++;
    }
  }

  return array;
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
