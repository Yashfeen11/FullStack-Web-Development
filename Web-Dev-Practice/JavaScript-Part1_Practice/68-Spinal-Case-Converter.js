function spinalCase(str){
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.replace(/[\s_-]+/g, "-");
  return str.toLowerCase();
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
