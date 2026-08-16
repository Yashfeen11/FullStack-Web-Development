function findElement(arr, func){
 let num ;
  for(let i=0 ; i<arr.length; i++){
    num = i;
    if (func(arr[i])){
      return arr[i];
    }
    }
}
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });