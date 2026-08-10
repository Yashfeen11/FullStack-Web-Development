const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {

  // 1. If value is empty, delete the property
  if (value === "") {
    delete records[id][prop];
  }

  // 2. If property is not tracks, update its value
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }

  // 3. If property is tracks
  else {
    // If tracks doesn't exist, create it
    if (records[id]["tracks"] === undefined) {
      records[id]["tracks"] = [];
    }

    // Add the new track
    records[id]["tracks"].push(value);
  }

  // Always return the complete records object
  return records;
}