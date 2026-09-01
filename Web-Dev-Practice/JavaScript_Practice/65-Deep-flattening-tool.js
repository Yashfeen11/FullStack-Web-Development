function steamrollArray(arr) {
  let result = [];

  function flatten(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flatten(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  }

  flatten(arr);

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

/* function steamrollArray(nestedArray){
  let newArr= [];
 
  for(let i=0; i<nestedArray.length; i++){
    if(Array.isArray(nestedArray[i])){
      newArr.push(...steamrollArray(nestedArray[i]));
    }
    else{
      newArr.push(nestedArray[i]);
    }
  }
  return newArr;
}
console.log(steamrollArray([[["a"]], [["b"]]]));
*/