function convertHTML(str){
  let newstr= "";
  for(let i=0; i<str.length; i++){
    if(str[i] == "&"){
      newstr+= "&amp;";
    }
    else if(str[i] == "<"){
      newstr+= "&lt;";
    }
    else if(str[i] == ">"){
      newstr+= "&gt;";
    }
    else if(str[i] == "\""){
      newstr+= "&quot;";
    }
    else if(str[i] == "\'"){
      newstr+= "&apos;";
    }
    else{
      newstr+= str[i];
    }

  }
  return(newstr);
}
console.log(convertHTML("Dolce & Gabbana"))
