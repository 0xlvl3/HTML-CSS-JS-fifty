"use strict";

const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", generateJoke);

generateJoke();

//Using an API
function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
