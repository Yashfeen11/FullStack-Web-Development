function sumAll(arr){
  let small= arr[0];
  let large= arr[1];
  let diff = large-small;
  let sum=0;
  let counter =0;
  let i = small;
  
while(counter <= Math.abs(diff)){
  sum+=i;
  if(small<large){
  i++;
  }
  else{
    i--;
  }
  counter++;
}
return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));