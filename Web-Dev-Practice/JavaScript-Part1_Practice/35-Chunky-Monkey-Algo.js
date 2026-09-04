function chunkArrayInGroups(arr,num){
  let result =[];
  for(let i=0; i<arr.length;i+=num){
    let div= arr.slice(i, i+num);
      result.push(div);
      
  }
  return(result);
}
console.log(chunkArrayInGroups([1,2,3,4,5,6],3));