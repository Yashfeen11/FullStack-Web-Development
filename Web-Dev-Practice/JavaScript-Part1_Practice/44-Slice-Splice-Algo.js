function frankenSplice(arr1, arr2, index){
  let copy = arr2.slice();
  copy.splice(index, 0 , ...arr1)
  return copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
