function sumFibs(num){
  let a =0; 
  let b = 1;
  let c = 0;
  let arr=[a,b];
  let sum=0;
  while(c<=num){
    c = a+b;
    a = b;
    b = c;
    if(c<=num)
    arr.push(c);
    
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2!==0){
      sum+=arr[i];
    }
  }

  return(sum);

  
  
}
console.log(sumFibs(1000));
