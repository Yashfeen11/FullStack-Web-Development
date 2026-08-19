function pairElement(str){
  let arr= [];
  for(let i=0; i<str.length; i++){
    if(str[i]=='A'){
      arr.push(["A","T"]);
    }
    else if(str[i]=='T'){
      arr.push(["T","A"]);
    }
    else if(str[i]=='C'){
      arr.push(["C","G"]);
    }
    else if(str[i]=='G'){
      arr.push(["G","C"]);
    }
  }
  return arr;
}
console.log(pairElement("ATCGA"));