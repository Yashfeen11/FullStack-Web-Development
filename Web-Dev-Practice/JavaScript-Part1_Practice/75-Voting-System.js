let poll = new Map();

function addOption(option) {
  if (!option) {
    return `Option cannot be empty.`;
  } 
  else if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } 
  else {
    return `Option "${option}" already exists.`;
  }
}
console.log(addOption("Turkey"));
console.log(addOption());
console.log(addOption("Morocco"));
console.log(addOption("Spain"));



function vote(option, voterId){
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`;
  }
  else{
   if(poll.get(option).has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
   }
   else{
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
   }
  }
}
console.log(vote("Turkey", "traveler2"));
console.log(vote("Turkey", "traveler3"));
console.log(vote("Nigeria", "traveler2"));
console.log(vote("Morocco", "traveler3"));


function displayResults(){
  let result = "";
 for (let [key, value] of poll) {
  result+=`${key}: ${value.size} votes\n`;
}
return `Poll Results:\n${result.trimEnd()}`;
}
console.log(displayResults());
