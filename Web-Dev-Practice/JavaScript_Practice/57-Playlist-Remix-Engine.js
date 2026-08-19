const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newarr.push({
        ...arr[i][j],
        source: [i, j]
      });
    }
  }

  return newarr;
}

let flattenPlay = flattenPlaylists(playlists)
console.log(flattenPlay);

function scoreTracks(arr){
  for(let i=0; i<arr.length; i++){   
        arr[i].score = arr[i].votes * 10 - Math.abs(arr[i].bpm-120)
  }
  return arr;
}



function dedupeTracks(arr){
  let newarr=[];
  for(let i=0; i<arr.length; i++){
    {
      let isPresent = false;
      for(let j=0; j<newarr.length; j++){
         if(arr[i].trackId === newarr[j].trackId){
          isPresent = true;
          }
       }
       if(isPresent== false){
            newarr.push(arr[i]);
          }
    }
  }
   return (newarr);
}

function enforceArtistQuota(arr, max) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    // Check how many times the current artist
    // already exists in newarr
    for (let j = 0; j < newarr.length; j++) {
      if (arr[i].artist === newarr[j].artist) {
        count++;
      }
    }

    // Add only if artist has appeared less than max times
    if (count < max) {
      newarr.push(arr[i]);
    }
  }

  return newarr;
}


function buildSchedule(arr){
  let newarr = [];
  
  for(let i=0; i<arr.length; i++){
    let ob = {
    slot: "",
    trackId: ""
  }
        ob.slot = i+1;
        ob.trackId = arr[i].trackId;
        newarr.push(ob);
        
  }
  return(newarr);
}


function remixPlaylist(arr, max){
let step1 = flattenPlaylists(arr)
let step2 = scoreTracks(step1)
let step3 = dedupeTracks(step2)
let step4 = enforceArtistQuota(step3, max)
let final = buildSchedule(step4)

return final
}



