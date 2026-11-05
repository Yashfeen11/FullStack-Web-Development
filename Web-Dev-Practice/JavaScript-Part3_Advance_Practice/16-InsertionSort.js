function insertionSort(arr){
  let n = arr.length;

  for(let j = 1 ; j<n; j++){
    let key = arr[j];
     let i = j-1;
    while(i>=0 && arr[i]>key){
      arr[i+1]= arr[i];
      i=i-1;
    }
    arr[i+1]= key;
  }
  return arr;
}
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(insertionSort([5,4,33,2,]))