let themes=[
  {
    name: "light",
    message: "Hello Sunshineee, it's day"
  },
  {
    name: "dark",
    message: "Hello Moonie, it's night time"
    
  },
  {
    name: "ocean",
    message: "Hello , it's deep as ocean today"
  },
  {
    name: "teal",
    message: "Hello, Tealee, it's your Teal Theme"
  }
]
let themeSwitcherButton= document.querySelector("#theme-switcher-button");
let ul=document.querySelector("#theme-dropdown");

themeSwitcherButton.addEventListener("click", ()=>{
  clickOnButton();
});
function clickOnButton(){
  if(ul.hidden==true){
    ul.hidden=false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
  else{
    ul.hidden=true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  } 
}

let color=document.querySelectorAll('[role="menuitem"]');
let status = document.querySelector("#status");
let currentTheme = "";

color.forEach(col => {
  col.addEventListener("click", () => {

    if (currentTheme !== "") {
      body.classList.remove(currentTheme);
    }

    body.classList.add(col.id);
    currentTheme = col.id;

    let selectedTheme = themes.find(
      theme => theme.name === col.textContent
    );

    status.textContent = selectedTheme.message;
    

    ul.hidden = true;
  });
});