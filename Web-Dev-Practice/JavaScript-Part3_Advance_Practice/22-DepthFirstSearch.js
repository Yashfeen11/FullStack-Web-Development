function dfs(graph, root){
  let stack = [root];
  let visited = [];
  let result = []; 
  while(!stack.length==0){
    let value = stack.pop();
    if(visited.includes(value)){
      continue;
    }
    else{
      visited.push(value);
      result.push(value);
    }
    for(let i=0; i<graph[value].length; i++){
      if (graph[value][i] === 1 && !visited.includes(i)){
       stack.push(i);
     }
    }
  }
  return result;
}
let graph = [
  [0, 1, 0, 0], 
  [1, 0, 1, 0], 
  [0, 1, 0, 1], 
  [0, 0, 1, 0]
]
console.log(dfs(graph, 1))
