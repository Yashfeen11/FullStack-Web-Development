function uniteUnique(...arr){
  let newarr = arr;
  let unique = [];
  for(let i=0; i<newarr.length; i++){
      for(let j=0; j<arr[i].length; j++){
        let exist = false;
        for(let k=0; k<unique.length; k++){
          if(arr[i][j] == unique[k]){
          exist = true;
        }    
      }
      if(exist === false){
        unique.push(arr[i][j]);
      }
    }
   }
   return(unique);
  }

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
