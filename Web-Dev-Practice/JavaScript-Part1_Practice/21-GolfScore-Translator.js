const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, no_of_strokes){
  if(no_of_strokes===1){
    return "Hole-in-one!";
  }
  else if(no_of_strokes<= par-2){
    return "Eagle";
  }
  else if(no_of_strokes<= par-1){
    return "Birdie";
  }
  else if(no_of_strokes== par){
    return "Par";
  }
  else if(no_of_strokes== par+1){
    return "Bogey";
  }
  else if (no_of_strokes== par+2){
    return "Double Bogey";
  }
  else if(no_of_strokes>= par+3){
    return "Go Home!"
  }
}
console.log(golfScore(1,1));
console.log(golfScore(3,1));
console.log(golfScore(3,3));
console.log(golfScore(3,4));

