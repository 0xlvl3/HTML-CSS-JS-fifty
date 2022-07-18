"use strict";

const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", generateJoke);

generateJoke();

//Using an API
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;

  // .then((response) => response.json())
  // .then((data) => {
  //   jokeEl.innerHTML = data.joke;
  // });
}
