
let drum_buttons = document.querySelectorAll(".drum-pad");
let powerButton = document.querySelector("#powcheck");
let powerButtonText = document.querySelector("#power");
let displayText = document.querySelector("#display");
let drumType = document.querySelector("#drum-type");
let drumTypeText = document.querySelector("#drum-text");

powerButton.addEventListener("change", () => {
  if (powerButton.checked) {
    powerButtonText.innerHTML = `<span>On</span>`;
  } else {
    powerButtonText.innerHTML = `<span>Off</span>`;
  }
});

drum_buttons.forEach(drum => {
  let src = drum.querySelector(".clip").getAttribute("src").split("/");
  let text = src[5].replace(".mp3", "");

  drum.addEventListener("click", () => {
    if(powerButton.checked){
    drum.querySelector("audio").play();
    displayText.textContent = text;
    }
    else{
      displayText.textContent = "";
    }
  });
});

document.addEventListener("keydown", (event) => {
  let keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  for (let i = 0; i < keys.length; i++) {
    if (event.key.toUpperCase() === keys[i]) {
      if (powerButton.checked) {
         let audio = document.getElementById(keys[i]);

        audio.currentTime = 0;
        audio.play();

        let src = audio.getAttribute("src").split("/");
        let text = src.at(-1).replace(".mp3", "");

        displayText.textContent = text;
      }
    }
  }
});
