//canvas api
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//element selections
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

//Global Variables
let size = 10;
let isPressed = false;
let color = "black";
let x, y;

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
/**
 * Will create a circle on specified coords
 * @param {coords} x
 * @param {coords} y
 */
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

/**
 * Will create a line on specified coords
 * @param {coords} x1
 * @param {coords} y1
 * @param {coords} x2
 * @param {coords} y2
 */
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  //positioning when pressed
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  //when mousedown true,
  if (isPressed) {
    //set scope variables for drawLine since it takes 4 parameters
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) size = 50;

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) size = 5;

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));
clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
