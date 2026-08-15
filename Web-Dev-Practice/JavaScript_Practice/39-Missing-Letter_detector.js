function fearNotLetter(str) {
  for(let i=0; i< str.length-1; i++){
    let current = str[i].charCodeAt(0);
    let next = str[i+1].charCodeAt(0);
    if(next-current > 1){
        return String.fromCharCode(current+1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));