const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arr){
  let obarr= [];
  let isundefined = false;
  for(let i=0; i<arr.length; i++){
    if(arr[i]!== undefined){
       obarr.push(arr[i]);
       
    }
    else{
         isundefined = true;
    }
  }
  if(isundefined == true){
    console.log("[COMPACTED]")
  }
  return obarr;
}
let compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arr){
let sorted = [];
let copyArr= [...arr];

  for(let i=0; i<copyArr.length; i++){
    for(let j=0; j<copyArr.length-1; j++){
    if(copyArr[j].id > copyArr[(j+1)].id){
     [copyArr[j], copyArr[j + 1]] = [copyArr[j + 1], copyArr[j]];   
    }
  }
  }
  return (copyArr);
}
let sortedFragments =sortFragments(compactedShuffledFragments);


function dedupeFragments(arr){
let copyarr= [];
  for(let i=0; i<arr.length; i++ ){
    if(arr[i].id !== arr[i-1]?.id){
      
        copyarr.push(arr[i]);
    }
    else{
      console.log("[DEDUPED]");

    }
  }
  return copyarr;
}
let dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(arr) {
  let newarr = [];
  let currentIndex = 0;
  
  let startId = arr[0].id;
  let endId = arr[arr.length - 1].id;

  for (let currentId = startId; currentId <= endId; currentId++) {
    if (arr[currentIndex] && arr[currentIndex].id === currentId) {
      newarr.push(arr[currentIndex]);
      currentIndex++;
    } else {
      console.log("[FILLED]");
      newarr.push({ id: currentId, text: "[...]" });
    }
  }

  return newarr;
}

 let filledFragments = (fillMissingFragments([{ id: 1, text: "a" }, { id: 3, text: "c" }]));

  function assembleStory(arr){
    let string = "";
    for(let i=0; i<arr.length; i++){
        string+= arr[i].text + "\n";
    }
    return string.trim("");
  }
  console.log(assembleStory(filledFragments));
