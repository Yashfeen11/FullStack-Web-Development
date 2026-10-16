function rangeOfNumbers(startNum, endNum){
  let arr = [];
 if(startNum==endNum){
  return [startNum];
 }
 else{
  arr = rangeOfNumbers(startNum+1, endNum)
  arr.unshift(startNum);
}
return arr;
}
console.log(rangeOfNumbers(1,5));