const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      //reset our value everytime
      codes[i].value = "";
      //timeout used so numbers stay in the right place
      setTimeout(() => {
        codes[i + 1].focus();
      }, 100);
    } else if ((e.key = "Backspace")) {
      setTimeout(() => {
        codes[i - 1].focus();
      }, 10);
    }
  });
});
