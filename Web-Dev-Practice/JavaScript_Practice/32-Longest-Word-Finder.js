function findLongestWordLength(sentence){
   let spl= sentence.split(" ")
  let arr=[]
   for(let i of spl){
   let maxInd= (i.length);
   arr.push(maxInd);
  
   }
   let max=0;
   for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
      max= arr[i];
    }
   }
    return max;
}

let sentence = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWordLength(sentence));
