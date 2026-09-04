function largestOfAll(arr){
  let largest= [];
  for(let i=0; i<arr.length; i++){
    largest.push(Math.max(...arr[i]))
    
  }
  return largest;
}
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
