"use strict";
const sounds = [
  "kill1",
  "kill2",
  "kill3",
  "kill4",
  "kill5",
  "breach",
  "phoenix",
  "sage",
  "omen",
  "sova",
];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

//If user has clicked a sound and clicks another will stop current sound to play new one
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
