const sortableArray = [];
let i = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  for (let i = 0; i < width / 2; i++) {
    sortableArray.push(Math.floor(Math.random() * 360) + 1);
  }
  QuickSort(sortableArray, 0, (sortableArray.length - 1));
}

function draw() {
  background(0);
  for (let i = 0; i < sortableArray.length; i++) {
    noStroke();
    fill(sortableArray[i], 100, 100);
    //rect(i*2, 0, 2, height);
    //fill(255)
    rect(i * 2, (height - sortableArray[i] * height / 360), 2, (sortableArray[i] * (height / 360)));
  }
}

async function QuickSort(array, low, high) {
  const length = array.length;
  let PartitionIndex;

  if (low < high) {
    let PartitionIndex = await Partition(array, low, high);

    await Promise.all([
      QuickSort(array, low, PartitionIndex - 1),
      QuickSort(array, PartitionIndex + 1, high)
    ])
  }
  return array;
}


async function Partition(array, low, high) {
  let PartitionIndex = low;
  for (let i = low; i <= high; i++) {
    if (array[i] < array[high]) {
      await swap(array, i, PartitionIndex)

      PartitionIndex++;
    }
  }
  await swap(array, high, PartitionIndex)

  return PartitionIndex;
}

async function swap(array, a, b) {
  await sleep(15)
  const temp = array[a];
  array[a] = array[b]
  array[b] = temp
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

