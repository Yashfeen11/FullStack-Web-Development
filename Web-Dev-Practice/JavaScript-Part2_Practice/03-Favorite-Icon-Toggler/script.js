const emojiFill = document.querySelectorAll(".favorite-icon");
function classChange(button){
  if (button.classList.contains("filled")) {
    button.classList.remove("filled");
    button.innerHTML = "&#9825;";
} else {
    button.classList.add("filled");
    button.innerHTML = "&#10084;";
}
}
emojiFill.forEach(button => {
  button.addEventListener("click", () => classChange(button));
});