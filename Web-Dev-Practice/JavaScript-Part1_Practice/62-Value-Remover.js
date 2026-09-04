function destroyer(arr, ...arg){
   console.log(arg)
  let newarr= arr.filter((num)=>{
     return !(arr.includes(arg))
  });
  console.log(newarr);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3)