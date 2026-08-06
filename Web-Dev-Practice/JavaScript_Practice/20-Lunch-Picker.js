let lunches = [];
function addLunchToEnd(lunches,item){
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}
function addLunchToStart(lunches,item){
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}
function removeLastLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches to remove.");
  
  }
  else{
    let removed= lunches.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return lunches;
}
function removeFirstLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches to remove.");
  }
  else{
    let removed=lunches.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);}
    return lunches;
}
function getRandomLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches available.");
  }
  else{
  let random=Math.floor(Math.random() * lunches.length);
  console.log(`Randomly selected lunch: ${lunches[random]}`);
  }
}
function showLunchMenu(lunches){
  if(lunches.length===0){
    console.log("The menu is empty.");
  }
  else{
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
}
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"))
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
