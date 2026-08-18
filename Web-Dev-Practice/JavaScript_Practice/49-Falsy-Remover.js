function bouncer(arr){
  let copy = [...arr];
  let restrictedarr= [ false, null, 0, "", undefined, NaN ];
  let newarr=[];
  
  for(let i=0; i<copy.length; i++){
    let count =0;
    for(let j=0; j<restrictedarr.length;j++){
      if(copy[i] === restrictedarr[j] || Number.isNaN(copy[i])){
        count+=1;
      }
    }
    if(count==0){
      newarr.push(copy[i]);
    }
  }
  
  return(newarr);
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]))