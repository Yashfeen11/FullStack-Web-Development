let footballTeam = {
  team: "Palestine",
  year: 2026,
  headCoach: "Jamal Mahmoud",
  players: [
    {
      name: "Oday Dabbagh",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Mahmoud Wadi",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Tamer Seyam",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Oday Kharoub",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Mohammed Rashid",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Mohammad Yameen",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Amr Kaddoura",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Mahmoud Abu Warda",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Mohammed Saleh",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Musab Battat",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Yaser Hamed",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Mohammed Khalil",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Abdelatif Bahdari",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Rami Hamadeh",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Amir Hamed",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Tawfiq Ali",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};
let teamName= document.querySelector("#team");
let year= document.querySelector("#year");
let headCoach= document.querySelector("#head-coach");
teamName.textContent=footballTeam.team;
year.textContent=footballTeam.year;
headCoach.textContent=footballTeam.headCoach;
let selectPlayers= document.querySelector("#players");
let cards = document.querySelector(".cards")

function displayCard(){
if(selectPlayers.value=="all"){
for(let i=0; i<footballTeam.players.length;i++){
  if(footballTeam.players[i].isCaptain===true){
   cards.innerHTML+=(`<div class="player-card">
  <h2>(Captain)${footballTeam.players[i].name}</h2>
  <p>Position: ${footballTeam.players[i].position}</p>
</div>`);
  }
  else{
    cards.innerHTML+=(`<div class="player-card">
  <h2>${footballTeam.players[i].name}</h2>
  <p>Position: ${footballTeam.players[i].position}</p>
</div>`);
  }
}
  }
  
}
displayCard();

selectPlayers.addEventListener("change", ()=>{
  filtering(selectPlayers.value);
});
function filtering(val){
   cards.innerHTML= "";
  for(let i=0; i<footballTeam.players.length; i++){
    if(footballTeam.players[i].position===val){
     if(footballTeam.players[i].isCaptain){
      cards.innerHTML+=`<div class="player-card">
  <h2>(Captain)${footballTeam.players[i].name}</h2>
  <p>Position: ${footballTeam.players[i].position}</p>
</div>`;
     }
     else{
      cards.innerHTML+=`<div class="player-card">
  <h2>${footballTeam.players[i].name}</h2>
  <p>Position: ${footballTeam.players[i].position}</p>
</div>`;
    }
    }
   
  }
  if(val=="all"){
    displayCard();
  }
}

