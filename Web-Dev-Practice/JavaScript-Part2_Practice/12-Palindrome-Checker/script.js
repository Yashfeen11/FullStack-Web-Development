let button = document.querySelector("#check-btn");
let textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  palindromeCheck(textInput.value);
});

function palindromeCheck(text) {
 
  const originalText = text;
  const cleanText = originalText.replace(/[^a-zA-Z0-9]/g, "");

  let txt = cleanText.toLowerCase();
  let rev = txt.split("").reverse().join("");

  if (txt === "") {
    alert("Please input a value");
    return;
  }

  if (txt === rev) {
    result.innerHTML = `<span class="input-text">${originalText}</span> is a palindrome`;
  } else {
    result.innerHTML = `<span class="input-text">${originalText}</span> is not a palindrome`;
  }
}