function adjacencyListToMatrix(list){
  let n= Object.keys(list).length;
  let matrix = Array.from(
  { length: n },
  () => Array(n).fill(0));

  for(let i=0; i<n; i++){
    let index = list[i].length;
    for(let j=0; j<index; j++){
      let key = list[i][j];
      matrix[i][key] = 1;
    }
  
  }
  for(let row of matrix){
    console.log(row);
  }

  return (matrix)
}
let obj={
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}
let obj1 = {0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}
console.log(adjacencyListToMatrix(obj1));

