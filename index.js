//grabbing the checkbox from the DOM
const checkbox = document.getElementById("checkbox");

//adding eventListener to the checkbox
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
