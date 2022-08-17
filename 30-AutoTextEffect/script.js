const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Welcome to my site";

let index = 1;
let speed = 300 / speedEl.value;

writeText();

/**
 *function will print set text on to screen letter by letter until whole string is complete
 */
function writeText() {
  //we set the textElement to our text we want on screen, then slice the start with our index
  textEl.innerText = text.slice(0, index);

  //increment the index so our slice method will update
  index++;

  //will increment until it has the full specified text length then reset and go again
  if (index > text.length) {
    index = 1;
  }

  //will keep calling with set speed
  setTimeout(writeText, speed);
}
//event will take an input and increase the speed
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
