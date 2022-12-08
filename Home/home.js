let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

generate()

function generate() {
    randNums = [];
    let size = document.getElementById("size").value;
    let increment = document.getElementById("increment").value
    console.log(canvas.width)
    for(let i = 0; i < canvas.width/size; i++) {
        randNums.push(Math.ceil((Math.floor(Math.random() * canvas.height) / increment) * 10));
    }
    drawInit(randNums)
}

function drawInit(nums) {
   console.log(nums)
}

async function sortAnimate() {

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function HSBToRGB(h, s, b) {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
  }