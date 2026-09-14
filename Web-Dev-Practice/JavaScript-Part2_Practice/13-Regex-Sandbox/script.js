let regexPattern = document.querySelector("#pattern");
let stringToTest = document.querySelector("#test-string");
let testButton = document.querySelector("#test-btn");
let testResult = document.querySelector("#result");
let caseInsensitiveFlag = document.querySelector("#i");
let globalFlag = document.querySelector("#g");

function getFlags() {
  let str = "";

  if (caseInsensitiveFlag.checked && globalFlag.checked) {
    return "ig";
  } else if (caseInsensitiveFlag.checked || globalFlag.checked) {
    str = caseInsensitiveFlag.checked
      ? caseInsensitiveFlag.id
      : globalFlag.id;

    return str;
  } else {
    return "";
  }
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  const matches = stringToTest.textContent.match(regex);

  if (matches) {
    testResult.textContent = matches.join(", ");

    stringToTest.innerHTML = stringToTest.textContent.replace(
      regex,
      '<span class="highlight">$&</span>'
    );
  } else {
    testResult.textContent = "no match";
  }
});