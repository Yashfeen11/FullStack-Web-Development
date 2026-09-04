let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, property){
  
  for(let i of contacts){
     if((name === i.firstName)){  
       if(property=="lastName") {
          return(i.lastName);
       }
       else if(property == "number"){
        return(i.number);
       }
       else if(property === "likes"){
        return(i.likes);
       }
       else{
        return("No such property");
       }
  }
}
  return "No such contact";
}
console.log(lookUpProfile("Harry", "lastName"));