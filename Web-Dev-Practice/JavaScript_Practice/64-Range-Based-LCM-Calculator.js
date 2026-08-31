function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let multiple = max;

  while (true) {
    let isCommon = true;

    for (let i = min; i <= max; i++) {
      if (multiple % i !== 0) {
        isCommon = false;
        break;
      }
    }

    if (isCommon) {
      return multiple;
    }

    multiple++;
  }
}

console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520

/* function smallestCommons(arr){
let min= Math.min(arr[0],arr[1]);
let max= Math.max(arr[0], arr[1]);
let mul = 1;
for(let k=min; k<=max; k++){
  mul= mul*k
}

for(let i = 1; i<=mul; i++){
    for(let j=min; j<=max; j++){
      if(i%j==0){
        
      }
    }
}

}
smallestCommons([1, 5])
*/