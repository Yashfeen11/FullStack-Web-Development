function bubbleSort(arr){
  let n= arr.length;
  for(let i=0; i<n; i++){
    for(let j=0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1]= temp
      }

    }
  }
  return arr;
}
console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));