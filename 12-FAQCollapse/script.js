//1 Bring in toggle buttons
//2 Loop through nodelist (forEach)
//3 Add click event (addEventListener)
//4 Toggle the active class on the parent node (.parentNode & classList.toggle)

const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
