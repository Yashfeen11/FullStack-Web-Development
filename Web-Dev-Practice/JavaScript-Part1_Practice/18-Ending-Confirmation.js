function confirmEnding(str_check, str_against){
  let len1=str_check.length;
  let len2= str_against.length;
  let check = str_check.substring(len1-len2)==str_against;
 
  return check;

}
console.log(confirmEnding("Bastian","an"));
