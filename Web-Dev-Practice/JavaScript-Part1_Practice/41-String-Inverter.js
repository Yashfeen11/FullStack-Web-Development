function reverseString(str){
let reverse ="";
   for ( let i=0; i<str.length; i++){
     reverse+= (str[str.length -(i+1)])
   }
  return reverse;
}
console.log(reverseString("Hello"));