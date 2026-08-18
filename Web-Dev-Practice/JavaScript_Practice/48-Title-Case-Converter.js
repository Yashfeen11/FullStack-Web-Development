function titleCase(str){
  let copy = str.split(" ");
  let newstr = ""
  for( let i=0; i<copy.length; i++){
    for(let j=0; j<copy[i].length; j++){
      if(j==0){
        let temp = (copy[i][j]).toUpperCase();
        newstr+= temp
      }
      else{
       newstr+=(copy[i][j]).toLowerCase();
      }
    }
    newstr+= " "
  }
  return (newstr.trim());

}
console.log(titleCase("I like to code"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
