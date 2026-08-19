function generatePassword(lenpas){
  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass= "";

  for(let i=0; i<lenpas; i++){
    let randomInd = Math.floor(Math.random()*str.length);
    pass+=str[randomInd];
  }
  
  return (pass);

}
let password = generatePassword(10);
console.log(`Generated password: ${password}`)



