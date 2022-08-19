const toggles = document.querySelectorAll(".toggle");
const goodEl = document.querySelector("#good");
const cheapEl = document.querySelector("#cheap");
const fastEl = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === theClickedOne) {
      fastEl.checked = false;
    }

    if (cheapEl === theClickedOne) {
      goodEl.checked = false;
    }

    if (fastEl === theClickedOne) {
      cheapEl.checked = false;
    }
  }
}
